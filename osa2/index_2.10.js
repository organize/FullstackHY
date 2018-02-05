import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                {
                    name: 'Arto Hellas',
                    number: '045-635'
                }
            ],
            newName: '',
            newNumero: ''
        }
    }

    handleClick = (event) => {

        event.preventDefault()
        const newPerson = {
            name: this.state.newName,
            number: this.state.newNumero,
        }

        for (var v = 0; v < this.state.persons.length; v++) {
            var curPerson = this.state.persons[v];
            if (curPerson.name === this.state.newName) {
                alert("nimi on jo listassa!");
                return;
            }
        }

        const newPersons = this.state.persons.concat(newPerson)

        this.setState((prevState) => ({
            persons: newPersons,
            newName: '',
            newNumero: ''
        }));
    }

    handleNameChange = (event) => {
        console.log(event.target.value)
        this.setState({ newName: event.target.value })
    }

    handleNumberChange = (event) => {
        console.log(event.target.value)
        this.setState({ newNumero: event.target.value })
    }

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <form onSubmit={this.handleClick}>
                    <InputKentta title={'nimi'} valueField={this.state.newName} onChangeField={this.handleNameChange} />
                    <InputKentta title={'numero'} valueField={this.state.newNumero} onChangeField={this.handleNumberChange} />
                    <div>
                        <button type="submit">lisää</button>
                    </div>
                </form>
                <h2>Numerot</h2>
                <ul>
                    {this.state.persons.map(person => <Elementti key={person.name} person={person} />)}
                </ul>
            </div>
        )
    }
}

const InputKentta = (props) => {
    return (
        <div>
            {props.title}: <input value={props.valueField} onChange={props.onChangeField} />
        </div>
    )
}

const Elementti = (props) => {
    return (
        <li key={props.person.avain}>{props.person.name}: {props.person.number}</li>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

export default App