import { Col, Container, Row } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <>
    <div className="bg-secondary py-5 mb-5">
        <Container className="px-5 d-flex flex-column gap-4 text-white">
          <h1 className="text-center">Eftal Filo - Yolculuğunuzda Sınırsız Özgürlük ve Konfor!</h1>
          <p className="text-center">
          Eftal Rent a Car olarak, müşteri memnuniyetini ön planda tutarak
              farklı ihtiyaçlarınıza yönelik araç kiralama çözümleri sunuyoruz.
              Binek araçlardan hafif ticari ve ticari araçlara, arazi
              araçlarından VIP hizmetler ve iş makinelerine kadar geniş bir
              yelpazede araç kiralama hizmetimiz bulunmaktadır. İhtiyacınıza
              uygun, konforlu ve güvenilir araçlar için bizimle iletişime
              geçebilirsiniz.
          </p>
        </Container>
      </div>
      
      <Container className="mb-5 mt-5 py-5">
        <Row>
          <Col sm={12} md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d96702.85487404987!2d29.854647049378574!3d40.76281179692552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x14cb45038dc0d07b%3A0x5c6476537ae7949c!2sKaraba%C5%9F%2C%20Kavala%20Aparman%C4%B1%2C%20Hafiz%20Selim%20Efendi%20Sk.%20No%3A12%2F1-E%2C%2041040%20%C4%B0zmit%2FKocaeli!3m2!1d40.762841099999996!2d29.9370479!5e0!3m2!1str!2str!4v1727095976439!5m2!1str!2str"
              className="img-fluid"
              style={{ border: "0" }}
              loading="lazy"
            ></iframe>
          </Col>
          <Col className="text-center">
            <h1>İletişim Bilgileri</h1>
            <ul className="mt-5" style={{ listStyle: "none" }}>
              <li className="mt-4">
                <span className="text-center d-flex gap-2 align-items-center justify-content-center">
                  <FaPhoneAlt />
                  <span>0531 326 08 53</span>
                </span>
              </li>

              <li className="mt-4">
                <span className="d-flex align-items-center justify-content-center gap-2">
                  <IoMdMail /> <span>İnfo@eftalfilo.com</span>
                </span>
              </li>
              <li className="mt-4">
                <span className="d-flex gap-2">
                  <FaLocationDot className="fs-5" />
                  <span>
                    {" "}
                    Karabaş, Kavala Aparmanı, Hafiz Selim Efendi Sk. No:12/1-E,
                    41040 İzmit/Kocaeli
                  </span>
                </span>
              </li>
              <li className="mt-4">
                <Nav.Link
                  as={Link}
                  to={"https://www.instagram.com/eftalarackiralama/"}
                >
                  <span className="d-flex align-items-center justify-content-center gap-2">
                    <PiInstagramLogoFill /> İnstagram
                  </span>
                </Nav.Link>
              </li>
              <li className="mt-4">
                <Nav.Link
                  as={Link}
                  to={"https://tr.linkedin.com/company/eftalfilo"}
                >
                  <span className="d-flex align-items-center justify-content-center gap-2">
                    <FaLinkedin /> LinkedIn
                  </span>
                </Nav.Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
