# When Quantization Affects Confidence of Large Language Models?

[[Link](https://arxiv.org/abs/2405.00632)]

## Motivation

- Existing works have indicated that quantization might compromise performance and exacerbate biases in LLMs.

## Contributions

- Investigate how quantization with GPTQ influences the calibration and confidence of LLMs.
- Assess the confidence alignment between compressed and full LLMs at scale.
- Explain the quantization loss from the initial confidence perspective.

## Methodology

### Quantization

Post-training quantization method known as GPTQ: Employs iterative layer-wise weight quantization based on the input data, providing several benefits compared to other quantization methods: minimized weight approximation error, support for serialization across various bit configurations, and significantly accelerated inference using GPUs.

## Experiments

### Models

- BLOOM, OPT, Mistral-7B, LLaMA-7B.

### Datasets

**Commonsense reasoning**

- Question answering involving reading comprehension (BOOLQ);
- Natural text entailment (XSTORYEN,H ELLASWAG);
- Science fact knowledge (ARC,OBQA );
- Physical commonsense (PIQA).

### Metrics

- Accu, CE, ECE, ACE.

### Results

- **Calibration Impact**: Quantization amplifies the pre-existing high calibration error present in the models before compression across different models and benchmarks.
- **Confidence Impact**: An amplification in the variance across answers, reflecting increased uncertainty in answer selection due to quantization.
- **Identifying Cases of Confidence Change**: Quantization predominantly influences the confidence of samples where the original model exhibited lower confidence levels.
- **Jensen-Shannon Distances**: Distances between original and compressed decrease as the model size scales up.

## Findings

- Reveal that quantization with GPTQ to 4-bit results in a decrease in confidence regarding true labels, with varying impacts observed among different language models.
- Observe fluctuations in the impact on confidence across different scales.
- Propose an explanation for quantization loss based on confidence levels, indicating that quantization disproportionately affects samples where the full model exhibited low confidence levels in the first place.