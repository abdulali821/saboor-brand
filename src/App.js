import "./App.css";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";

function App() {
  return (
    <>
      <Navbar />
      <Showcase />
      <Categories />
      <Footer />
    </>
  );
}

export default App;
