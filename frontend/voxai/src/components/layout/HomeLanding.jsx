import { AudioLines, Briefcase, Zap } from "lucide-react"
import { Link } from "react-router-dom"

function HomeLandingLayout () {
    return (
        <div className="bg-stone-800">
            <div className="mt-[3cm]">
                <p className="border-1 border-neutral-600 rounded-full text-center mx-[20cm] text-neutral-500">  AI-powered audio for moderm businesses </p>
            </div>
            <div>
                <p className="text-center text-6xl font-black mt-4 text-white">
                    Turn one line of text into jingle, <br /> <span className="text-amber-500">To sound proffessional</span>
                </p>
            </div>
            <div className="mt-[1.5cm]">
                <p className="text-center text-neutral-400 text-2xl">Jinglify helps traders, entrepreneurs, and small businesses create <br /> studio-quality branded audio in seconds. Just type, pick a vibe, <br /> and play.</p>
            </div>
            <div className="flex justify-center mt-4">
                <p className=" border bg-amber-500  px-6 py-2 inline-block mx-auto rounded-full hover:scale-105 transition"><Link to={'/trial'}>Try It Now</Link></p>
            </div>

            <div className="mt-5">
                <div>
                    <p className="text-center text-2xl text-white">Everything you need to know to sound proffesional </p>
                    <p className="text-center text-neutral-500 text-sm">Built for businesses that want studio-quality audio without the studio.</p>
                </div>
                <div className="mx-[10cm] mt-[2cm]">
                    <div className="grid grid-cols-3 gap-5">
                        <div className="border border-neutral-500 p-5  rounded-[20px]">
                            <p className="text-amber-500">
                                <Zap/>
                            </p>
                            <p className="text-white text-xl mt-2">Fast Generation</p>
                            <p className="text-neutral-500 mt-4">Create jingles in seconds using AI</p>
                        </div>

                        <div className="border border-neutral-500 p-5  rounded-[20px]">
                            <p className="text-amber-500">
                                <Briefcase/>
                            </p>
                            <p className="text-white text-xl mt-2">Business Focused</p>
                            <p className="text-neutral-500 mt-4">Designed for shops, brands, and ads</p>
                        </div>

                        <div className="border border-neutral-500 p-5  rounded-[20px]">
                            <p className="text-amber-500">
                                <AudioLines/>
                            </p>
                            <p className="text-white text-xl mt-2">High Quality Voices</p>
                            <p className="text-neutral-500 mt-4">Natural sounding AI voices</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeLandingLayout