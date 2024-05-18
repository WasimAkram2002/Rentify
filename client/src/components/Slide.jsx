import "../styles/Slide.scss"

const Slide = () => {
  return (
    <div className="slide" style={{display:"flex", flexDirection:"column",alignItems:"center", justifyContent:"center"}}>
      <h1 style={{paddingBottom:"75px"}}>
        Welcome to Rentify! <br /> Where Renting Meets Simplicity
      </h1>
      <p>Rentify helps owners to find the correct tenants and also help tenants find the correct house based on their key requirements.</p>
      <p>Facilitate the matching of property owners with suitable tenants.
Provide detailed property listings and search functionalities.</p>
 <p>Ensure a secure and user-friendly platform.</p> 
    </div>
  );
};

export default Slide;
