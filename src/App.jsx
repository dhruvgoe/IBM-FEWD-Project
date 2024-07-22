import Challenge from "./components/Challenge";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Importance from "./components/Importance";
import Inequities from "./components/Inequities";
import Introduction from "./components/Introduction";
import Solutions from "./components/Solutions";
import Stratergies from "./components/Stratergies";
function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden overflow-y-auto">
      <Header></Header>
      <Introduction></Introduction>
      <Importance></Importance>
      <Stratergies></Stratergies>
      <Inequities></Inequities>
      <Challenge></Challenge>
      <Solutions></Solutions>
      <Footer></Footer>
    </div>
  );
}

export default App;
