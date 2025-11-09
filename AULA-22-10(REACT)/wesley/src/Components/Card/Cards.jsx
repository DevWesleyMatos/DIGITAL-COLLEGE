import { useState, useEffect } from "react";
import "./card.css";

function GetData() {
  const [sapatos, setSapatos] = useState([]);

  useEffect(() => {
    const buscarSapatos = async () => {
      const response = await fetch("http://localhost:8080/sapatos");
      const data = await response.json();
      setSapatos(data);
    };

    buscarSapatos();
  }, []);

 return (
   <>
     <section id="Cards">
       {sapatos.map((item) => (
           <div className="card">
             <img src={item.image} alt="..." />
             <div className="card-body">
               <h5 className="card-title">{item.name}</h5>
               <p className="card-text">{item.modelo}</p>
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
