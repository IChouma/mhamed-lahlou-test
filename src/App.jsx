import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.png"
import de from "./de.webp"
import es from "./es.webp"
import fr from "./fr.webp"
import at from "./at.webp"
import it from "./it.webp"
import pl from "./pl.webp"
import pixel from "./pixel.jpg"
import boo from "./boo.png"
import phone from "./icon-phone.png"
import logoFooter from "./Logo-footer.png"
import twitter from "./stwitter.png"
import instagram from "./instagram.png"
import pintrest from "./pintrest.png"
import facebook from "./facebook.png"
import lIn from "./l-in.png"

function App() {
  return (
    <>
    {/* header-start */}

    <header id='header' className='container-xs  bg-light p-md-4 p-2'>
      <nav className="navbar  m-0 p-0 bg-light justify-content-center">
          <a className=" navbar-brand m-0 p-0 " href="#">
                <img src={logo}className="logo-brand" alt="" /> 
          </a>
      </nav>
      <p className='logo-txt m-0 p-0 text-center text-uppercase fw-bold '>le platforme d'achat professionelle d'automobile</p>
    </header>
    {/* header-end */}

      {/* intro-start */}

    <section id='o7zr' className=' container'>
        <div className="container-xs">
          <div className="row">
            <img src={pixel} alt="" className='col-md-5 col-12' />
            <div className="col  col-md-7 col-12 p-md-5 p-2 align-self-center text-md-start text-center">
              <h5 className='fw-bold fs-4 '>Nos serveurs sont actuellment indisponibles!</h5>
              <p>nos équipes technique mettent tout en oeuvre  ppur résourdre ce probléme au plus vite. Nous sommes désolés pour le géne occasionée. <br />
               si vous avez besoin d'aide, n'hésitez pas à contacter notre service commercial au <span className='fw-bold'>06 61 77 11 40 </span >ou notre service client au <span className='fw-bold'>06 61 77 11 40.</span>
               </p>
               <button className='button btn btn-primary btn-md border-0 text-black fw-bold'>Actualiser</button>
            </div>
          </div>
</div>
    </section>
    {/* intro-start */}

    {/* black-section-start */}

    <section className="container-xs  bg-black">
        <section id='contact' className='container border-bottom pb-5'>
          <h2 className='h2-contact text-center d-none p-4 d-md-block'>CONTACTEZ NOUS</h2>
          <h2 className='h2-contact text-center p-4  pb-0 d-md-none'>BESOIN D'?AIDE</h2>
          <h6 className='text-light text-center d-bock  d-md-none mb-4 fs-5'>Des experts à votre service</h6>
          <div className="row  text-center ps-5 pe-5 pt-2 pb-2 g-3 g-md-1   ">
            <div className='d-md-block d-none  col-md-3 text-light '><img src={boo} className="me-2" alt="" /> 0041225948116</div>
            <div className='col-md-3 col-sm-6 col-12 lh-md-1 text-light'><img src={phone} className="me-2" alt="" /> 0041225948116<br /><span className='span-contact d-md-block d-none'>xxxxxxx</span></div>
            <div className='col-md-3  col-sm-6 col-12 text-light  d-md-block'><img src={boo} className="me-2 " alt="" /><span className=''>iiicii@outlook.com</span></div>
            <div className=" col-md-3 col-12 text-md-start text-center">
              <h6 className='text-light p-0 m-0'>Lundi-Vendredi</h6>
              <span className='span-contact-2 fw-bold fs-6'>08:30-12:30 & 14:30-18:30</span>
            </div>
          </div>
            <div className='col-md-6 col-12 ordr-md-2 order-1 d-md-none mt-3 text-md-end text-center  '>
            <span className='text-light-50  me-md-3 me-0  fw-bold  '>SUIVEZ NOUS: </span>
          <div className="social-m d-inline-block  ">
            <img src={instagram} className=" s-m-img ms-2" alt="" />
            <img src={twitter} className=" s-m-img ms-2"alt="" />
            <img src={lIn} className=" s-m-img ms-2"alt="" />
            <img src={facebook} className=" s-m-img ms-2"alt="" />
            <img src={pintrest} className=" s-m-img ms-2"alt="" />
          </div>
          </div>
        </section>
        <section id="head-footer" className='container p-4 container border-bottom '>
          <div className="row  justify-content-center g-3 g-md-0">
            <span className='col-md-3 order-2 order-md-1 text-center align-self-center text-light fw-bold fs-6' >Conditions d'utilisation</span>
          <div className=' col-md-5 col-8 order-1 order-md-2    p-2 text-center'>
            <img src={logo} className="logo-brand" alt="" />
            <p className='text-center text-light fw-bold fs-6'>Le platforme d'achat des professionneles des automobile</p>
          </div>
          <span className='col-md-3 text-center order-3 align-self-center text-light fw-bold fs-6'>Espace client</span>
          </div>

        </section>
      </section>

      {/* black-section-end */}

      {/* footer-start */}
      <footer className='bg-black'>
        <section className="container  p-md-4 p-5 container  '" id="footer">
          <div className="row  g-md-0 g-3">
        <div className=" col-md-6 order-md-1 order-2 col-12  ">
        <img src={logoFooter} alt="" /><span className='span-footer ms-2 '>Est une marque enregistrée &copy; copyright 2020-plan du site</span>
        </div>
        <div className='col-md-6 col-12 ordr-md-2 order-1  text-md-end text-start  '>
          <span className='text-light me-md-3 me-0 d-none d-md-inline-block fw-bold '>Présent sur</span>
          <span className='tex-light-50  me-md-3 me-0 d-inline-block d-md-none fw-bold '>Changer de pays</span>
        <div className="located d-inline-block  ">
          <img src={fr} className="ms-2" alt="" />
          <img src={es} className="ms-2"alt="" />
          <img src={it} className="ms-2"alt="" />
          <img src={de} className="ms-2"alt="" />
          <img src={at} className="ms-2"alt="" />
          <img src={pl} className="ms-2"alt="" />
          <img src={pl} className="ms-2"alt="" />
        </div>
        </div>
        </div>
      </section>
      </footer>

       {/* footer-end */}
    </>

  );
}

export default App;
