import { TypeAnimation } from "react-type-animation";

function LoginFormSection() {
  return (
    <div className="h-screen w-full bg-stone-900 flex">

      {/* LEFT SIDE - ANIMATED TEXT */}
      <div className="w-1/2 hidden md:flex flex-col justify-center px-16">
        
        <TypeAnimation
          sequence={[
            "Create powerful AI jingles in seconds",
            2000,
            "",
            500,
            "Turn text into professional audio ads",
            2000,
            "",
            500,
            "Grow your brand with VoxAI",
            2000,
            "",
            500,
            "Your best voice actor AI",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-white text-5xl font-black leading-tight"
        />

        <p className="text-neutral-400 mt-6 text-lg">
          VoxAI helps businesses generate studio-quality jingles instantly using AI.
        </p>

      </div>

      {/* RIGHT SIDE - LOGIN FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6">

        <div className="w-full max-w-md">

          <h1 className="text-white text-3xl font-bold">
            Login to VoxAI
          </h1>

          <p className="text-neutral-400 mt-2 text-sm">
            Welcome back, let's create something powerful
          </p>

          <form className="mt-8 space-y-5">

            {/* EMAIL */}
            <div>
              <label className="text-neutral-400 text-sm">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-2 bg-transparent border-b border-stone-700 text-white py-3 outline-none focus:border-amber-500"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-neutral-400 text-sm">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-2 bg-transparent border-b border-stone-700 text-white py-3 outline-none focus:border-amber-500"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 rounded-full transition"
            >
              Login
            </button>

            {/* FOOTER */}
            <p className="text-neutral-500 text-sm text-center mt-4">
              Don't have an account?{" "}
              <span className="text-amber-500 cursor-pointer hover:underline">
                Sign up
              </span>
            </p>

          </form>
        </div>

      </div>
    </div>
  );
}

export default LoginFormSection;