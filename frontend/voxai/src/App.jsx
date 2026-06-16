import HomePageView from "./pages/Home"
import { Routes, Route } from "react-router-dom"

function App () {
  return (
    <Routes>
      <Route path="/" element={<HomePageView/>}/>
    </Routes>
  )
}

export default App