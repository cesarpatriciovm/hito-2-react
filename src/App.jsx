import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
// import Home from './component/Home';
// import Register from './component/Register';
import './App.css'
import Login from './component/Login';

function App() {
  
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Register /> */}
      <Login />
      <Footer />
    </>
  )
}

export default App
