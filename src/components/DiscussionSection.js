import React from 'react';

function DiscussionSection() {
  return (
    <section id="discussion" className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Discussion, Limitation, and Conclusion
        </h2>

        {/* Discussion */}
        <h3 className="text-lg font-semibold text-gray-800 mt-6">
          Discussion
        </h3>
        <p className="text-gray-700 leading-relaxed mt-4">
          While our <strong>Safety Alignment Hypothesis (SAH)</strong> provides valuable insights into adversarial scenarios, such as jailbreak attacks, this work does not propose a specific solution to address these issues. If these challenges could be resolved within the framework of our theory, the term "Superficial" in SSAH may no longer be necessary. 
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Recent research <a href="#" className="text-blue-500 underline">[Qi et al., 2024]</a> offers supporting evidence for this perspective. However, advanced adversarial attacks may not be fully mitigated by relying solely on the model’s internal mechanisms. A systematic, multi-layered approach extending beyond the model itself may be required to effectively defend against sophisticated threats.
        </p>

        {/* Limitation */}
        <h3 className="text-lg font-semibold text-gray-800 mt-6">
          Limitation
        </h3>
        <p className="text-gray-700 leading-relaxed mt-4">
          In reallocating redundant units for safety purposes, we only evaluated the impact of the alignment method <strong>Supervised Fine-Tuning (SFT)</strong>. Due to resource constraints, this study did not explore other alignment methods, such as <strong>Proximal Policy Optimization (PPO)</strong> or <strong>Direct Preference Optimization (DPO)</strong>. Future work could expand on these methods to validate the generalizability of our approach.
        </p>

        {/* Conclusion */}
        <h3 className="text-lg font-semibold text-gray-800 mt-6">
          Conclusion
        </h3>
        <p className="text-gray-700 leading-relaxed mt-4">
          This paper distinguishes safety alignment from general alignment in large language models (LLMs) and addresses three critical questions:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li>How does safety alignment affect model behavior?</li>
          <li>Why are safety mechanisms brittle?</li>
          <li>How can the safety alignment tax be mitigated?</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          By systematically answering these questions, we demonstrate that safety alignment can be a straightforward and efficient process, providing a foundation for more robust and scalable safety mechanisms in future LLMs.
        </p>
      </div>
    </section>
  );
}

export default DiscussionSection;
