import React from 'react'
import Card from '../card/Card'

const cities = ['Madrid', 'Barcelona', 'Bilbao', 'Gijón', 'Móstoles']
const badMovies = ['Sharknado', 'Campamento Flippy', 'Mary Poppins 2', 'Jesucristo cazavampiros']
const goodMovies = [
    { title: "Jurassic Park", director: "Steven Spielberg" },
    { title: "Sharknado", director: "Anthony C. Ferrante" },
    { title: "Titanic", director: "James Cameron" }
]

export const staticCitiesList = cities.map((elm, idx) => <li key={idx}>{elm}</li>)
export const badMoviesStaticList = badMovies.map((elm, idx) => <li key={idx}>{elm}</li>)
export const goodMoviesList = goodMovies.map((elm, idx) => <Card key={idx} title={elm.title} director={elm.director} />)