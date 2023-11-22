import styles from "./ChangeLenguajeAndDarkMode.module.css"
import {useSelector,useDispatch} from "react-redux"
import { useEffect } from "react"
import { darkmode,lenguaje } from "../../../Redux/actions"

const ChangeLenguajeAndDarkMode = ()=>{
//Funciones //////////////////////////////////////////////////////////////////

const dispatch = useDispatch();

/////////////////////////Estados Globales de Redux //////////////////////////

const Lenguaje = useSelector((state) => state.lenguaje);
const Darkmode = useSelector((state) => state.darkmode);


///////////////////////////Handlers //////////////////////////

const handleChangeLenguajes=()=>{
    if (Lenguaje==="EN"){dispatch(lenguaje("ES"))}
    if (Lenguaje==="ES"){dispatch(lenguaje("EN"))} 
    }
  
const handleDarkMode = ()=>{
    if (Darkmode===false){
        dispatch(darkmode(true))}
    if (Darkmode===true){
        dispatch(darkmode(false))}
       
      }  
///////////////////////////////USEEFFECTS////////////////////////
useEffect(()=>{
    const darklocal = JSON.parse(localStorage.getItem("darkmode"))
    if (darklocal === true){
        dispatch(darkmode(true));
    }
    const lenguajeLocal= (localStorage.getItem("lenguaje"))//Nota: cuando es un string no se parsea
        if(!lenguajeLocal){dispatch(lenguaje(Lenguaje))}
  

  },[Darkmode,dispatch,Lenguaje])

//////////////////////////renderizado///////////////////////////////////
    return ( 
        <div className={styles.container}>
            <div  className={styles.dk}>
     <p className={styles.option} onClick={handleChangeLenguajes}>{Lenguaje}</p>
     {!Darkmode &&
              <p className={styles.option} onClick={handleDarkMode}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
        </svg></p>}
             {Darkmode &&
                 <p className={styles.option} onClick={handleDarkMode}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"  viewBox="0 0 16 16">
                 <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
               </svg></p> }</div>
            <div className={styles.productos}> 
                <p className={styles.botonaccesorios}>Accesorios </p>
                <p className={styles.botonaccesorios}> Top Tendencia </p>
                <p className={styles.botonaccesorios}>Temporada</p>
            </div>  

            <div className={styles.user}>
                <p>Ingresar</p>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg></p>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
  <path  d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
</svg></p>
            </div>
            

               
        </div>
    )
}

export default ChangeLenguajeAndDarkMode