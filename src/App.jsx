import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import Register_Page from './components/Register_Page';
import Login_Page from './components/Login_Page';
function App() {
  
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Register_Page />
      <Login_Page />
      <Footer />
    </>
    
  );
}

export default App;