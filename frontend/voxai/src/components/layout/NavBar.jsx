import { Link } from "react-router-dom"

function NavigationBarComponent () {
    return (
        <div className="flex items-center justify-between px-12 h-15 bg-stone-800 border-b border-neutral-500">
            <div className="text-white text-xl font-100 font-mono">
                voxai
            </div>
            <div className="flex gap-10">
                <p className="font-sans text-neutral-500 hover:text-white"><Link>Home</Link></p>
                <p className="font-sans text-neutral-500 hover:text-white"><Link>Features</Link></p>
                <p className="font-sans text-neutral-500 hover:text-white"><Link>Pricing</Link></p>
                <p className="font-sans text-neutral-500 hover:text-white"><Link>Samples</Link></p>
            </div>
            <div className="flex gap-5">
                <p className="text-white"><Link>Sign up</Link></p>
                <p className="bg-amber-500 px-5 rounded"><Link>Login</Link></p>
            </div>
        </div>
    )
}

export default NavigationBarComponent