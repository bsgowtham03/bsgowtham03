const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          My Projects
        </h1>

        {/* Project 1 and 2 in one row */}
        <div className="flex flex-col md:flex-col gap-10">
          {/* PetPals Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              ChatBot WebApplication
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            An interactive AI-powered chatbot web application built using APIs, Gradio, Hugging Face, and OpenAI, delivering seamless real-time conversational experiences with cutting-edge NLP technologies.
            </p>
            <a
              href="https://github.com/bsgowtham03/chatbot"
              className="text-[#fe5617] font-bold text-lg hover:underline"
              target="_blank"
            >
              Live Demo
            </a>
          </div>

          {/* Biosta AI Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              Power-Manager-Tely
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            An innovative Power Management Tool designed to optimize power consumption in the era of 5G and edge computing. Focused on researching open-source tools, documenting system knobs, collecting telemetry data, and measuring power utilization to drive efficiency and achieve net-zero consumption goals.
            </p>
            <a
              href="https://github.com/bsgowtham03/Power-Manager-Tely"
              className="text-[#fe5617] text-center font-bold text-lg hover:underline"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-col gap-10">
          {/* PetPals Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
            Heart Disease Prediction Using ML
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            This project predicts heart disease using machine learning algorithms such as QDA, SVM, and Logistic Regression. It includes data preprocessing, exploratory data analysis, and model evaluation to ensure accurate and reliable predictions.
            </p>
            <a
              href="https://github.com/bsgowtham03/Heart-Disease-Prediction-Using-ML"
              className="text-[#fe5617] font-bold text-lg hover:underline"
              target="_blank"
            >
              Live Demo
            </a>
          </div>

         
        </div>

        {/* Project 3 and 4 in one row */}
        <div className="flex flex-col md:flex-col gap-10 mt-10">
         
          <div className="w-full md:w-1/2 flex flex-col place-self-end items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
            Speech to speech Interaction using LLM

            </h1>
            <p className="text-lg text-gray-700 mb-4">
            Speech-to-Speech system combining ASR, GPT-2 NLP, and TTS. Captures speech via Google Speech Recognition, generates responses using GPT-2, and vocalizes output with `pyttsx3`. Enables real-time dialogue for seamless human-computer interaction.
            </p>
            <a
              href="https://github.com/bsgowtham03/speech-to-speech-Interaction-using-LLM"
              className="text-[#fe5617] font-bold text-lg hover:underline"
              target="_blank"
            >
              Live Demo
            </a>
          </div>

          </div>
          </div>
          </div>
  );
};

export default Project;
