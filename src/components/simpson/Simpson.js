import './Simpson.css';

export default function Simpson({item: {name, surname, age, photo, info, phone}}) {

    // let {item} = props;
    // let {name, surname, age, photo, info, phone} = item

    // let {item:{name, surname, age, photo, info, phone}} = props;

    let c1 = 'target';
    let c2 = 'point';
    let clsList = [c1, c2];

    return (
        <div className={clsList.join(' ')}>
            <h2>{name}, age - {age}</h2>
            <img src={photo} alt=""/>
            <div>{phone}</div>
        </div>
    );
}
