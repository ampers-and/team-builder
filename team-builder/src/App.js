import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './App.css';
import TeamMembersList from './components/TeamMembersList'
import Form from './components/Form';

function App() {

  const [teamMemebers, setTeamMemmbers] = useState({name:'Harry Potter', email:'hedwig@hogwarts.edu', role:'Auror'});
  
  const addNewTeamMember = teamMember =>{
    setTeamMemmbers([...teamMemebers, teamMember]);
  };

  return (
    <div className="App">
      <header className="App-header">
        Team Builder
      </header>
      <Form addNewTeamMember={addNewTeamMember} />
      <TeamMembersList/>
    </div>
  );
}

export default App;
