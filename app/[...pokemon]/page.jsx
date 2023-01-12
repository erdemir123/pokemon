import React from 'react'

export default async function page({ params })  {
  console.log(params.pokemon[1])
  async function getPoke(){
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon[1]}`)
    return res.json()
  }
  let data = await getPoke()
  console.log(data.abilities.map((item)=>item.ability.name));
  return (
    <div>
      
    </div>
  )
}
