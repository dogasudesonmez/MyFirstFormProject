import { useState } from 'react';
import './App.css';


function App() {
    const [view, setView] = useState("basic");
  return (
      <div className="App">
          <nav>
              <h3
                  onClick={() => setView("basic")}
                  style={{ color: view === "basic" ? "#ffff" : "" }}
              >Basic</h3>

          </nav>
    </div>
  );
}

export default App;
