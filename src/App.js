import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Offer from "./Components/Offers/Offer";
import Popular from "./Components/Popular/Popular";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
