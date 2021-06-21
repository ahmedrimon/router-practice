import React from 'react';
import './Friend.css';
import {Link, useHistory} from 'react-router-dom';
const Friend = (props) => {
    const {name, email, id} = props.friend;

   let history = useHistory()
   const handleClick = (friendId) => {
       history.push(`/friend/${friendId}`)
   }

    return (
        <div className="stylefriend">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <Link to={`/friend/${id}`}>show this {id}</Link>
            
            <button onClick={() => handleClick(id)}>Add me</button>
        </div>
    );
};

export default Friend;