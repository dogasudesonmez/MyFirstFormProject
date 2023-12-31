import { useState } from 'react';
import './App.css';
import AdvancedForm from './components/AdvancedForm';
import BasicForm from './components/BasicForm';


function App() {
    const [view, setView] = useState("basic");
  return (
      <div className="App" style={{ backgroundColor: "gray" }} >
          <nav>
              <h3
                  onClick={() => setView("basic")}
                  style={{ color: view === "basic" ? "#fff" : "" }}
              >Basic</h3>
              <h3 onClick={() => setView("advanced")}
                  style={{ color: view === "advanced" ? "#f00" : "" }}>
                  Advanced</h3>
          </nav>
          {view === "basic" ? <BasicForm /> : <AdvancedForm />}
    </div>
  );
}

export default App;
