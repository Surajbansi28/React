import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import BackgroundImageComponent from './components/BackgroundImageComponent';

function App() {
  return (
    <>
    <Navbar title = "ORIC DATA PORTAL"/>
    <div className="container">
    <Form heading = "SIGN IN" />
    <BackgroundImageComponent/>
    <div className="background">
    </div>
    </div>
    </>
  );
}

export default App;
