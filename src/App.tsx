import React from 'react';
import Schedule from './Schedule';

function App() {
  return (
    <div>
      <header>
        <Schedule id="a" title="aa" description="aaaaaaaa" date={new Date()}></Schedule>
      </header>
    </div>
  );
}

export default App;
