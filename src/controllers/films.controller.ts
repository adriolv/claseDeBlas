import { request, response, type Request, type Response } from "express";
import { changeFilms, films } from "../data/films.data.js";
//import type { FilmT } from "../models/files.modules.js";

export const getFilms=(
    req:Request,
    res:Response
) => {
    res.json(films);
}

const findFilm=(id:number,res:Response)=>{
    const film=films.find(x=>x.id===id);

    if(!film){
        res.status(404).json({
            message:"No film"
        })
    }
    return film
}

export const getFilmsWithID=(
    req:Request,
    res:Response
) => {
    const id= Number(req.params.id);
    const film=findFilm(id,res);

    res.json(film);
}

export const deleteFilm=(
    req:Request,
    res:Response
)=>{
    const id=Number(req.params.id);
    const film=findFilm(id,res);

    if(film){
        changeFilms(films.filter(x=>x.id!==id));
        res.json({
            message:"Pelicula eliminada"
        })
    }else{
            res.status(400).json({
                message:"No se pudo eliminar esa pelicula"
            })
        }
    }


// export const patchFilm = (
//     req: Request,
//     res: Response
// ) => {

//     const id = Number(req.params.id);
    
//     const peliAactualizar = findFilm(id, res);

//     if (peliAactualizar) {
        
//         if (!req.body) {
//             res.status(400).json({
//                 message: "Me tienes que pasar algo papi"
//             });
//             return;
//         }

//         if (!req.body.name || !req.body.runtime) {
//             res.status(400).json({
//                 message: "Me falta el name o el runtime majo"
//             });
//             return;
//         }

//         const peliActualizada: FilmT = {
//             id,
//             name: req.body.name ? req.body.name : peliAactualizar.name,
//             runtime: req.body.runtime ? req.body.runtime : peliAactualizar.runtime
//         };

//         // 5. LÓGICA: Generamos el nuevo array y actualizamos la "base de datos"
//         const updatedFilms = films.map(x => x.id === id ? peliActualizada : x);
//         changeFilms(updatedFilms);

//         // 6. ESQUELETO: Devolvemos la respuesta al cliente
//         res.json({
//             message: "Cambialo a medias o como tu quieras"
//         });
//     }
// }








