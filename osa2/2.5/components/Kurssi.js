import React from 'react';

const Kurssi = (props) => {
    const {kurssit} = props;
    return (
        <div>
            {kurssit.map(kurssi => 
            <div><Otsikko kurssi={kurssi.nimi}/>
            <Sisalto osat={kurssi.osat}/>
            <Yhteensa osat={kurssi.osat}/>
            </div>)}
        </div>
    )
}

const Otsikko = (props) => {
    return (
        <h1>{props.kurssi}</h1>
    )
}

const Sisalto = (props) => {
    const {osat} = props;
    return (
        <div>
            <ul>
                {osat.map(osa => <Osa nimi={osa.nimi} tehtavia={osa.tehtavia}/>)}
            </ul>
        </div>
    )
}

const Osa = (props) => {
    return (
        <p>{props.nimi} {props.tehtavia}</p>
    )
}

const Yhteensa = (props) => {
    const {osat} = props;
    var sum = osat.reduce(function (acc, obj) { 
        return acc + obj.tehtavia; 
    }, 0);
    return (
        <p>yhteensä {sum} tehtävää</p>
    )
}

export default Kurssi