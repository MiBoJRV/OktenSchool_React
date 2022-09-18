import './App.css';
import {useEffect, useState} from "react";
import {getUser, getUsers} from "./components/services/API";
import User from "./components/user/User";
import Users from "./components/users/Users";

export default function App() {

    let [user, setUser] = useState(null);
    let appFn =(id) => {
        getUser(id).then(value => setUser(value.data));
    };

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, []);
    return (
        <div>
            <Users items={users} appFn={appFn}/>
            <hr/>
            {
                // user && <div>{user.username}</div>
                user && <div>{JSON.stringify(user)}</div>
            }
            <hr/>
        </div>
    );
}

