export default function User({item, fnFather}) {

    return (
        <div>
            {item.id} - {item.name}
            <button onClick={
                // () => fnFather(item.id)  //the same as next row
                () =>  {return  fnFather(item.id)}
            }>
                Click me
            </button>
        </div>
    );
}
