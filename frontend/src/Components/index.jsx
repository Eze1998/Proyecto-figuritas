import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getFiguritas, getPaises } from "../Servicios/httpConsumer";
import { Categoria as ModeloCategoria } from "../Modelo/categoria";
import {Componente} from "./categories";

const Album = ({ props }) => {
  const [categoria, SetCategoria] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const adaptModelToCountry = (pais) => new ModeloCategoria(pais.pais);

  useEffect(() => {
     getPaises(
      (data) => {
        SetCategoria(data.map(adaptModelToCountry));
      },
      () => setIsLoading(false)
    );
  }, []);

  return (
    <>
      {
        isLoading ?
        <p>Cargando</p>
        :(
        <>
        <Link to="/agregar-figurita">agregar figurita</Link>
        
        <Componente categorias={categoria}/>
        </>
      )}
    </>
  );
};

export default Album;
