import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from "./router/home/Home"
import Plan from "./router/plan/Plan"
import Contact from "./router/contact/Contact"
import Ipoteka from "./router/ipoteka/Ipoteka"
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/plan' element={<Plan/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/ipoteka' element={<Ipoteka/>}/>
        <Route path='*' element={<h1 className='not__found'>404</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
