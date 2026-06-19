
import { UserRound, WandSparkles, History, Zap } from "lucide-react";

function LeftStudioPanel() {
  return (
    <div className="bg-stone-900 h-screen flex flex-col">

      {/* USER BLOCK */}
      <div className="pt-5">
        <div className="flex gap-2 border border-amber-600 mx-2 rounded-xl h-14 px-3 items-center">

          <div className="text-white bg-amber-600 rounded-full p-2 flex items-center justify-center">
            <UserRound size={18} />
          </div>

          <p className="text-white text-sm">
            Yusto Mwakifwamba
          </p>

        </div>
      </div>

      {/* NAVIGATION */}
      <div className="mt-6 px-2 flex flex-col gap-2 text-sm">

        <div className="flex items-center gap-3 text-white bg-amber-600 rounded-lg px-3 py-2 cursor-pointer">
          <WandSparkles size={18} />
          Studio
        </div>

        <div className="flex items-center gap-3 text-neutral-400 hover:text-white hover:bg-stone-800 rounded-lg px-3 py-2 cursor-pointer">
          <History size={18} />
          History
        </div>

      </div>

      {/* DIVIDER */}
      <div className="mx-2 my-5 border-t border-stone-700"></div>

      {/* CREDITS */}
      <div className="mt-auto mx-2 mb-4 border border-stone-700 rounded-xl p-3">

        <div className="flex items-center gap-2 text-white">
          <Zap size={16} className="text-amber-500" />
          <p className="text-sm">Credits</p>
        </div>

        <p className="text-neutral-500 text-xs mt-1">
          12 remaining this month
        </p>

      </div>

    </div>
  );
}

export default LeftStudioPanel;