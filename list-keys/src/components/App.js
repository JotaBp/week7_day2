import React from 'react'
import { staticCitiesList, badMoviesStaticList, goodMoviesList } from './staticLists/staticLists'
import DynamicMoviesList from './dynamicList/DynamicMoviesList'

function App() {
  return (
    <main>
      <h2>Módulo completo de pelícuas</h2>
      <DynamicMoviesList />

      <hr />

      <h2>Listado de cuidades (estático)</h2>
      <ul>
        {staticCitiesList}
      </ul>

      <hr />
      <h2>Listado de pelis malas (estático)</h2>
      <ul>
        {badMoviesStaticList}
      </ul>

      <hr />
      <h2>Listado de pelis buenas</h2>
      {goodMoviesList}


    </main>
  )
}

export default App;
