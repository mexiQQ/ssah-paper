import React from 'react';

function AbstractSection() {
  return (
    <section id="abstract" className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Overview 
        </h2>
        <p className="text-gray-700 leading-relaxed">
          As large language models (LLMs) are overwhelmingly more and more integrated into various applications, ensuring they generate safe and aligned responses is a pressing need. Previous research on alignment has largely focused on general instruction-following but has often overlooked the unique properties and challenges of safety alignment, such as the brittleness of safety mechanisms.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          To bridge the gap, we propose the <strong>Superficial Safety Alignment Hypothesis (SSAH)</strong>, which posits that safety alignment should teach an otherwise unsafe model to choose the correct reasoning direction - interpreted as a specialized binary classification task - and incorporate a refusal mechanism with multiple reserved fallback options. Furthermore, through SSAH, we hypothesize that safety guardrails in LLMs can be established by just a small number of essential components.
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4">
          <li>
            We conduct an ablation study and identify four types of attribute-critical components in safety-aligned LLMs: Exclusive Safety Unit (ESU), Exclusive Utility Unit (EUU), Complex Unit (CU), and Redundant Unit (RU).
          </li>
          <li>
            Freezing certain safety-critical components <strong>(7.5%)</strong> during fine-tuning allows the model to retain its safety attributes while adapting to new tasks.
          </li>
          <li>
            Leveraging redundant units <strong>(20%)</strong> in the pre-trained model as an "alignment budget" can minimize the alignment tax while achieving alignment goals.
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          All considered, this paper concludes that the atomic functional unit for safety in LLMs is at the neuron level and underscores that safety alignment should not be complicated at the surface level. We believe this work contributes to the foundation of efficient and scalable safety alignment for future LLMs.
        </p>
      </div>
    </section>
  );
}

export default AbstractSection;
