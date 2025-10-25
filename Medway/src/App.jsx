import { useState } from "react";
import Footer from "./components/footer";
import Header from './components/header';
import Home from './components/Homepage'


function App() {
  return (
    <div className="app-container">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
 
export default App;