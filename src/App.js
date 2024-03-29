// import logo from './logo.svg';
// import './App.css';
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Info></Info>
      <div className="container">
      <About></About>
      <Interests></Interests>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
