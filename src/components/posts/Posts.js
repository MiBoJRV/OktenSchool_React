import './Posts.css';
import {useEffect, useState} from "react";

export default function Posts() {

    // let [usersPost, setUsersPost] = useState([]);

    let state = useState([]);
    let usersPostsList = state[0];
    let setUsersPostsList = state[1];


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(response => {
                // console.log(response);
                setUsersPostsList(response);
            });
    }, []);

    return (
        <div className={'posts-wrap'}>
            {

                usersPostsList
                    .map(value =>
                        <div className={'post-wrap'}>
                            <div className={'post__id'}>
                                <span> Post id {value.id}</span>
                                <span> User id {value.userId}</span>
                            </div>
                            <div className={'post-title'}>
                                {value.title}
                            </div>
                            <div className={'post-text'}>
                                Text Post {value.body}
                            </div>
                        </div>
                    )
            }
        </div>
    );
}
