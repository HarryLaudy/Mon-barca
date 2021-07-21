import React from 'react';

const Data_classement = (props) => {
    const { data } = props;
    return (
            <tr>
            <td>{props.index + 1}</td>
            <td><img src={data.logo} className="logo-classement" alt="logo"></img><span>{data.equipe}</span></td>
            <td>{data.J}</td>
            <td>{data.V}</td>
            <td>{data.N}</td>
            <td>{data.D}</td>
            <td>{data.bp}</td>
            <td>{data.bc}</td>
            <td>{data.diff}</td>
            <td>{data.pts}</td>
            </tr>
    );
};

export default Data_classement;