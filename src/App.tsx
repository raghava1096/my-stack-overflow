import "./styles.css";
import React from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";
import AppContent from "./Components/app-content";


const App: React.FC = () => {
   return (
    <div className="App">
      <Header />
      <AppContent />
      <Footer />
    </div>
  );
};

export default App;