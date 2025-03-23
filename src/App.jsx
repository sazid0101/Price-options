
import './App.css'

import NavBar from './Components/NavBar/NavBar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
import LineChart from './Components/LineChart/LineChart'
import BarChart from './Components/BarChart/BarChart'
import PieChart from './Components/PieChart/PieChart'
import PhoneData from './Components/PhoneData/PhoneData'
import Slider from './Components/Slider/Slider'
// import DaisyNav from './Components/DaisyNav/DaisyNav'

function App() {


  return (
    <>
     <NavBar></NavBar>
    {/* <DaisyNav></DaisyNav> */} 
    <Slider></Slider>
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
    <BarChart></BarChart>
    <PieChart></PieChart>
    <PhoneData></PhoneData>
    </>
  )
}

export default App
