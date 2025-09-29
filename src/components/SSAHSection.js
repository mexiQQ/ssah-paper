import React from 'react';
import { figure2, figure3, figure4, figure7} from '../assets';

function SSAHSection() {
  return (
    <section id="ssah" className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Superficial Safety Alignment Hypothesis (SSAH)
        </h2>

        {/* Introductory Context */}
        <p className="text-gray-700 leading-relaxed">
          Previous research introduced the <strong>Superficial Alignment Hypothesis (SAH)</strong>, which posits that a model’s <em>knowledge and capabilities</em> are primarily learned during <em>pretraining</em>, while alignment teaches the model <em>which subdistribution of formats</em> to use when interacting with users. However, this hypothesis focuses on general alignment, making it challenging to isolate the effects of pretraining from those of alignment in cases where a model fails to meet user expectations.
        </p>

        {/* SSAH Definition */}
        <p className="text-gray-700 leading-relaxed mt-4">
          To specifically address safety alignment, we propose the <strong>Superficial Safety Alignment Hypothesis (SSAH)</strong>, which focuses on models capable of fulfilling malicious requests. The hypothesis states:
        </p>
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-800 mt-4">
          <strong>SSAH:</strong> <em>Given an unsafe model that is capable of fulfilling users' malicious requests, <strong>safety alignment</strong> teaches the model the correct <strong>reasoning direction</strong> and a simple refusal mechanism with reserved options.</em>
        </blockquote>

        {/* Reasoning Direction Definition */}
        <p className="text-gray-700 leading-relaxed mt-4">
          <strong>Reasoning direction</strong> refers to the model's internal decision-making process when responding to malicious queries. It represents the binary choice between fulfilling a harmful request or issuing a refusal, based on safety considerations.
        </p>

        {/* Key Differences */}
        <h3 className="text-lg font-semibold text-gray-800 mt-6">
          Key Differences from SAH
        </h3>
        <ol className="list-decimal list-inside text-gray-700 mt-4 space-y-2">
          <li>
            <strong>Knowledge and reasoning ability:</strong> SSAH assumes models already possess sufficient knowledge and reasoning abilities, allowing safety alignment to focus solely on ensuring safe behavior without addressing broader capability limitations.
          </li>
          <li>
            <strong>Refusal mechanisms:</strong> Safety alignment emphasizes standardized refusal formats with fallback options, such as "I cannot fulfill your request as it violates safety guidelines," making the task more straightforward compared to handling diverse human preferences in general alignment.
          </li>
          <li>
            <strong>Correction of reasoning direction:</strong> SSAH aims to teach the model to consistently choose the correct reasoning direction, which can be framed as a binary classification task—either fulfilling or refusing a user request based on its safety implications.
          </li>
        </ol>

           {/* Challenges in Proving */}
           <h3 className="text-lg font-semibold text-gray-800 mt-8">
          Challenges in Proving SSAH
        </h3>
        <p className="text-gray-700 leading-relaxed mt-4">
          Empirically proving SSAH remains challenging due to the infeasibility of sampling sufficient outputs to fully capture the model’s distribution of responses. Specifically, it is difficult to draw comprehensive conclusions solely from surface-level benchmark evaluations. 
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          To address this limitation, we take an <strong>alternative approach</strong>: <strong className='text-red-400'>if SSAH holds,</strong> we should observe distinct and consistent differences in the reasoning direction at each step of generation between safety-aligned and non-safety-aligned models. In a safety-aligned model, the reasoning direction should consistently guide the model in rejecting harmful queries at every token generation step. In contrast, a non-safety-aligned model might exhibit reasoning patterns that lean toward fulfilling malicious requests. Rather than relying solely on surface-level benchmark evaluations, we can probe the model’s reasoning direction to gain deeper insights into its internal decision-making process at each step regardless of the specific outputs produced.
        </p>

        {/* Probing Experiment */}
        <h3 className="text-lg font-semibold text-gray-800 mt-8">
          Probing Experiment
        </h3>
        <p className="text-gray-700 leading-relaxed mt-4">
          We designed a probing experiment to infer the model’s reasoning direction by comparing the <strong>hidden state distances</strong> in feature space across three types of queries:
        </p>
        <ol className="list-decimal list-inside text-gray-700 mt-4 space-y-2">
          <li><strong>Query:</strong> A malicious query (e.g., "How to make a bomb?").</li>
          <li><strong>Query + benign prompt tokens:</strong> The malicious query followed by benign tokens (e.g., "Sorry, I can’t...").</li>
          <li><strong>Query + malicious prompt tokens:</strong> The malicious query followed by malicious tokens (e.g., "Here’s how...").</li>
        </ol>
        <p className="text-gray-700 leading-relaxed mt-4">
          By comparing the distances between hidden states, we gain insights into how safety alignment reshapes the model’s decision-making process during token generation. Specifically, we expect aligned models to show shorter distances between the <strong>Query</strong> and <strong>Query + benign prompt tokens</strong>, reflecting a preference for safe reasoning.
        </p>

        {/* Placeholder for Probing Experiment Results */}
        <div className="my-6 w-full h-auto p-10 bg-white flex items-center justify-center">
          <img src={figure2} alt="Figure 2" className="w-1/2 m-auto h-auto" />
        </div>

        <div className="my-6 w-full h-auto p-10 bg-white flex items-center justify-center">
          <img src={figure7} alt="Figure 7" className="w-1/2 m-auto h-auto" />
        </div>

        {/* Results Analysis */}
        <h3 className="text-lg font-semibold text-gray-800 mt-8">
          Results Analysis
        </h3>
        <p className="text-gray-700 leading-relaxed mt-4">
          The experiment results confirm that safety alignment influences the model’s reasoning direction at each step of generation:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li>
            In aligned models, the distance between <strong>Query</strong> and <strong>Query + benign prompt tokens</strong> is consistently shorter than the distance to <strong>Query + malicious prompt tokens</strong>.
          </li>
          <li>
            In unaligned models, the opposite pattern is observed, indicating a lack of strong preference for safe reasoning.
          </li>
          <li>
            Aligned models exhibit clear and consistent safe reasoning preferences across all transformer blocks, whereas unaligned models demonstrate less pronounced differences.
          </li>
        </ul>

        {/* Placeholder for Transformer Block Analysis */}
        <div className="my-6 w-full h-auto p-10 bg-white flex items-center justify-center">
          <img src={figure3} alt="Figure 3" className="w-1/4 m-auto h-auto" />
        </div>

        {/* Discussion */}
        <h3 className="text-lg font-semibold text-gray-800 mt-8">
          Discussion and Implications
        </h3>
        <p className="text-gray-700 leading-relaxed mt-4">
          The results highlight that safety alignment not only influences higher-level features in later layers but also embeds safe reasoning preferences in earlier layers of the transformer architecture. This suggests that safety alignment operates at multiple levels, fundamentally reshaping the model’s internal decision-making process to ensure safer behavior throughout the response generation process.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          <strong>While these findings provide strong evidence supporting SSAH, it is important to note that they do not fully capture the nuanced changes introduced by safety alignment. Further research is needed to explore other potential effects and limitations.</strong>
        </p>

        {/* Placeholder for Additional Visuals */}
        <div className="my-6 w-full h-auto p-10 bg-white flex items-center justify-center">
          <img src={figure4} alt="Figure 4" className="w-1/4 m-auto h-auto" />
        </div>
      </div>
    </section>
  );
}

export default SSAHSection;
