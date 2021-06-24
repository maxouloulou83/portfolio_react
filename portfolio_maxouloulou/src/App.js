import logo from './logo.svg';
import './App.css';
import Hero from "./partials/Hero"
import Index from "./components/Index";
import Pers from "./components/Pers";
import Get from "./partials/Get";
import Abouts from "./components/Abouts";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
      <div className="bg-gradient-to-r from-gray-400 to-blue-300 h-full">
        <Hero />
        <Pers />
        <Get />
        <Abouts />
      </div>

  )
}

export default App;
