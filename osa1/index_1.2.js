import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <h1>{props.kurssi}</h1>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa nimi={props.tehtavaData[0].nimi} tehtavia={props.tehtavaData[0].tehtavia}/>
            <Osa nimi={props.tehtavaData[1].nimi} tehtavia={props.tehtavaData[1].tehtavia}/>
            <Osa nimi={props.tehtavaData[2].nimi} tehtavia={props.tehtavaData[2].tehtavia}/>
        </div>
    )
}

const Osa = (props) => {
    return (
        <p>{props.nimi} {props.tehtavia}</p>
    )
}

const Yhteensa = (props) => {
    return (
        <p>yhteensä {props.tehtavia} tehtävää</p>
    )
}

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = 'Reactin perusteet'
    const tehtavia1 = 10
    const osa2 = 'Tiedonvälitys propseilla'
    const tehtavia2 = 7
    const osa3 = 'Komponenttien tila'
    const tehtavia3 = 14

    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto tehtavaData={[
                {
                    nimi: osa1,
                    tehtavia: tehtavia1
                },
                {
                    nimi: osa2,
                    tehtavia: tehtavia2
                },
                {
                    nimi: osa3,
                    tehtavia: tehtavia3
                }]} />
            <Yhteensa tehtavia={tehtavia1 + tehtavia2 + tehtavia3} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)