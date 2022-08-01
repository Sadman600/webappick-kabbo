
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from './Layouts/Header/Header';
import Footer from './Layouts/Footer/Footer';
function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
