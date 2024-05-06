import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ReactGA from "react-ga4";
import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";
import NotFound from "./pages/NotFound";
ReactGA.initialize("G-R2SSW6FQ6V");

const App = () => {

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, [window.location.pathname]);
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
