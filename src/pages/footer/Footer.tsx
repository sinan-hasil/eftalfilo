import logo from "../../images/açık renk.png"
import "./footer.css"
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <footer className="bg-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-4">
            <img src={logo} width={"100px"} />
            <p style={{width: "100%"}}>
              Özel Transfer Hizmetlerimizde zamanınızı özverili ve etkili kullanmanıza yardımcı olmaya çalışıyor ve her hizmet alanımızda olduğu gibi bu hizmet alanımızda devam ediyoruz.
            </p>
          </div>
          <div className="col col-sm-12 col-md-4">
            <h4>Menüler</h4>
            <ul className="mt-3">
              <li>
                <Nav.Link as={Link} to={"/"}>Anasayfa</Nav.Link>
              </li>            
              <li>
                <a href="#car-cards" className="nav-link">Hizmetlerimiz</a>
              </li>
              <li>KVKK Ve Aydınlatma Metni</li>
              <li>Çerez Politikası</li>
            </ul>
          </div>
          <div className="col col-sm-12 col-md-3">
            <h4>İletişim</h4>
            <ul>
              <li>
                <i className="bi bi-telephone-forward-fill"></i>
                <span className="d-flex gap-3 align-items-center"><FaPhoneAlt /><span>0531 326 0853</span></span>
              </li>
              
              <li>
                <i className="bi bi-envelope-fill"></i>
                <span className="d-flex gap-3 align-items-center"><IoMdMail /> <span>İnfo@eftalrentacar.com</span></span>
              </li>
              <li>
                <i className="bi bi-geo-alt-fill"></i>
                <span className="d-flex gap-3"><FaLocationDot className="fs-3" /><span>Karabaş, Kavala Aparmanı, Hafiz Selim Efendi Sk. No:12/1-E, 41040 İzmit/Kocaeli</span></span>
              </li>
              <li>
                <i className="bi bi-geo-alt-fill"></i>
                <Nav.Link as={Link} to={"https://www.instagram.com/eftalarackiralama/"}><span className="d-flex gap-3 align-items-center"><PiInstagramLogoFill /> İnstagram</span></Nav.Link>
              </li>
              <li>
                <i className="bi bi-geo-alt-fill"></i>
                <Nav.Link as={Link} to={"https://tr.linkedin.com/company/eftalfilo"}><span className="d-flex gap-3 align-items-center"><FaLinkedin /> LinkedIn</span></Nav.Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer