import { TypeAnimation } from "react-type-animation";
import PromptBox from "../section/JingleForm";

function TrialPromptSectionLayout() {
  return (
    <div>
      <div className="flex justify-center mt-[4cm]">
        <TypeAnimation
          sequence={[
            "Make Professional Jingles in Few Seconds",
            6000,
            "",
            500,
            "Create Audio Ads with AI",
            6000,
            "",
            500,
            "Generate Catchy Business Promos",
            6000,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-white text-6xl font-black text-center"
        />
      </div>

      <div className="flex justify-center mt-4">
        <TypeAnimation
          sequence={[
            "To Sound Better",
            2000,
            "",
            500,
            "To Grow Your Brand",
            2000,
            "",
            500,
            "To Reach More Customers",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-amber-600 text-6xl text-center"
        />
      </div>

      <div className="mt-5">
        <p className="text-center text-neutral-500">Start with a simple prompt or dive into our pro editing tools, <br /> <span>your next track is just a step away.</span></p>
      </div>

      <div>
        <PromptBox/>
      </div>

      
    </div>
  );
}

export default TrialPromptSectionLayout;