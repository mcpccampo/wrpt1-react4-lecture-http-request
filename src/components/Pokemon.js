import React from 'react'

const Pokemon = (props) => {
  return (
    <div className="pokemon">
      <h2>{props.pokemon.name}</h2>
    </div>
  )
}
export default Pokemon
