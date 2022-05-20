
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Navbar from './component/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Body from './component/Body';
import Admission from './component/Admission';

function App() {
  return (
    <>
    <Header/>
    <Navbar/>
    <Footer/>
    </>
  );
}

export default App;
