import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import ReactLoading from "react-loading";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
        <div className="flex h-screen justify-center items-center">
          <ReactLoading type="cylon" color="#ffa33e"/>
        </div>
        </>
      ) : (
        <>
          <Header />
          <main>
            <Home />
            <About />
            <Menu />
            <Contact />
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      )}
    </>
  );
}

export default App;
