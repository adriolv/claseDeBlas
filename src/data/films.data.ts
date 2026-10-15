import type { FilmT } from "../models/files.modules.js";

export let films:FilmT[]=[
{
    id:1, 
    name: 'Pelicula 1',
    runtime: 120
},
{
    id:2,
    name: 'Pelicula 2',
    runtime: 180

},
{
    id:3,
    name: 'Pelicula 2',
    runtime: 180
}]; 


export const changeFilms=(filmsParam:FilmT[])=>{
    films=filmsParam
}


