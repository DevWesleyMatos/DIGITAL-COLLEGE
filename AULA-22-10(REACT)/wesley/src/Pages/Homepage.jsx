import Header from "../Components/Header/Header"
import Carousel from "../Components/Carousel/Carousel"
import Cart from "../Components/Cart/Cart";
import Card from "../Components/Card/Cards";
import Footer from "../Components/Footer/Footer";
import SpecialOffer from "../Components/SpecialOffer/SpecialOffer";
import ProductsList from "../Components/ProductsList/ProductsList"



function Homepage() {
  
  return (
    <>
          <Header />
          <Carousel />
          <ProductsList/>
          <Cart/>
          <Card/>
          <SpecialOffer/>
          <Footer/>
          
    </>
  )

}

export default Homepage