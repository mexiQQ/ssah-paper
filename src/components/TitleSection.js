import React from 'react';

function TitleSection() {
  return (
    <section className="text-center py-12 bg-gray-50">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 leading-tight">
        Superficial Safety Alignment Hypothesis
      </h1>

      <section className="text-center py-8 bg-gray-50">
        {/* Author Names */}
        <p className="text-lg font-semibold text-gray-800">
            Jianwei Li &amp; Jung-Eun Kim <span className="text-gray-500">*</span>
        </p>

        {/* Organization Information */}
        <p className="text-gray-700">
            Department of Computer Science <br />
            North Carolina State University <br />
            Raleigh, NC, USA
        </p>

        {/* Email */}
        <p className="text-gray-600 mt-2">
            {`{jli265, jung-eun.kim}@ncsu.edu`}
        </p>
    </section>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        <a
          href="https://arxiv.org/abs/2410.10862"
          className="px-6 py-2 text-sm font-medium text-white bg-gray-800 rounded-md shadow hover:bg-gray-700"
        >
          Paper
        </a>
        <a
          href="https://github.com/JEKimLab/SSAH"
          className="px-6 py-2 text-sm font-medium text-gray-800 border border-gray-800 rounded-md shadow hover:bg-gray-100"
        >
          Code
        </a>
      </div>
      <div className='mt-5 text-gray-600 text-sm'>Accepted by ICLR 2026</div>
    </section>
  );
}

export default TitleSection;
