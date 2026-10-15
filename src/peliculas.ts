// import express from 'express'; //librería para crear el servidor web y manejar peticiones

// type PeliculaT = { // defino el tipo de peliculas
//     id: number,
//     name: string, 
//     runtime: number
// }


// let peliculas: PeliculaT[] = [
// {
//     id:1, 
//     name: 'Pelicula 1',
//     runtime: 120
// },
// {
//     id:2,
//     name: 'Pelicula 2',
//     runtime: 180
// }]; 


// const app = express(); //se crea la instancia principal de la aplicación 

// app.use(express.json());


// app.get("/films", (req, res)=>{ //se define que el servidor responderá a peticiones HTTP de tipo GET con (app.get) con el /films, definimos la ruta y con el 
//     res.json(peliculas);    
// });

// app.get("/films/:id", (req,res)=>{

//     const miIdDeMiCorazon = Number(req.params.id);

//     const peliculaQueBusco= peliculas.find((x) => x.id === miIdDeMiCorazon);

//     if(!peliculaQueBusco){
//         res.status(404).json({
//             message:"Chiqui, esa peli no la tengo"
//         })
//         return
//     }

//     res.json(peliculaQueBusco)

// })
// app.post("/films",(req,res)=>{
    
//     if(!req.body){
//         res.status(400).json({
//             message:"Me tienes que pasar algo guapo"
//         })
//         return
//     }

//     if(!req.body.name){
//         res.status(400).json({
//             message:"La peli deberia tener un nombre no?"
//         })
//         return
//     }

//     if(!req.body.runtime){
//         res.status(400).json({
//             message:"Necesito saber cuanto dura no?"
//         })
//         return
//     }


//     const nuevaPeli: PeliculaT= {
//         id: Math.random(),
//         name: req.body.name,
//         runtime: req.body.runtime
//     }

//     peliculas.push(nuevaPeli);

//     res.status(201).json({
//         message:"Se ha creado correctamente",
        
//     });

// })

// app.delete("/films/:id",(req,res)=>{
//     const id=Number(req.params.id);

//     const peliAeliminar=peliculas.find(x=>x.id===id);

//     const nuevaListaFiltrada = peliculas.filter((x)=>!(x.id===id));

//     peliculas= nuevaListaFiltrada;

//     res.json({
//         message: `La pelicula ${peliAeliminar} ha sido eliminada`
//     })
// })

// app.put("/films/:id",(req,res)=>{
//     const id=Number(req.params.id);

//     const peliAactualizar=peliculas.find((x)=>x.id===id);

//     if(!peliAactualizar){
//         res.status(404).json({
//             message:"Esa peli no existe asi que chungo eliminarla"
//         })
//         return
//     }

//     if(!req.body){
//         res.status(400).json({
//             message:"Me tienes que pasar algo papi"
//         })
//         return
//     }

//     if(!req.body.name || !req.body.runtime){
//         res.status(400).json({
//             message:"Me falta el name o el runtime majo"
//         })
//         return
//     }

//     const peliActualizada: PeliculaT={
//         id,
//         name:req.body.name,
//         runtime:req.body.runtime
//     }

//     peliculas= peliculas.map(x=>x.id===id?peliActualizada:x);

//     res.json({
//         message:"Peli actualizada correctamente",
//         newFilm:peliActualizada
//     })

// })

// app.patch("/films/:id", (req,res)=>{
    
//     const id=Number(req.params.id);

//     const peliAactualizar=peliculas.find((x)=>x.id===id)
    
//     if(!peliAactualizar){
//         res.status(404).json({
//             message:"Me tienes que pasar algo papi"
//         })
//         return
//     }

//     if(!req.body){
//         res.status(400).json({
//             message:"Me tienes que pasar algo papi"
//         })
//         return
//     }

//     if(!req.body.name || !req.body.runtime){
//         res.status(400).json({
//             message:"Me falta el name o el runtime majo"
//         })
//         return
//     }

//     const peliActualizada: PeliculaT={
//         id,
//         name:req.body.name ? req.body.name: peliAactualizar.name,
//         runtime: req.body.runtime ? req.body.runtime:peliAactualizar.runtime
//     }

//     peliculas=peliculas.map(x=>x.id===id?peliAactualizar);

//     res.json({
//         message:"Cambialo a medias o como tu quieras"
//     })
// }


// const PORT = 6969;

// app.listen(PORT, ()=>{
//     console.log("Ey, API escuchando en el puerto 6969")
// })