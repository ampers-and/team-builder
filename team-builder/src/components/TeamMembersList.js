import React from 'react';

const TeamMembersList = props => {
    console.log(props);

    return(
        <div className="tm-list">
            {props.teamMembersList.map(a => {
                return(
                    <div className='tm' key={a.id}>
                        <h1>Name: {a.name} </h1>
                        <h2>Email: {a.email} </h2>
                        <h2>Role: {a.role} </h2>
                    </div>
                );
            })}
        </div>
    )
}


export default TeamMembersList;