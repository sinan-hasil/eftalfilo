import { useState } from "react";
import { Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import "./contact.css";

interface CarsType {
  binek_arac: string[];
  hafif_ticari: string[];
  ticari: string[];
  arazi: string[];
  vip: string[];
  is_makinasi: string[];
}

const cars: CarsType = {
  binek_arac: [
    "Renault Megane",
    "Renault Talisman",
    "Renault Clio",
    "Renault Taliant",
    "Hyundai İ20",
    "Fiat Egea",
    "Toyota Corolla",
    "Dacia Jugger",
  ],
  hafif_ticari: ["Fiat Doblo", "Fiat Doblo Panelvan", "Ford Courier"],
  ticari: ["Ford Transit", "Citroen Jumper", "Peugeot Boxer"],
  arazi: [
    "Dacia Duster",
    "Isuzu D-max",
    "Mitsubishi L-200",
    "Toyota Hilux",
    "Ford Ranger",
  ],
  vip: ["Mercedes Vito", "Volkswagen Crafter"],
  is_makinasi: [
    "Mitsubishi Temsa Atlas",
    "Süpürge Aracı",
    "Kanal Açma Aracı",
    "Sepetli Vinç",
    "Su Tankeri",
  ],
};

const Contact = () => {
  const [selectedVipCar, setSelectedVipCar] = useState<string | null>(null);
  const [selectedAraziCar, setSelectedAraziCar] = useState<string | null>(null);
  const [selectedTicariCar, setSelectedTicariCar] = useState<string | null>(null);
  const [selectedBinekArac, setSelectedBinekArac] = useState<string | null>(null);
  const [selectedHafifTicari, setSelectedHafifTicari] = useState<string | null>(null);
  const [selectedIsMakinasi, setSelectedIsMakinasi] = useState<string | null>(null);

  return (
    <>
      <form
        className="py-5 w-100"
        method="POST"
        action="https://formsubmit.co/sinan.hasil61@gmail.com"
      >
        <Container>
          <h2 className="text-center mb-5">Bize Ulaşın</h2>
          <Row className="gap-4 justify-content-center">
            <Col sm={12} md={4}>
              <div>
                <label htmlFor="name">
                  <small>*İsim</small>
                </label>
                <Form.Control required id="name" type="text" />
              </div>
            </Col>

            <Col sm={12} md={4}>
              <div>
                <label htmlFor="last-name">
                  <small>*Soyisim</small>
                </label>
                <Form.Control required id="last-name" type="text" />
              </div>
            </Col>

            <div className="e-mail">
            <label htmlFor="email">
              <small>*E-mail</small>
            </label>
            <Form.Control required id="email" type="email" />
            </div>
          </Row>          
        </Container>

        <Container>
        <div className="py-5 d-flex flex-column gap-5">
          <h2 className="text-center">Araç Bilgileri</h2>
          <p className="text-center">
            Lütfen yukarıdaki kişisel bilgileri doldurduktan sonra talep
            ettiğiniz araç tipini seçin
          </p>

          <Row>
            <Col className="d-flex justify-content-center flex-column align-items-center">
              <h6>VİP Araç</h6>
              <Dropdown onSelect={(car) => car && setSelectedVipCar(car)}>
                <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                  {selectedVipCar ? selectedVipCar : "Araç Seçin"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {cars.vip.map((item, index) => (
                    <Dropdown.Item key={index} eventKey={item}>
                      {item}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>

            <Col className="d-flex justify-content-center flex-column align-items-center">
              <h6>Arazi Aracı</h6>
              <Dropdown onSelect={(car) => car && setSelectedAraziCar(car)}>
                <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                  {selectedAraziCar ? selectedAraziCar : "Araç Seçin"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {cars.arazi.map((item, index) => (
                    <Dropdown.Item key={index} eventKey={item}>
                      {item}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>

            <Col className="d-flex justify-content-center flex-column align-items-center">
              <h6>Ticari Araç</h6>
              <Dropdown onSelect={(car) => car && setSelectedTicariCar(car)}>
                <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                  {selectedTicariCar ? selectedTicariCar : "Araç Seçin"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {cars.ticari.map((item, index) => (
                    <Dropdown.Item key={index} eventKey={item}>
                      {item}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>

          <Row>
            <Col className="d-flex justify-content-center flex-column align-items-center">
              <h6>Binek Araç</h6>
              <Dropdown onSelect={(car) => car && setSelectedBinekArac(car)}>
                <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                  {selectedBinekArac ? selectedBinekArac : "Araç Seçin"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {cars.binek_arac.map((item, index) => (
                    <Dropdown.Item key={index} eventKey={item}>
                      {item}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>

            <Col className="d-flex justify-content-center flex-column align-items-center">
              <h6>Hafif Ticari</h6>
              <Dropdown onSelect={(car) => car && setSelectedHafifTicari(car)}>
                <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                  {selectedHafifTicari ? selectedHafifTicari : "Araç Seçin"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {cars.hafif_ticari.map((item, index) => (
                    <Dropdown.Item key={index} eventKey={item}>
                      {item}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>

            <Col className="d-flex justify-content-center flex-column align-items-center">
              <h6>İş Makinası</h6>
              <Dropdown onSelect={(car) => car && setSelectedIsMakinasi(car)}>
                <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                  {selectedIsMakinasi ? selectedIsMakinasi : "Araç Seçin"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {cars.is_makinasi.map((item, index) => (
                    <Dropdown.Item key={index} eventKey={item}>
                      {item}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </div>
        <div className="w-100 d-flex justify-content-center">
          <Button variant="success" type="submit" className="w-75">
            Gönder
          </Button>
        </div>
        </Container>
      </form>

      <Container className="contact mt-5 mb-5">
        <Row>
          <Col sm={12} md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1510.9832801554965!2d29.93397971141101!3d40.76276021012877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb45038dc0d07b%3A0x5c6476537ae7949c!2sEftal%20Rent%20A%20Car!5e0!3m2!1str!2str!4v1726317858232!5m2!1str!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col
            sm={12}
            md={6}
            className="d-flex flex-column align-items-center mt-5 list"
          >
            <h2>İletişim</h2>
            <ul className="mt-5">
              <li>
                <i className="bi bi-telephone-forward-fill"></i>
                <span>0555 555 55 55</span>
              </li>
              <li>
                <i className="bi bi-telephone-forward-fill"></i>
                <span>0555 555 55 55</span>
              </li>
              <li>
                <i className="bi bi-envelope-fill"></i>
                <span>info@eftalrentacar.com</span>
              </li>
              <li>
                <i className="bi bi-geo-alt-fill"></i>
                <span>konum bilgilerimiz KOCAELİ</span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
