import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Teams from '../Teams/Teams';
import "./Main.css";

const Main = () => {
    const [members, setMembers]= useState([]);

    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch("./teams.JSON")
        .then(res=>res.json())
        .then(data=>setMembers(data))
    },[])

    const handleCart = (member) =>{
        const newCart = [...cart, member];
        setCart(newCart);
    }

    return (
        <div className="main-container">
            <div className="teams-container">
                {
                    members.map(member=><Teams
                                        key= {member.name} 
                                        member={member}
                                        handleCart = {handleCart}>
                                        </Teams>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;