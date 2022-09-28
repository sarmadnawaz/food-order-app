import './App.css';
import { Header } from "./components/Layout/Header/Header"
import { Main } from "./components/Layout/Main/Main"
import { Footer } from "./components/Layout/Footer/Footer"
import CartProvider from "./store/CartProvider"

function App() {
  return (
    <CartProvider>
      <Header />
      <Main />
      <Footer />
    </CartProvider>
  );
}

export default App;
