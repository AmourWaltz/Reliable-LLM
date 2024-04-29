# Preserving Pre-trained Features Helps Calibrate Fine-tuned Language Models

[[Link](https://arxiv.org/abs/2305.19249)]

## Motivation

- Fine-tuned models still suffer from **overconfident predictions**, especially in out-of-domain settings.
- The PLMs are well-calibrated on the masked language modeling task with robust predictive confidence under domain shift, yet the fine-tuned models fail to retain such property due to **catastrophic forgetting**, which impacts the calibration on the downstream classification task.

## Methodology

### A Closed Look

- The PLM is relatively well-calibrated across different domains.
- Although the hidden representations of 50% masked inputs have shifted significantly from the original input, the PLM can still make calibrated predictions to the original inputs.
- Fine-tuning changes the hidden representation of the LM in two ways: (1) For the inputs within the same domain, fine-tuning enlarges the difference of the corresponding hidden representations. (2) For the inputs across different domains, fine-tuning makes the hidden representations from different domains much harder to distinguish by projecting them to a simpler data manifold, which causes the fine-tuned model fails to give proper predictive confidence for OD and outlier samples.

### Baselines (Pretrained Model Feature Preserving to Address Catastrophic Forgetting)

- Parameter-efficient tuning.
- Pre-trained weight decay.
- Mixout (stochastically replaces the model parameters with their pre-trained counterparts with probability p at each training iteration).

### Joint Learning with MLM Objective

- Jointly optimize the MLM objective in the fine-tuning phase.
- Three simple techniques to further strengthen the connection between the pre-trained model and our fine-tuned model.
  - Utilizing corpus of the pre-training phase.
  - Distillation from the pre-trained model.
  - Regularization on the contextualized representation.


## Experiments

### Datasets

- Natural Language Inference (NLI): SNLI (in-domain) and MNLI (out-of-domain).
- Paraphrase Detection (PD): QQP (in-domain) and TwitterPPDB (out-of-domain).
- Commonsense Reasoning: SWAG (in-domain) and HellaSWAG (out-of-domain).

### Models

- RoBERTa_{BASE}.

### Metrics

- Accuracy.
- ECE.

