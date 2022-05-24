import Header from "./components/Header";
import FarmName from "./components/FarmName";
import Selections from "./components/Selections";
import ResultPanel from "./components/ResultPanel";
import { ResultProvider } from "./context/ResultContext";

import './app.css'

function App() {
  return (
    <ResultProvider>
    <Header />
    <FarmName />
    <Selections />
    <ResultPanel />
    </ResultProvider>
  );
}

export default App;
