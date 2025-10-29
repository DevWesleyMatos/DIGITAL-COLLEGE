import { useState, useEffect } from "react";
import "../App.css";

function GetData() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const buscarRepositorios = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setRepositories(data.results);
    };

    buscarRepositorios();
  }, []);

 return(
    <>
    {repositories.map((item)=>(
        <p>nome: {item.name}</p>
    ))}
    </>
 )
}

export default GetData;
