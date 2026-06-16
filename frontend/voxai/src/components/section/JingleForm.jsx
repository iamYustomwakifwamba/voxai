

import { Zap, Music4, Mic2, Languages } from "lucide-react";

function PromptBox() {
  return (
    <div className="mt-12 flex justify-center">
      <div className="w-full max-w-4xl rounded-3xl border border-neutral-700 bg-neutral-900/80 backdrop-blur-md">
        
        <textarea
          placeholder="Tell Voxa what you want to create..."
          className="w-full resize-none bg-transparent p-6 text-white placeholder:text-neutral-500 outline-none"
          rows={6}
        />

        <div className="border-t border-neutral-700 p-4 flex items-center justify-between flex-wrap gap-4">

          <div className="flex gap-3 flex-wrap">

            <button className="flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-neutral-300 hover:border-amber-500 hover:text-white transition">
              <Music4 size={16} />
              Amapiano
            </button>

            <button className="flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-neutral-300 hover:border-amber-500 hover:text-white transition">
              <Mic2 size={16} />
              Male Voice
            </button>

            <button className="flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-neutral-300 hover:border-amber-500 hover:text-white transition">
              <Languages size={16} />
              Swahili
            </button>

          </div>

          <button className="flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 font-semibold text-black hover:scale-105 transition">
            <Zap size={18} />
            Generate
          </button>

        </div>
      </div>
    </div>
  );
}

export default PromptBox;