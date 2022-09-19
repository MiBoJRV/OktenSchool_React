import './App.css';
import {useEffect, useState} from "react";
import {getUser, getUserPosts, getUsers, getUsersPosts} from "./components/services/API";
import Posts from "./components/posts/Posts";
import Users from "./components/users/Users";
import Post from "./components/post/Post";

export default function App() {

    useEffect(() => {                           // step 01
        getUsers().then(value => setUsers(value.data));
    }, []);

    let [users, setUsers] = useState([]); // step 02

    let [user, setUser] = useState(null); // step 03

    let appFn = (id) => {                            // step 04
        getUser(id).then(value => setUser(value.data));
    };


// -------------------------------------------- Posts---------------------------------
    let [userPosts, setUserPosts] = useState(null);
    let fnMotherMain = (userId) => {
        getUserPosts(userId).then(value => setUserPosts(value.data));
        console.log(userPosts);
    };

    useEffect(() => {
        getUsersPosts().then(value => setUsersPosts(value.data));
    }, []);

    let [usersPosts, setUsersPosts] = useState([]);


// -------------------------------------------- Posts---------------------------------

    return (
        <div className={'content'}>
            <Users items={users} appFn={appFn}/>
            <hr/>
            {
                user && <div>{user.username}</div>
            }
            <hr/>
            {
                userPosts && <div>{JSON.stringify(userPosts)}</div>
            }
            <Posts items={usersPosts} appFnMother={fnMotherMain}/>
        </div>
    );
    {/*<Users items={users} appFn={appFn}/>*/
    }
    {/*<hr/>*/
    }
    {/*{*/
    }
    {/*    // user && <div>{user.username}</div>*/
    }
    {/*    user && <div>{JSON.stringify(user)}</div>*/
    }
    {/*}*/
    }
    {/*<hr/>*/
    }

}

