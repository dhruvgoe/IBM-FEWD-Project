// App.jsx
import React, { useState } from "react";
import Challenge from "./components/Challenge";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Importance from "./components/Importance";
import Inequities from "./components/Inequities";
import Introduction from "./components/Introduction";
import Solutions from "./components/Solutions";
import Stratergies from "./components/Stratergies";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div
      className={`w-full min-h-screen overflow-x-hidden ${
        loading ? "overflow-hidden" : "overflow-y-auto"
      }`}
    >
      {loading && <Loader setLoading={setLoading} />}
      {!loading && (
        <>
          <Header />
          <Introduction />
          <Importance />
          <Stratergies />
          <Inequities />
          <Challenge />
          <Solutions />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
