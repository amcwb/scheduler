import React from 'react';
import "./Generic.scss";
import Schedules from './Schedules';

function App() {
  return (
    <div>
      <header>
        <div className="Header">
          <div className="Main">
            Scheduler
          </div>
          <div className="Description">
            Define a list of times to look forward to!
          </div>
        </div>
      </header>
      <div>
        <Schedules></Schedules>
      </div>
    </div>
  );
}

export default App;
