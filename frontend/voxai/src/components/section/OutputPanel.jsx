import { Play, Download } from "lucide-react";

function StudioOutputPanel() {
  const wave = Array.from({ length: 70 }, () =>
    Math.floor(Math.random() * 100)
  );

  const progress = 0.4; // 40% played

  return (
    <div className="bg-stone-900 h-screen pt-[2cm] px-4 text-white">

      {/* VOICE NOTE CONTAINER */}
      <div className="flex items-center gap-4 bg-stone-800 border border-stone-700 rounded px-4 py-3">

        {/* PLAY */}
        <button className="w-10 h-10 flex items-center justify-center bg-amber-500 text-black rounded-full">
          <Play size={16} />
        </button>

        {/* WAVEFORM */}
        <div className="flex items-center gap-[2px] flex-1 h-10">

          {wave.map((h, i) => {
            const isPlayed = i / wave.length < progress;

            return (
              <div
                key={i}
                className={`w-[2px] rounded-full ${
                  isPlayed ? "bg-white" : "bg-stone-600"
                }`}
                style={{
                  height: `${h * 0.6}%`,
                }}
              />
            );
          })}

        </div>

        {/* TIME */}
        <p className="text-xs text-neutral-400">
          0:32
        </p>

        {/* DOWNLOAD (SMALL END ICON) */}
        <button className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-white transition">
          <Download size={16} />
        </button>

      </div>

    </div>
  );
}

export default StudioOutputPanel;