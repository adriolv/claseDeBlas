// import express from 'express'; 

// type VideoGameT = {
//     id: number, 
//     name: string, 
//     plataform: string, 
//     releaseYear: number
// }

// let videojuegos: VideoGameT[] = [{    
//     id: 1, 
//     name: "Marcianitos",
//     plataform: "Gameboy",
//     releaseYear: 1980},
//     {
//         id: 2, 
//         name: "Mario Bros", 
//         plataform: "Nintendo", 
//         releaseYear: 2000
//     }, 
//     {
//         id: 3, 
//         name: "Call of Duty ", 
//         plataform: "Play Station", 
//         releaseYear: 2005
//     }

// ]; 

// const app = express()

// app.use(express.json())

// app.get("/videogame", (req, res) => {
//     res.json(videojuegos); 
// }); 

// app.get("/videogame/:id", (req, res)=> {
//     const videojuegosNumeros = Number(req.params.id)

//     const videojuegoAbuscar = videojuegos.find((x) => x.id === videojuegosNumeros); 

//     if (!videojuegoAbuscar){
//         res.status(404).json({
//             message: "Videojuego con esa id no encontrado"
//         })
//         return 
//     }

//     res.json(videojuegoAbuscar)
// })

// app.get("/videogame/plataform/:p", (req, res)=> {

//     const videojuegosPlataforma = videojuegos.filter((x) => x.plataform === req.params.p )

//     if (videojuegosPlataforma.length == 0){
//         res.status(404).json({
//             message: "No se encuentra ningun videojuego en esa plataforma"
//         })
//     }

//     res.json(videojuegosPlataforma)
// })

// app.post("/videogame", (req, rest) => {
//     if (!req.body){
//         rest.status(400).json({
//             message: "No se ha recibido nada a añadir "
//         })
//         return 
//     }

//     if (!req.body.name){
//         rest.status(400).json({
//             message: "Videojuego sin nombre"
//         })
//         return 
//     }

//     if (!req.body.plataform){
//         rest.status(400).json({
//             message:"Videojuego sin plataforma"
//         })   
//         return 
//     } 

//     if(!req.body.releaseYear){
//         rest.status(400).json({
//             message: "Videojuego sin release"
//         })
//         return 
//     }

//     const NuevoVideojuego: VideoGameT = {
//         id: Math.random(), 
//         name: req.body.name, 
//         plataform: req.body.plataform, 
//         releaseYear: req.body.releaseYear
//     }

//     videojuegos.push(NuevoVideojuego)
    
//     rest.status(201).json(NuevoVideojuego)
// })

// app.delete("/videogame/:id", (req,res)=> {
//     const id = Number(req.params.id)

//     const VideojuegosEliminar = videojuegos.find(x=> x.id === id); 

//     if(!VideojuegosEliminar){
//         res.status(404).json({
//             message:"El videojuego no existe"
//         })
//         return 
//     }

//     const NuevaListadeVideojuegos = videojuegos.filter((x)=> !(x.id === id))

//     videojuegos = NuevaListadeVideojuegos

//     res.json({
//         message: "El videojuego ${id} ha sido eliminado"
//     })
// })

// app.put("/videogame/:id", (req, rest) => {

//     const id = Number (req.params.id); 

//         if (!req.body){
//         rest.status(400).json({
//             message: "No se ha recibido nada a añadir "
//         })
//         return 
//     }

//     if (!req.body.name){
//         rest.status(400).json({
//             message: "Videojuego sin nombre"
//         })
//     }

//     if (!req.body.plataform){
//         rest.status(400).json({
//             message:"Videojuego sin plataforma"
//         })   
//         return 
//     } 

//     if(!req.body.releaseYear){
//         rest.status(400).json({
//             message: "Videojuego sin release"
//         })
//         return 
//     }

//     const CambioVideojuego: VideoGameT = {
//         id, 
//         name: req.body.name, 
//         plataform: req.body.plataform, 
//         releaseYear: req.body.releaseYear
//     }

//     videojuegos = videojuegos.map((x) => x.id === id ? CambioVideojuego: x )
//     rest.json("Pelicula actualizada")
// })

// app.patch("/videogame/:id", (req, rest)=> {
//     const  id = Number(req.params.id)
//     if (!req.body){
//         rest.status(400).json({
//             message: "No se ha recibido nada a añadir "
//         })
//         return 
//     }
//     if (!(req.body.name || req.body.plataform || req.body.releaseYear ))
//         rest.status(400).json({
//             message: "Videojuego vacío"
//     })

//     const VideojuegoActualizar = videojuegos.find((x)=> x, id === id);
//     3000
//     if (!VideojuegoActualizar){
//         rest.status(400).json({
//             message: "Este videojuego no existe"
//         })
//         return 
//     }

//     const VideojuegoActualizado : VideoGameT = {
//         id, 
//         name: req?.body?.name ? req.body.name : VideojuegoActualizar.name,
//         plataform: req?.body?.plataform ? req.body.plataform : VideojuegoActualizar.plataform, 
//         releaseYear: req?.body?.releaseYear ? req.body.releaseYear : VideojuegoActualizar.releaseYear
//     }

//     videojuegos = videojuegos.map((x) => x.id  === id ? VideojuegoActualizado : x); 

//     rest.json("Videojuego actualizado (patch)")


// })

// const PORT = 9999

// app.listen(PORT, ()=>{
//     console.log("Escuchando en el puerto 9999")
// })