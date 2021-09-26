import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    // console.log(props.cart);

    const {cart}= props;
    let total = 0;
    for(const member of cart){
        total = total + member.salary;
    }

    return (
        <div  className='added-member'>
            <h5>Total Cost: {total} Tk</h5>
            <br />
            <h5>Member Added: {props.cart.length}</h5>
            <ol>
                {
                    cart.map(member=><li key={member.name}>{member.name}</li>)
                }
            </ol>
        </div>
    );
};

export default Cart;