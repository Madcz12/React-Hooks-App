//import React from 'react';

import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {

  const {counter, decrement, increment} = useCounter(1);
  // como el valor del counter es asincrono se puede usar como argumento en el URL:
  const {data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
      <h1>Información de Pokémon</h1>
      <hr />

    { isLoading 
    ? 
    // componente del mensaje "cargando" 
    <LoadingMessage/> 
    : 
      // componente de la tarjeta pokemon con su info
      (<PokemonCard 
      id={counter} 
      name={data.name}
      sprites={[
        data.sprites.front_default,
        data.sprites.front_shiny,
        data.sprites.back_default,
        data.sprites.back_shiny,
      ]}
      />
      )
    }

      <h2>{data?.name}</h2>

    <button className="btn btn-primary mt-2"
    onClick={() => counter > 1 ? decrement() : null}
    >
      Anteriores
    </button>

    <button 
    className="btn btn-primary mt-2"
    onClick={() => increment() }
    >
      Siguiente
    </button>
    </>
  )
}
