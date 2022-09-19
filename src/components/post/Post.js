import './Post.css';

export default function Post({item, fnMother}) {
    return (
        <div className={"user-post"}>
            <span>User ID: {item.userId} - Post ID: {item.id}</span>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <button onClick={
                // () =>  {return  fnMother(item.id)} //the same as next row
                () => fnMother(item.userId)
            }>

                All user posts
            </button>
            <button onClick={
                // () =>  {return  fnMother(item.id)} //the same as next row
                () => fnMother(item.id)
            }>
                User Info
            </button>
        </div>
    );
}
