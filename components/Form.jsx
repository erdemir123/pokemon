import Image from "next/image";
import Link from "next/link";
import Styles from "./form.module.css"

async function getPokemon() {
  let res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
  return res.json();
}
export default async function Home() {
  let data = await getPokemon();
  return (
    <div className={Styles.container} >
      {data?.results.map((item, index) => (
        <Link href={`/pokemon/${item.name}`} key={index} className={Styles.card}>
          <Image  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} alt={item.name} width={200} height={200} />
          <div className={Styles.cardTitle}>{item?.name}</div>
        </Link>
        
      ))}
    </div>
  );
}


