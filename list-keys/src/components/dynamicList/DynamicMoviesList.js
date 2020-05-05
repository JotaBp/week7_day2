import React, { Component } from 'react'
import Card from '../card/Card'

class DynamicMoviesList extends Component {

    constructor() {
        super()
        this.state = {
            showOscarAwarded: false,
            movies: [
                { title: "The Godfather", director: "Francis Coppola", hasOscars: true },
                { title: "Star Wars", director: "Rian Johnson", hasOscars: false },
                { title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: true },
                { title: "La cuidad de los niños perdidos", director: "Ger", hasOscars: true },
                { title: "Campamento Flippy", director: "Flippy", hasOscars: false }
            ]
        }
    }

    removeMovieFromState = idx => {
        const moviesCopy = [...this.state.movies]
        moviesCopy.splice(idx, 1)
        this.setState({ movies: moviesCopy })
    }

    toggleOscarFilter = () => this.setState({ showOscarAwarded: !this.state.showOscarAwarded })

    render() {

        const filteredMovies = this.state.movies.filter(elm => elm.hasOscars === this.state.showOscarAwarded)

        return (
            <>
                {
                    filteredMovies.map((elm, idx) => <Card key={idx} {...elm} removeCard={() => this.removeMovieFromState(idx)} />)
                }
                <button onClick={this.toggleOscarFilter}>
                    {this.state.showOscarAwarded ? 'Mostrar películas sin oscar' : 'Mostrar películas con oscar'}
                </button>
            </>
        )
    }
}

export default DynamicMoviesList