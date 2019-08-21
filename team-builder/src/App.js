import React from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMembersList from './components/TeamMembersList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Team Builder
      </header>
      <TeamMembersList/>
    </div>
  );
}

export default App;
