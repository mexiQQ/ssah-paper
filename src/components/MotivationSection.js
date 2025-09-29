import React from 'react';
import { figure1} from '../assets';


function MotivationSection() {
  return (
    <section id="motivation" className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Motivation
        </h2>
    
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Text Content */}
          <div className="basis-3/4">
            <p className="text-gray-700 leading-relaxed">
              This study follows a structured three-step approach to address the following critical questions of safety alignment in LLMs. First, we propose a hypothesis aimed at advancing the theoretical understanding of safety alignment. Second, based on this framework, we investigate two fundamental challenges. Finally, leveraging the insights gained, we propose targeted mitigation strategies to address the identified issues.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mt-6">Key Questions</h3>
    
            {/* Question 1 */}
            <div className="mt-4">
              <p className="text-gray-800 font-bold">
                Question 1: <span className="font-normal italic">How does safety alignment impact model behavior?</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through <strong>SSAH</strong>, we posit that safety alignment fundamentally alters a model's decision-making process by teaching an otherwise unsafe model - fulfilling malicious or harmful requests - to follow the correct reasoning pathways. This process can be viewed as a specialized binary classification task - the model must either fulfill the user's request or refuse it based on safety considerations.
              </p>
            </div>
    
            {/* Question 2 */}
            <div className="mt-4">
              <p className="text-gray-800 font-bold">
                Question 2: <span className="font-normal italic">Why is safety alignment brittle, and why does it introduce an alignment tax?</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                We propose an attribute-based approach to analyzing the alignment and fine-tuning processes, where specific attributes are assigned to each individual computational unit - primarily input channels and output neurons. <strong>Our findings explain that the desired attributes can be achieved by repurposing units that were originally responsible for other functions.</strong> This reallocation helps explain both the brittleness of safety mechanisms and alignment tax.
              </p>
            </div>
    
            {/* Question 3 */}
            <div className="mt-4">
              <p className="text-gray-800 font-bold">
                Question 3: <span className="font-normal italic">Can these issues of safety alignment be mitigated?</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                By freezing the safety-critical components during fine-tuning and repurposing redundant units, we can effectively mitigate the brittleness and minimize the alignment tax. <strong>We conclude that the atomic functional unit for safety in LLMs resides at the neuron level and underscores that safety alignment should not be complicated.</strong>
              </p>
            </div>
          </div>
    
          {/* Image */}
          <div className="basis-1/4 flex justify-center">
            <img src={figure1} alt="Figure 1" className="max-w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default MotivationSection;
