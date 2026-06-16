import HomePageView from "./pages/Home"
import TrialGeneratorPage from "./pages/TrialPage"
import { Routes, Route } from "react-router-dom"

function App () {
  return (
    <Routes>
      <Route path="/" element={<HomePageView/>}/>
      <Route path="/trial" element={<TrialGeneratorPage/>}/>
    </Routes>
  )
}

export default App