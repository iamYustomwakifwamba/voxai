import { useState } from "react"
import { Link } from "react-router-dom"
import { X, Menu } from "lucide-react"

function NavigationBarLayout () {

    const [openMobileNav, setOpenMobileNav] = useState(false)

    return (
        <div>
            <div className="flex items-center justify-between px-12 h-15 bg-stone-800 border-b border-neutral-500">
                <div className="text-white text-xl font-100 font-mono">
                    voxai
                </div>
                <div className="flex gap-10 hidden md:flex">
                    <p className="font-sans text-neutral-500 hover:text-white"><Link to={'/'}>Home</Link></p>
                    <p className="font-sans text-neutral-500 hover:text-white"><Link>Features</Link></p>
                    <p className="font-sans text-neutral-500 hover:text-white"><Link>Pricing</Link></p>
                    <p className="font-sans text-neutral-500 hover:text-white"><Link>AI</Link></p>
                    <p className="font-sans text-neutral-500 hover:text-white"><Link>Developers</Link></p>
                </div>
                <div className="flex gap-5 hidden md:flex">
                    <p className="text-white"><Link>Sign up</Link></p>
                    <p className="bg-amber-500 px-5 rounded"><Link to={"/login"}>Login</Link></p>
                </div>

                <button onClick={() => setOpenMobileNav((prev) => !prev)} className="sm:hidden cursor-pointer ml-[3cm]">
                    {openMobileNav ? <X/> : <Menu/>}
                </button>

                {openMobileNav && (
                    <div className="md:hidden">
                        <div className="flex flex-col gap-[0.5cm] text-center text-gray-500 transition-all duration-2000">
                            <p className="font-sans text-neutral-500 hover:text-white"><Link to={'/'}>Home</Link></p>
                            <p className="font-sans text-neutral-500 hover:text-white"><Link>Features</Link></p>
                            <p className="font-sans text-neutral-500 hover:text-white"><Link>Pricing</Link></p>
                            <p className="font-sans text-neutral-500 hover:text-white"><Link>AI</Link></p>
                            <p className="font-sans text-neutral-500 hover:text-white"><Link>Developers</Link></p>
                        </div>
                    </div>
                )}
            </div>


        </div>
    )
}

export default NavigationBarLayout 