import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    let {friendId} = useParams();

    const [friend, setFriend] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])

    return (
        <div>
            <p>Here is your friend : {friendId}</p>
            <h2>Name: {friend.name}</h2>
            <p>Email: {friend.email}</p>

        </div>
    );
};

export default FriendDetail;