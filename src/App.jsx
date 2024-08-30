// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Featured from './Components/Featured/Featured';
import NavBar from './Components/NavBar/NavBar';
import Slider from './Components/Slider/Slider';
import VideoView from './Components/VideoView/VideoView';
import Header from './Components/header/Header';
import Rectangular from './Components/VideoView/Rectangular';
import BestDeal from './Components/BestDeal/BestDeal';
import Properties from './Components/Properties/Properties';
import Cards from './Components/Cards/Cards';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import PropertiesPage from './Pages/PropertiesPage';
import Details from './Pages/Details';
import ContactUsPage from './Pages/ContactUsPage';


function App() {
  return (
   <div >
    <Header/>
    <NavBar />
   <Routes>
    <Route path='/' element = {<Home/>}></Route>
    <Route path='/PropertiesPage' element = {<PropertiesPage/>}></Route>
    <Route path='/Details' element = {<Details/>}></Route>
    <Route path='/ContactUsPage' element = {<ContactUsPage/>}></Route>
   </Routes>
     <Footer/>
   </div>
  )
}

export default App;
