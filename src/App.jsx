import { lazy, Suspense } from "react";
import React, { useState } from "react";

const Challenge = lazy(() => import("./components/Challenge"));
const Footer = lazy(() => import("./components/Footer"));
const Header = lazy(() => import("./components/Header"));
const Importance = lazy(() => import("./components/Importance"));
const Inequities = lazy(() => import("./components/Inequities"));
const Introduction = lazy(() => import("./components/Introduction"));
const Solutions = lazy(() => import("./components/Solutions"));
const Stratergies = lazy(() => import("./components/Stratergies"));

import Loader from "./components/Loader";


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Introduction />
      <Importance />
      <Stratergies />
      <Inequities />
      <Challenge />
      <Solutions />
      <Footer /> 
    </Suspense>
  );
}

export default App;
