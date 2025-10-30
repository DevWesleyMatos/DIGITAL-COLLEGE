import { useState, useEffect } from "react";
import "./card.css";

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

 return (
   <>
     <section id="Cards">
       {repositories.map((item) => (
           <div className="card">
             <img src={item.image} alt="..." />
             <div className="card-body">
               <h5 className="card-title">{item.name}</h5>
               <p className="card-text"></p>
               <a href="#" className="btn btn-primary">
                 Go somewhere
               </a>
             </div>
           </div>
       
       ))}
     </section>
   </>
 );
}

export default GetData;
