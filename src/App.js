import Header from "./components/Header";
import Selections from "./components/Selections";
import ResultPanel from "./components/ResultPanel";
import { ResultProvider } from "./context/ResultContext";
import './index.css'

import './app.css'

function App() {
  return (
    
    <ResultProvider>
    <div className="min-h-screen px-6 py-8 mx-auto bg-gray-100">
    <Header />
    <section className="grid grid-cols-2 gap-4 mt-12">
    <Selections />
    <ResultPanel />
    </section>
    </div>
    </ResultProvider>

  );
}

export default App;
