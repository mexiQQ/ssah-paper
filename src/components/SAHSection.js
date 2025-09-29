import React from 'react';

function SAHSection() {
  return (
    <section id="sah" className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Safety Alignment Hypothesis (SAH) for Jailbreak/Red-teaming Attaks
        </h2>

        {/* Introduction */}
        <p className="text-gray-700 leading-relaxed">
          The <strong>Superficial Safety Alignment Hypothesis (SSAH)</strong> was originally proposed to explain how safety alignment impacts model behavior under direct attacks. However, our research demonstrates that SSAH can extend beyond direct attacks to provide theoretical guidance for addressing jailbreak and red-teaming scenarios. 
        </p>

        {/* Transition to SAH */}
        <h3 className="text-lg font-semibold text-gray-800 mt-6">
          Evolving from SSAH to SAH
        </h3>
        <p className="text-gray-700 leading-relaxed mt-4">
          Building on the foundations of SSAH, we propose the <strong>Safety Alignment Hypothesis (SAH)</strong>, which refines and extends SSAH to encompass all stages of model generation. SAH represents a comprehensive framework for understanding how alignment techniques should influence model behavior to ensure safety across all interaction steps.
        </p>
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-800 mt-4">
          <strong>Safety Alignment Hypothesis (SAH):</strong> 
          <em>
            Given an unsafe model capable of fulfilling users' malicious requests, safety alignment should teach the model to choose and maintain the correct reasoning direction at each generation step, along with simple refusal mechanisms. This allows the model to continuously re-evaluate and re-choose the reasoning direction throughout the interaction.
          </em>
        </blockquote>

        {/* Theoretical Contributions */}
        <h3 className="text-lg font-semibold text-gray-800 mt-6">
          Theoretical Contributions
        </h3>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li>
            SAH provides a theoretical framework for improving safety alignment by equipping models with mechanisms to maintain the correct reasoning direction across all generated tokens.
          </li>
          <li>
            This hypothesis offers a conceptual pathway to mitigate jailbreak attacks by ensuring safety mechanisms persist even under adversarial attempts.
          </li>
          <li>
            SAH bridges the gap between existing alignment techniques and their limitations, offering a roadmap for future advancements in robust and scalable safety alignment.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SAHSection;
