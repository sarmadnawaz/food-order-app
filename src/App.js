import logo from './logo.svg';
import './App.css';
import { Header } from "./components/Layout/Header/Header"
import { HomePage } from "./components/Layout/HomePage/HomePage"
import { Footer } from "./components/Layout/Footer/Footer"

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
