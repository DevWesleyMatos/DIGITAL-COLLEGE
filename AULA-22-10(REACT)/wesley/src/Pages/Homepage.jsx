import Header from "../Components/Header/Header"
import Carousel from "../Components/Carousel/Carousel"
import Card from "../Components/Card/Cards"
import Footer from "../Components/Footer/Footer";
import CardDestaque from "../Components/CardDestaque/CardDestaque";

function Homepage() {
  
  return (
    <>
          <Header />
          <Carousel />
          <CardDestaque/>
          <Card />
          <Footer/>
    </>
  )

}

export default Homepage