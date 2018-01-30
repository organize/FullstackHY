import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0,
            summa: 0
        }
    }

    klikHyva = () => {
        this.setState((prevState) => ({
            hyva: prevState.hyva + 1,
            summa: prevState.summa + 1
        }));
        this.muutaKeskiarvoa();
    }

    klikNeutraali = () => {
        this.setState((prevState) => ({
            neutraali: prevState.neutraali + 1
        }));
        this.muutaKeskiarvoa();
    }

    klikHuono = () => {
        this.setState((prevState) => ({
            huono: prevState.huono + 1,
            summa: prevState.summa - 1
        }));
        this.muutaKeskiarvoa();
    }

    muutaKeskiarvoa = () => {
        this.setState((prevState) => ({
            keskiarvo: prevState.summa / (prevState.hyva + prevState.neutraali + prevState.huono)
        }));
        this.laskePositiiviset();
    }

    laskePositiiviset = () => {
        console.log(this.state.hyva + this.state.neutraali + this.state.huono);
        this.setState((prevState) => ({
            positiivisuusProsentti: prevState.hyva / (prevState.hyva + prevState.neutraali + prevState.huono)
        }));
    }

    render() {
        return (
            <div>
                <div>
                    <h1>anna palautetta</h1>
                    <p>
                        <Button call={this.klikHyva} name="hyvä" />
                        <Button call={this.klikNeutraali} name="neutraali" />
                        <Button call={this.klikHuono} name="huono" />
                    </p>

                    <h1>statistiikka</h1>
                    <Statistics show = {(this.state.hyva + this.state.neutraali + this.state.huono) !== 0} hyvat = {this.state.hyva} neutraalit = {this.state.neutraali} huonot = {this.state.huono}
                        avg = {this.state.keskiarvo} positives = {this.state.positiivisuusProsentti}/>
                </div>
            </div>
        )
    }
}

const Button = (props) => {
    return (
        <button onClick={props.call}>{props.name}</button>
    )
}

//todo: korjaa pyöristäminen, parse desimaalit.
const Statistics = (props) => {
    if(props.show) {
        return (
            <table>
                <tbody>
                    <Statistic value = {props.hyvat} name = "hyvä" suffix = ""/>
                    <Statistic value = {props.neutraalit} name = "neutraali" suffix = ""/>
                    <Statistic value = {props.huonot} name = "huono" suffix = ""/>
                    <Statistic value = {props.avg} name = "keskiarvo" suffix = ""/>
                    <Statistic value = {props.positives} name = "positiivisia" suffix = "%"/>
                </tbody>
            </table>
        )
    } else {
        return (
            <p>ei yhtään palautetta annettu</p>
        )
    }
}

const Statistic = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.value} {props.suffix}</td>
        </tr>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)