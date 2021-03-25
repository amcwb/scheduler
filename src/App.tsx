import React from 'react';
import Schedule from './Schedule';
import "./Generic.scss";

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
        <Schedule id="a" title="aa" description="aaaaaaaa" date={new Date().toISOString()}></Schedule>
      </div>
    </div>
  );
}

export default App;
