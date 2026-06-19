import { Music4, Mic2, Languages, Zap } from "lucide-react";

function StudioPromptPanel() {
  return (
    <div className="bg-stone-800 h-screen flex items-center  justify-center px-4">

      <div className="w-full max-w-4xl mt-[15cm] rounded-2xl border border-neutral-700 bg-neutral-900/80 backdrop-blur-md">

        <textarea
          placeholder="Tell Voxa what you want to create..."
          className="w-full resize-none bg-transparent p-6 overflow-hidden text-white placeholder:text-neutral-500 outline-none"
          rows={3}
        />

        <div className="border-t border-neutral-700 p-4 flex items-center justify-between flex-wrap gap-4">

          {/* OPTIONS */}
          <div className="flex gap-3 flex-wrap">

            <button className="flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-neutral-300 hover:border-amber-500 hover:text-white transition">
              {/* <Music4 size={16} /> */}
              Saloon
            </button>

            <button className="flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-neutral-300 hover:border-amber-500 hover:text-white transition">
              {/* <Mic2 size={16} /> */}
              Hotel
            </button>

            <button className="flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-neutral-300 hover:border-amber-500 hover:text-white transition">
              {/* <Languages size={16} /> */}
              Logistic
            </button>

          </div>

          {/* GENERATE BUTTON */}
          <button className="flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 font-semibold text-black hover:scale-105 transition">
            <Zap size={18} />
            Generate
          </button>

        </div>

      </div>

    </div>
  );
}

export default StudioPromptPanel;