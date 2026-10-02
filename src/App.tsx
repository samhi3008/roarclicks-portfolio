import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home.tsx"
import About from "./Pages/About/About.tsx";
import Contact from "./Pages/Contact/Contact.tsx";
import Gallery from "./Pages/Gallery/Gallery.tsx";
import MainLayout from "./Layout/MainLayout/MainLayout.tsx";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
}