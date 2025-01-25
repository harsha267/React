import React from 'react';

function Display(values) {
    const { n, r, gender, obj = {} } = values; // Provide fallback for obj if undefined
    const { empname, city } = obj; // Provide fallbacks for empname and city

    return (
        <>
            <h1>I'm coming from Datas.js {n} {r} {gender}</h1>
            <h2>{empname}, {city}</h2>
            <h3>This is from Display</h3>
            <h4>I'm the second line</h4>
        </>
    );
}

export default Display;
