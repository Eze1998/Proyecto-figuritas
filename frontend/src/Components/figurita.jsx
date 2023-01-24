import { useState, useEffect } from 'react';
import { getFiguritasByPais, httpAgregarFigurita } from "../Servicios/httpConsumer";
import { Figurita as ModeloFigurita } from "../Modelo/figurita";

const Figurita = ({ props }) => {
    const [pais, setPais] = useState("");
    const [nombre, setNombre] = useState("");
    const [figuritas, setFiguritas] = useState([]); 
    const [existeFigu, setExisteFigu] = useState(false);

    const agregarFigurita = ((event) => {
        event.preventDefault()
        let existe = false;
        figuritas.forEach((figu) => {
            if (figu.nombre === nombre && figu.pais === pais) {
                existe = true;
            }
        })
        if (!existe) {
            await  (httpAgregarFigurita({
                nombre,
                pais,
            }))
        } else {
            console.log('entra')
            setExisteFigu(true)
        }
    });

    useEffect(() => {
        getFiguritasByPais(pais,data => { setFiguritas(data.map(adaptModelToFigurita)); });
      }, [pais]);
  
    return (
      <>
      <form onSubmit={agregarFigurita}>
        <input type="text" value={pais} onChange={(e) => setPais(e.target.value)} placeholder="ingresa pais" required />
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="ingresa nombre" required />
        <button type="submit">Agregar figurita</button>
       </form>
       {existeFigu ? <label>La figurita ya existe</label> : <></> }
       </>
    );
  };
  
  const adaptModelToFigurita = (figurita) => new ModeloFigurita(
    figurita.id,
    figurita.nombre,
    figurita.pais,
    figurita.tengo
  );

  export default Figurita;