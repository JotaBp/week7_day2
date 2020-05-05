import React from 'react'
import './Card.css'

const Card = ({ title, director, removeCard, hasOscars }) => {
    return (
        <article className="movie-card">
            <h3>{title}</h3>
            <hr />
            <p>{director}</p>
            <p>{hasOscars ? 'Ganó un Oscar' : 'Sin oscar'}</p>
            <button onClick={removeCard}>ELIMINAR</button>
        </article>
    )
}

export default Card