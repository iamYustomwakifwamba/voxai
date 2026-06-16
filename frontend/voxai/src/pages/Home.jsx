import NavigationBarComponent from "../components/layout/NavBar"
import HomeLandingComponent from "../components/layout/HomeLanding"
import FooterLayout from "../components/layout/Footer"

function HomePageView () {
    return (
        <div className="bg-stone-800 h-screen">
            <NavigationBarComponent/>
            <HomeLandingComponent/>
            <FooterLayout/>
        </div>
    )
}

export default HomePageView