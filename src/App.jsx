
import './App.css'
import LineChart from './Components/LineChart/LineChart'
import NavBar from './Components/NavBar/NavBar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
// import DaisyNav from './Components/DaisyNav/DaisyNav'

function App() {


  return (
    <>
     <NavBar></NavBar>
    {/* <DaisyNav></DaisyNav> */} 
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
    </>
  )
}

export default App
