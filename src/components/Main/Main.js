import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';
import "./Main.css";

const Main = () => {
    const [members, setMembers]= useState([]);
    useEffect(()=>{
        fetch("./teams.JSON")
        .then(res=>res.json())
        .then(data=>setMembers(data))
    },[])
    return (
        <div className="main-container">
            <div className="teams-container">
                {
                    members.map(member=><Teams member={member}></Teams>)
                }
            </div>
            <div className="cart-container">
                <h1>this is cart</h1>
            </div>
        </div>
    );
};

export default Main;