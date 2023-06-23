import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from "./router/home/Home"
import Plan from "./router/plan/Plan"
import Contact from "./router/contact/Contact"
import Ipoteka from "./router/ipoteka/Ipoteka"
import Navbar from "./components/navbar/Navbar"
import Footer from './components/footer/Footer';
import Admin from './router/admin/Admin';
import About from './router/about/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/plan' element={<Plan/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/ipoteka' element={<Ipoteka/>}/>
        <Route path='/admin/*' element={<Admin/>}/>
        <Route path='/about' elemen t={<About/>}/>
        <Route path='*' element={<h1 className='not__found'>404</h1>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
