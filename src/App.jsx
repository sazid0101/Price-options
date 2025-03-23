
import './App.css'

import NavBar from './Components/NavBar/NavBar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
import LineChart from './Components/LineChart/LineChart'
import BarChart from './Components/BarChart/BarChart'
// import DaisyNav from './Components/DaisyNav/DaisyNav'

function App() {


  return (
    <>
     <NavBar></NavBar>
    {/* <DaisyNav></DaisyNav> */} 
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
    <BarChart></BarChart>
    </>
  )
}

export default App
