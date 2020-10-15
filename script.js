const CompraCasco= () =>{
    return new Promise((resolve,rejecr)=>{
        setTimeout(() =>{
            resolve("comprando casco")
        },1000)
    })
}
const ComprandoGuantes = () =>{
    return new Promise((resolve,rejecr)=>{
        setTimeout(() =>{
            resolve("Comprando Guantes")
        },2000)
    })
}
const paseoBici = () =>{
    return new Promise((resolve,rejecr)=>{
        setTimeout(() =>{
            resolve("disfrutnato paseo en bici usando casco y guantes")
        },8000)
    })
}

const miFetchApi = async () => {
    //no se usa promesa
    //obtenerdatos(). then(losdatos =>{
    //    console.log(losdatos);
    //    return convertirJson();
    //})
    //then(datosJson =>{
    //    console.log(datosJson);
    //})
    const casco = await CompraCasco();
    const guantes  = await ComprandoGuantes();
    const paseo = await paseoBici();
    return [casco,guantes,paseo]
 }
miFetchApi()
.then(informacion =>{
    console.log(informacion)
})