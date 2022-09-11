import './Users.css';
import {useEffect, useState} from "react";

export default function Users() {

    let [usersList, setUsersList ] = useState([]);
    // let state = useState([]);
    // let usersList = state[0];
    // let setUsersList = state[1];

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(response => {
                // console.log(response);
                setUsersList(response);
            });
    }, []);

    return (
        <div className={'users'}>
            {
                usersList
                    .map(value => <div>{value.id} - {value.name}</div>)
            }
        </div>
    );
}
