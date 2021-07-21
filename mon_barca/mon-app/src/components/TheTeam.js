import React from 'react';

const TheTeam = (props) => {
    const team = props.team;
    return (
        <div>
            <li>
                <div>
                    <ul>
                        <br />
                        <li>Nom equipe : {team.equipe}</li>
                        <li>Son id : {team.id}</li>
                    </ul>
                </div>
            </li>
        </div>
    );
};

export default TheTeam;