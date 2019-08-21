import React, {useState, useEffect } from 'react';
import TeamMember from './TeamMember';

const TeamMembersList = () =>{

    const [tMList, setTMList] = useState([]);

    return(
        <div className="tm-list">
            {tMList.map(a => (
                <TeamMember
                    name={a.name}
                    email={a.email}
                    role={a.role}
                />
            ))}
        </div>
    )
}


export default TeamMembersList;