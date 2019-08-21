import React from 'react';

const TeamMember = (props) => {

    return(
        <div className='tm' key={props.id}>
            <h1>Name: {props.name} </h1>
            <h2>Email: {props.email} </h2>
            <h2>Role: {props.role} </h2>
        </div>
    )
};

export default TeamMember;