import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import Image from "next/image";

const getPokemons = async(limit = 151, offset= 0): Promise<SimplePokemon[]> => {
    const data:PokemonsResponse= await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res=> res.json())
    
    const pokemons = data.results.map(pokemon => {
        return {
            id: pokemon.url.split('/').at(-2)!,
            name: pokemon.name
        }
    })
    
    return pokemons;
}


export default async function Pokemons() {

    const pokemons = await getPokemons();

    return (
        
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span className="text-5xl m-2">Listado de pokemons <small>estático</small></span>

            <PokemonGrid pokemons={pokemons}/>
        </div>
    )
  }