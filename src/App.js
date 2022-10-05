import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ProjectDetails from "./pages/ProjectDetails";
import Header from "./components/Header";
import Benjamin from "./pages/Benjamin";
import Cameron from "./pages/Cameron";
import Naderah from "./pages/Naderah";
import Grav from "./pages/Grav";
import Belle from "./pages/Belle";
import Emom from "./pages/Emom";
import Portfolio from "./pages/Portfolio";
import ScrollToTop from "./components/ScrollToTop";
import Zivan from "./pages/Zivan";
import Devank from "./pages/Devank";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/work" element={<ProjectsPage />} />
          <Route path="/carpool" element={<ProjectDetails />} />
          <Route path="/benjamin" element={<Benjamin />} />
          <Route path="/cameron" element={<Cameron />} />
          <Route path="/naderah" element={<Naderah />} />
          <Route path="/grav" element={<Grav />} />
          <Route path="/belle" element={<Belle />} />
          <Route path="/emom" element={<Emom />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/zivan" element={<Zivan />} />
          <Route path="/devank" element={<Devank />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
