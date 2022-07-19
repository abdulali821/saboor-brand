import "./App.css";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";

function App() {
  return (
    <>
      <Navbar />
      <Showcase />
      <Categories />
      <p style={{ textAlign: "center" }}>Development...</p>
    </>
  );
}

export default App;
