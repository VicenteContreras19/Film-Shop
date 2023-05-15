import '../static/style.scss'
import { Card } from 'react-bootstrap'


export function About(){
    return (
        <>
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -2,
        overflow: "hidden"
      }}
    >
      <img
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%"
        }}
        src="imgs\bg-masthead.jpg"
      ></img>
          </div>
          <Card  className="h-100 p-5 mt-5" style={{
      backgroundColor: "rgba(0, 0, 0, 0.6)", // Neutral color (black) with opacity of 0.6
      outline:"none"}}>

      <h2
      
      className="container d-flex align-items-center justify-content-center "
      style={{
        

        textAlign: "center",
        
        minHeight: "80vh",
      }} > Welcome to our online webshop dedicated to providing high-quality cinematic film stock for filmmakers, videographers, and photographers. We are passionate about the art of filmmaking and understand the importance of using the right tools to bring your vision to life. That's why we offer a carefully curated selection of film stocks to ensure that you have access to the best products on the market.Our team has years of experience in the film industry, and we understand the unique characteristics and advantages of each film stock. We have personally tested and handpicked the brands and stocks we offer in our shop, ensuring that they meet our high standards for quality, consistency, and performance.

Whether you're looking for classic black and white film stock for a timeless look, vibrant color film for a bold and modern aesthetic, or specialty film for experimental and creative projects, we have you covered. We carry a wide range of film stocks from popular brands like Kodak, Ilford, and Fujifilm, as well as smaller, independent brands that offer unique and innovative products.

In addition to our film stock selection, we also offer a range of accessories and services to support your film shooting needs. From film processing and scanning services to camera rentals and film development chemicals, we have everything you need to complete your film project from start to finish.

At our online webshop, we are committed to providing our customers with exceptional products, customer service, and expertise. We understand that the world of film can be complex and intimidating, but we are here to help. Whether you're a seasoned professional or just starting out, we're here to answer your questions and help you find the perfect film stock for your project.

Thank you for choosing our online webshop for your cinematic film stock needs. We look forward to working with you and helping you bring your creative vision to life.


      </h2>
    



     
     
      </Card>
      </>
)
}