import Image from "next/image";
import React from "react";
import Styles from "./pokemon.module.css";
export default async function page({ params }) {
  console.log(params.pokemon[1]);
  async function getPoke() {
    let res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${params.pokemon[1]}`
    );
    return res.json();
  }
  let data = await getPoke();
  // console.log(data.abilities.map((item)=>item.ability.name));
  console.log();
  return (
    <div className={Styles.card}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${data.id}.png`}
        alt={data.name}
        width={200}
        height={200}
      />
      <div className={Styles.cardTitle}>{data.name}</div>
      <h3>Power</h3>
      {data.moves.map((item) => {
        return (
          <div className={Styles.cardMove}>
            ➡️<div>{item.move.name}</div>
          </div>
        );
      })}
    </div>
  );
}
