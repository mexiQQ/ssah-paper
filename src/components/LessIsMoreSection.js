import React from 'react';
import { figure5, figure6, table1, table2, table3, table4 } from '../assets';

function LessIsMoreSection() {
  return (
    <section id="less-is-more" className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Less is More for Safety Alignment
        </h2>

        {/* Introduction */}
        <p className="text-gray-700 leading-relaxed">
          Based on the <strong>Superficial Safety Alignment Hypothesis (SSAH)</strong>, we posit that safety alignment only needs to teach the model the correct reasoning direction - either fulfilling or refusing a request - and to equip it with a standard refusal mechanism. This leads to the insight that <strong>safety alignment can be achieved using only a small subset of critical computing units, as the task can be interpreted as a binary classification combined with a multi-selection task.</strong>
        </p>

        {/* Identifying Safety-Critical Units */}
        <h3 className="text-xl font-semibold text-gray-800 mt-8">
          Identifying Safety-Critical Computing Units
        </h3>
        <p className="text-gray-700 leading-relaxed mt-4">
          To validate this hypothesis, we categorized the computing units of large language models (LLMs) into four groups:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li>
            <strong>Exclusive Safety Units (ESU):</strong> Linked exclusively (relatively) to the safety attribute.
          </li>
          <li>
            <strong>Exclusive Utility Units (EUU):</strong> Linked exclusively (relatively) to the utility attribute.
          </li>
          <li>
            <strong>Complex Units (CU):</strong> Contribute to both safety and utility attributes.
          </li>
          <li>
            <strong>Redundant Units (RU):</strong> Not associated with any attribute.
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          To verify that different groups of computing units contribute exclusively, collectively, or neither to safety and utility attributes, we use a <strong>model pruning mechanism</strong>. The rationale behind pruning is that removing components most closely linked to a specific attribute would significantly impact the model’s performance in that area - it is a sort of ablation study. As pruning reduces the model’s capacity, the most affected attributes reveal the critical components for that function.
        </p>

        {/* Placeholder for Table */}
        <div className="my-6 w-full h-auto bg-white p-10 flex items-center justify-center">
          <img src={table1} alt="Table 1" className="w-1/2 m-auto h-auto" />
        </div>

        {/* Ablation Study Results */}
        <p className="text-gray-700 leading-relaxed mt-4">
          Our experiments reveal that only <strong>1.3–1.4%</strong> of the model's units are exclusively responsible for safety attributes, confirming that safety alignment relies on a minimal subset of safety-critical components. Complex units play a supportive role by contributing to both safety and utility tasks, while redundant units have no significant impact.
        </p>

        {/* Safety Brittleness */}
        <h3 className="text-xl font-semibold text-gray-800 mt-8">
          Why is Safety Brittle?
        </h3>
        <p className="text-gray-700 leading-relaxed mt-4">
          Fine-tuning safety-aligned models for new tasks often compromises their safety performance. During fine-tuning, safety-critical units and complex units tend to be repurposed for utility tasks, weakening the model’s safety guardrails. This phenomenon highlights the inherent brittleness of current safety alignment methods.
        </p>

        {/* Placeholder for Image */}
        <div className="my-6 w-full h-auto p-10 bg-white flex items-center justify-center">
          <img src={figure5} alt="Figure 5" className="w-1/2 m-auto h-auto" />
        </div>

        {/* Freezing Safety-Critical Components */}
        <h3 className="text-lg font-semibold text-gray-800 mt-8">
          Freezing Safety-Critical Components
        </h3>
        <p className="text-gray-700 leading-relaxed mt-4">
          To address this brittleness, we propose freezing safety-critical components, including ESUs and top-performing complex units, during fine-tuning. Experimental results demonstrate that this approach significantly preserves safety performance while minimizing degradation in safety guardrails.
        </p>

        {/* Placeholder for Table */}
        <div className="my-6 w-full h-auto bg-white p-10 flex items-center justify-center">
          <img src={table2} alt="Table 2" className="w-1/2 m-auto h-auto" />
        </div>

        {/* Comparing with PEFT */}
        <h3 className="text-lg font-semibold text-gray-800 mt-8">
          Comparison with Parameter-Efficient Fine-Tuning (PEFT)
        </h3>
        <p className="text-gray-700 leading-relaxed mt-4">
          Our approach outperforms parameter-efficient fine-tuning methods such as <code>LoRA</code>, <code>LLaMA-Adapter</code>, and <code>Prefix Tuning</code>, which degrade safety performance more severely. This confirms that the preservation of safety is not merely due to freezing parameters but results from accurately identifying and protecting safety-critical components.
        </p>

        {/* Placeholder for Table */}
        <div className="my-6 w-full h-auto p-10 bg-white flex items-center justify-center">
          <img src={table3} alt="table 3" className="w-1/2 m-auto h-auto" />
        </div>

         {/* Free Lunch */}
         <h3 className="text-lg font-semibold text-gray-800 mt-8">
          Free Lunch: Repurposing Redundant Units as Alignment Budget
        </h3>
        <p className="text-gray-700 leading-relaxed mt-4">
          We extend our insights to explore whether redundant units (RUs)—which account for at least <strong>20%</strong> of parameters in pre-trained LLMs—can be repurposed as a budget for safety alignment. Our hypothesis is that fine-tuning these redundant units can enhance safety alignment while reducing alignment tax.
        </p>

        {/* Placeholder for Image */}
        <div className="my-6 w-full h-auto p-10 bg-white flex items-center justify-center">
          <img src={figure6} alt="Figure 6" className="w-1/2 m-auto h-auto" />
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mt-8">
          Experimental Results
        </h3>
        <p className="text-gray-700 leading-relaxed mt-4">
          Using the pruning method, we identified redundant units in LLaMA-7B and fine-tuned only these units for alignment. The results demonstrate that alignment can be achieved with updates to just <strong>20% of the model's parameters</strong>, effectively eliminating alignment tax. This finding highlights the scalability and efficiency of our approach, making it a promising direction for future LLM safety alignment.
        </p>

        {/* Placeholder for Table */}
        <div className="my-6 w-full h-auto p-10 bg-white flex items-center justify-center">
          <img src={table4} alt="table 4" className="w-1/2 m-auto h-auto" />
        </div>
      </div>
    </section>
  );
}

export default LessIsMoreSection;
