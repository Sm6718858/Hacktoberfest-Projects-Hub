import { Contributors } from "./routes/Contributors";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Home from "./routes/Home";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-100 dark:bg-gray-900 transition-all duration-300">
      <Header />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contributors" element={<Contributors />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
