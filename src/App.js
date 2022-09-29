import './App.css';
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Footer } from "./components/Footer"
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
