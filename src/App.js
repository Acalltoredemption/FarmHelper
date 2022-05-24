import Header from "./components/Header";
import Selections from "./components/Selections";
import ResultPanel from "./components/ResultPanel";
import { ResultProvider } from "./context/ResultContext";

import './app.css'

function App() {
  return (
    <ResultProvider>
    <Header />
    <Selections />
    <ResultPanel />
    </ResultProvider>
  );
}

export default App;
