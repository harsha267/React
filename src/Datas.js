
import Display from "./Display";

function Datas() {
    const person = {
        empname: "Harsha",
        city: "karur"
    };

    var name = "Harsha";
    let roll = 6;
    let gender = "Female";
    const res = `My name is ${name}`;

    return (
        <>
            <h3>My name is {name}</h3>
            <h1>{res}</h1>
            <Display n={name} r={roll} gender={gender} obj={person} />
        </>
    );
}

export default Datas;
