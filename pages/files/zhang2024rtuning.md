# R-Tuning: Instructing Large Language Models to Say ‘I Don’t Know’

[[Link](https://arxiv.org/pdf/2311.09677)]

## Motivation

- Previous instruction tuning methods force the model to complete a sentence no matter whether the model knows the knowledge or not.
- When the question is out of the parametric knowledge, it will try to make up something and fail to indicate when it lacks knowledge. Training a model exclusively on correct answers inadvertently teaches it to guess rather than admit its ignorance.

## Methodology

**Refusal-Aware Instruction Tuning (R-Tuning)** aims to endow the model with refusal-aware answering ability by recognizing when they should — and shouldn’t — claim knowledge.
1. Measure the knowledge gap between parametric knowledge and the instruction tuning data, and identify uncertain questions. The instruction tuning data is split into uncertain data and certain data.
2. Construct the refusal-aware data by padding the uncertainty expression after the label words, and then finetune the model on the refusal-aware data.


![alt text](image.png)

### Refusal-Aware Data Identification

- Apply the pre-trained model to answer all the questions and split the questions into two sets based on the comparison between the prediction and label. If the model’s prediction matches the label, the question is assigned to the certain set, and otherwise, it belongs to the uncertain set.

### Refusal-Aware Data Construction

- Introduce a padding method, which keeps the original labels while appending the uncertainty expression at the end.

### Training and Inference

- With the refusal-aware dataset, apply the standard procedures of fine-tuning a language model.
- During the inference, fit the input question and the model will output its answer. Then the designed prompt template *Are you sure you accurately answered the question based on your internal knowledge? I am* will be appended to the question and answer.
- Use the weighted combination of the probability of uncertainty expression and answer prediction as the confidence value to calculate the AP score.

## Experiments

### Datasets

- Question-Answering: ParaRel, HotpotQA, SelfAware, HaluEval, FalseQA, and NEC.
- Multiple-Choice: MMLU, WiCE, and FEVER.

### Baselines

- Pretrain-T: Evaluate the performance of original pre-trained checkpoints on the entire test set.
- Pretrain-W: To verify the effectiveness of willingly answered questions, we evaluate the performance of the original pre-trained checkpoints on the test set that our fine-tuned models are willing to answer.
- Vanilla: Fine-tune the model on D with all questions and ground-truth labels.

### Models

- Mistral LLM.

### Metrics

- Accuracy.
- Average Precision (AP) score

## Findings

- Uncertainty can also be an indicator of whether the pre-trained model is familiar with the knowledge.
- Uncertainty learning improves AP score.
- Uncertainty learning improves the calibration and prediction.
- R-Tuning refuses nearly all these unanswerable questions, while other baselines answer most of the questions even though they are told to refuse.
- The lower perplexity of certain data shows that the pre-trained model is more familiar with them and is likely to provide correct answers, while the high perplexity of uncertain data corresponds to the hallucinations it provides, instead of the correct answers.
