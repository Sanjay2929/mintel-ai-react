import { useEffect } from "react";
import "./App.css";
import AutoPilot from "./components/AutoPilot";
import Brands from "./components/Brands";
import Compatible from "./components/Compatible";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mintelize from "./components/Mintelize";
import OneClick from "./components/OneClick";
import SalesPersonSuffer from "./components/SalesPersonSuffer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
    });
  }, []);
  return (
    <div className="bg-black overflow-x-clip">
      <Header />
      <SalesPersonSuffer />
      <AutoPilot />
      <Compatible />
      <Mintelize />
      <OneClick />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
