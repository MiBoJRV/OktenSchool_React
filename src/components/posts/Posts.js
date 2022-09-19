import Post from "../post/Post";

export default function Posts({items, appFnMother}) {

return (
        <div>
            {
                items.map((value) => <Post key={value.id} item={value} fnMother={appFnMother} />)
            }
        </div>
    );
}
