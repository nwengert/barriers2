import React from 'react'

export default class SW extends React.Component {
    constructor () {
        super() 
        this.state = {
            loading: false,
            character: {},
            number: 22
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    componentDidMount() {
        this.setState({loading: true})
        fetch("https://swapi.co/api/people/" + this.state.number)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
                console.log(data)
            })
    }
    increment () {
        this.setState(prevState => {
            return {
                number: prevState.number + 1
            }
        })
    }
    decrement () {
        this.setState(prevState => {
            return {
                number: prevState.number - 1
            }
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.loading ? "loading..." : this.state.character.name}</h2>
                <h4>{this.state.number}</h4>
                <button onClick={this.increment}>up</button>
                <button onClick={this.decrement}>down</button>
            </div>
            
        )
    }
}