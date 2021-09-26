import React from 'react';
import "./Teams.css";

const Teams = (props) => {
    console.log(props.member);
    const {name, skills, age, country, salary, img }=props.member;

    return (
        <div className="member">
            <div>
            <img src={img} alt="" />
            </div>
            <div>
            <h4>Name: {name}</h4>
            <h6>Skills: {skills}</h6>
            <h6>Age: {age}</h6>
            <h6>Country: {country}</h6>
            <h6>Salary: {salary}</h6>
            <button className="btn btn-primary">Add to Team</button>
            </div>
        </div>
    );
};

export default Teams;