import NavigationBarLayout from "../components/layout/NavBar"
import TrialPromptSectionLayout from "../components/layout/trialPrompt"
import FooterLayout from "../components/layout/Footer"

function TrialGeneratorPage () {
    return (
        <div className="bg-stone-800 h-screen">
            <NavigationBarLayout/>
            <TrialPromptSectionLayout/>
            <div className="mt-[3cm]">
                <FooterLayout/>
            </div>
        </div>
    )
}

export default TrialGeneratorPage