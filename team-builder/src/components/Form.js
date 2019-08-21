import React, { useState } from 'react';

const Form = props => {

    const [teamMember, setTeamMember] = useState({name:'', email:'', role:''});
    
    const changeHandler = event => {

        console.log(event.target.value);
        setTeamMember({ ...teamMember, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
        const newTeamMember = {
          ...teamMember,
          id: Date.now()
        };
        props.addNewTeamMember(newTeamMember);
        setTeamMember({ name: '', email:'', role:''});
      };

    return (
        <form onSubmit={submitForm}>

            <label>Name</label>
            <input
                type='text'
                name='name'
                placeholder='Name'
                value={teamMember.name}
                onChange={changeHandler}/>

            <label>Email</label>
            <input
                type='text'
                name='email'
                placeholder='Email'
                value={teamMember.email}
                onChange={changeHandler}/>

            <label>Role</label>
            <input
                type='text'
                name='role'
                placeholder='Role'
                value={teamMember.role}
                onChange={changeHandler}/>

            <button type='submit'>Add Team Member</button>
        </form>
    )
}

export default Form;