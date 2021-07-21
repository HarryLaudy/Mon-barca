import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Data_classement from '../components/Data_classement';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Classement = () => {
  const [datas, setDatas] = useState([]);

  useEffect (() => {
    axios.get('/info')
    .then((response) => setDatas(response.data));
  }, [])
  return (
    <div>
        <Logo />
        <Navigation />
        <div className="table-liga">
            <table>
                <caption>Classement Football la Liga 2021-2022</caption>
                <thead>
                    <th scope="col">Classement</th>
                    <th scope="col">Équipe</th>
                    <th scope="col">J</th>
                    <th scope="col">V</th>
                    <th scope="col">N</th>
                    <th scope="col">D</th>
                    <th scope="col">Bp</th>
                    <th scope="col">Bc</th>
                    <th scope="col">diff</th>
                    <th scope="col">Pts</th>
                </thead>
                <tbody>
                    {datas.map((data, index) => (
                    <Data_classement data={data} index={index} key={data.equipe}/>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default Classement;
