import supreme from "../../assets/supreme.png"
import {  } from "./Card.css";

function CardDestaque() {
    return(
        <>
        <section>
            <div>
                <p>Coleção em destaque</p>
            </div>

            <div className="card">
               <div>
                    <p>30% OFF</p>
                    <h1>Novo drop Supreme</h1>
                    <button>Comprar</button>
               </div>
                <div>
                    <img src={supreme} alt="" />
                </div>
            </div>

            <div></div>

            <div></div>
        </section>
        </>
    )
}

export default CardDestaque