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
                        <button onClick={this.klikHyva}>hyvä</button>
                        <button onClick={this.klikNeutraali}>neutraali</button>
                        <button onClick={this.klikHuono}>huono</button>
                    </p>

                    <h1>statistiikka</h1>
                    <p>hyvä {this.state.hyva}</p>
                    <p>neutraali {this.state.neutraali}</p>
                    <p>huono {this.state.huono}</p>

                   <p>keskiarvo {this.state.keskiarvo}</p>
                   <p>positiivisia {this.state.positiivisuusProsentti} %</p>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)