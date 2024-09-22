import logo from "../../images/açık renk.png"
import "./footer.css"
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
        <footer className="bg-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-6">
            <img src={logo} width={"100px"} />
            <p>
              Özel Transfer Hizmetlerimizde zamanınızı özverili ve etkili kullanmanıza yardımcı olmaya çalışıyor ve her hizmet alanımızda olduğu gibi bu hizmet alanımızda de.
            </p>
          </div>
          <div className="col col-sm-12 col-md-3">
            <h4>Menüler</h4>
            <ul className="mt-3">
              <li>
                <a href="./index.html" className="nav-link">Anasayfa</a>
              </li>
              <li>
                <a href="#job-description" className="nav-link">Hakkımızda</a>
              </li>
              <li>
                <a href="#car-cards" className="nav-link">Hizmetlerimiz</a>
              </li>
              <li>KVKK Ve Aydınlatma Metni</li>
              <li>Çerez Politikası</li>
              <li>İletişim</li>
            </ul>
          </div>
          <div className="col col-sm-12 col-md-3">
            <h4>İletişim</h4>
            <ul>
              <li>
                <i className="bi bi-telephone-forward-fill"></i>
                <span className="d-flex gap-3 align-items-center"><FaPhoneAlt /><span>0555  555  55 55</span></span>
              </li>
              <li>
                <i className="bi bi-telephone-forward-fill"></i>
                <span className="d-flex gap-3 align-items-center"><FaPhoneAlt /><span>0555  555  55 55</span></span>
              </li>
              <li>
                <i className="bi bi-envelope-fill"></i>
                <span className="d-flex gap-3 align-items-center"><IoMdMail /> <span>İnfo@eftalrentacar.com</span></span>
              </li>
              <li>
                <i className="bi bi-geo-alt-fill"></i>
                <span className="d-flex gap-3 align-items-center"><FaLocationDot /><span>Konum bilgilerimiz KOCAELİ</span></span>
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