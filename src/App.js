import "./App.css";
import Contact from "./components/contact/Contact";
import Description from "./components/description/Description";
import Footer from "./components/footer/Footer";
import FrontScreen from "./components/fronScreen/FrontScreen";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <FrontScreen />
        <Description />
        <Projects />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
