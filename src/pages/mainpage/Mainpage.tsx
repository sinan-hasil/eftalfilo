import { SetStateAction, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import carouselImg from "../../images/pexels-riciardus-228094.jpg";
import carouselImg1 from "../../images/yansi-keim-dBkgMrlyjBQ-unsplash.jpg";
import carouselImg2 from "../../images/pexels-mikebirdy-120049.jpg";
import clio from "../../images/clio.png";
import transit from "../../images/2-ford.png";
import courier from "../../images/courier.jpg";
import ranger from "../../images/fordranger.png";
import vito from "../../images/vito-tourer@2x.png";
import vinc from "../cars/cars-img/sepetli-vinc_1-4000x9000.webp";
import descImg from "../../images/WhatsApp Görsel 2024-09-13 saat 15.00.58_da9e173e.jpg";
import {
  Accordion,
  Button,
  Card,
  CardGroup,
  Col,
  Container,
  Nav,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import "./mainpage.css";
import { Link } from "react-router-dom";

const Mainpage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src={carouselImg1} />
          <Carousel.Caption>
            <h3>Hızlı ve Güvenilir Araç Kiralama</h3>
            <p>Konfor, Güven, Uygun Fiyat</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carouselImg2} />
          <Carousel.Caption>
            <h3>Kolay Araç Kiralama Deneyimi</h3>
            <p>Hız, Esneklik, Memnuniyet</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carouselImg} />
          <Carousel.Caption>
            <h3>Her Yola Uygun Araçlar</h3>
            <p>Kalite, Konfor, Güvenlik</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="mt-5 bg-dark py-5 rounded tab-container">
        <Tabs
          defaultActiveKey="home"
          id="justify-tab-example"
          className="mb-5 mt-5 fw-bold"
          justify
        >
          <Tab eventKey="home" title="Binek Araç">
            <div className="d-flex justify-content-center text-white">
              <img
                src={clio}
                style={{ width: "500px", height: "250px" }}
                alt="Binek Araç"
                className="img-fluid"
              />
            </div>
          </Tab>
          <Tab eventKey="profile" title="Hafif Ticari">
            <div className="d-flex justify-content-center">
              <img
                src={courier}
                style={{ width: "500px", height: "250px" }}
                alt="Hafif Ticari"
                className="courier-tab"
              />
            </div>
          </Tab>
          <Tab eventKey="longer-tab" title="Ticari">
            <div className="d-flex justify-content-center">
              <img
                src={transit}
                style={{ width: "500px", height: "250px" }}
                alt="Ticari"
                className="img-fluid"
              />
            </div>
          </Tab>
          <Tab eventKey="contact1" title="Arazi">
            <div className="d-flex justify-content-center">
              <img
                src={ranger}
                style={{ width: "500px", height: "250px" }}
                alt="Arazi"
                className="img-fluid"
              />
            </div>
          </Tab>
          <Tab eventKey="contact2" title="VİP">
            <div className="d-flex justify-content-center">
              <img
                src={vito}
                style={{ width: "500px", height: "250px" }}
                alt="VİP"
                className="img-fluid"
              />
            </div>
          </Tab>
          <Tab eventKey="contact3" title="İş Makinası">
            <div className="d-flex justify-content-center">
              <img
                src={vinc}
                style={{ width: "500px", height: "250px" }}
                alt="İş Makinası"
                className="img-fluid"
              />
            </div>
          </Tab>
        </Tabs>
      </Container>

      <div id="job-description" className="job-description w-100">
        <Container className="mt-5">
          <h2 className="text-center mb-5">ŞİRKETİMİZ HAKKINDA</h2>
          <Row>
            <Col
              sm={6}
              md={6}
              className="d-flex flex-column justify-content-center"
            >
              <h5>İşte Size Güvence</h5>
              <p>
                Araç kiralamada en önemli faktörlerden biri güvenilirliktir. Biz
                de bu bilincin farkında olarak size her zaman en güvenli ve en
                konforlu araçlarla hizmet veriyoruz. İşte sunduğumuz güvenceler:
              </p>
              <ul>
                <li>
                  <h6>Bakımlı Araç Filosu:</h6>
                  <p>
                    Araçlarımız düzenli olarak bakım ve kontrollerden geçirilir.
                    Böylece, yolda herhangi bir aksilik yaşamadan güvenle
                    seyahat edebilirsiniz.
                  </p>
                </li>
                <li>
                  <h6>Yol Yardım Desteği:</h6>
                  <p>
                    Olası bir acil durumda, 7/24 yol yardım hizmetimiz ile size
                    her an destek sağlıyoruz.
                  </p>
                </li>
                <li>
                  <h6>Kapsamlı Sigorta:</h6>
                  <p>
                    Araçlarımız, kiralama süresi boyunca kapsamlı sigorta ile
                    korunur, böylece ekstra bir endişe taşımadan aracınızı
                    kullanabilirsiniz.
                  </p>
                </li>
                <li>
                  <h6>Temizlik ve Hijyen:</h6>
                  <p>
                    Araçlarımız, hijyen standartlarına uygun şekilde temizlenir
                    ve her kiralamada size steril bir araç teslim edilir.
                  </p>
                </li>
              </ul>
            </Col>

            <Col sm={6} md={6}>
              <img
                src={descImg}
                className="desc-img img-fluid"
                alt="Şirket Hakkında"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="services">
        <Container className="d-flex flex-column gap-5">
          <h1 className="text-center">HİZMETLERİMİZ</h1>
          <CardGroup>
            <Card>
              <div className="w-100 d-flex justify-content-center">
                <Card.Img variant="top" src={clio} className="clio" />
              </div>
              <Card.Body className="text-center">
                <Card.Title>Binek</Card.Title>
                <Card.Text>
                  Şehir içi ve şehirler arası yolculuklarınız için ideal binek
                  araçlar.
                </Card.Text>
                <Button variant="primary">
                  <Nav.Link as={Link} to={"/cars"}>
                    Aracı İncele
                  </Nav.Link>
                </Button>
              </Card.Body>
            </Card>
            <Card>
              <div className="w-100 d-flex justify-content-center">
                <Card.Img variant="top" src={courier} className="courier" />
              </div>
              <Card.Body className="text-center">
                <Card.Title>Hafif Ticari</Card.Title>
                <Card.Text>
                  İşletmeler için ideal hafif ticari araçlar.
                </Card.Text>
                <Button variant="primary">
                  <Nav.Link as={Link} to={"/cars"}>
                    Aracı İncele
                  </Nav.Link>
                </Button>
              </Card.Body>
            </Card>
            <Card>
              <div className="w-100 d-flex justify-content-center">
                <Card.Img variant="top" src={transit} className="transit" />
              </div>
              <Card.Body className="text-center">
                <Card.Title>Ticari</Card.Title>
                <Card.Text>
                  Yük taşımacılığı ve diğer ticari ihtiyaçlar için araçlar.
                </Card.Text>
                <Button variant="primary">
                  <Nav.Link as={Link} to={"/cars"}>
                    Aracı İncele
                  </Nav.Link>
                </Button>
              </Card.Body>
            </Card>
          </CardGroup>

          <CardGroup>
            <Card>
              <div className="w-100 d-flex justify-content-center">
                <Card.Img variant="top" src={ranger} className="ranger" />
              </div>
              <Card.Body className="text-center">
                <Card.Title>Arazi</Card.Title>
                <Card.Text>
                  Zorlu arazi koşullarında üstün performans sağlar.
                </Card.Text>
                <Button variant="primary">
                  <Nav.Link as={Link} to={"/cars"}>
                    Aracı İncele
                  </Nav.Link>
                </Button>
              </Card.Body>
            </Card>
            <Card>
              <div className="w-100 d-flex justify-content-center">
                <Card.Img variant="top" src={vito} className="vito" />
              </div>
              <Card.Body className="text-center">
                <Card.Title>VİP</Card.Title>
                <Card.Text>
                  VIP araçlarımızla lüks ve konforun tadını çıkarın.
                </Card.Text>
                <Button variant="primary">
                  <Nav.Link as={Link} to={"/cars"}>
                    Aracı İncele
                  </Nav.Link>
                </Button>
              </Card.Body>
            </Card>
            <Card>
              <div className="w-100 d-flex justify-content-center">
                <Card.Img variant="top" src={vinc} className="vinc" />
              </div>
              <Card.Body className="text-center">
                <Card.Title>İş Makinası</Card.Title>
                <Card.Text>İnşaat ve diğer iş makinaları.</Card.Text>
                <Button variant="primary">
                  <Nav.Link as={Link} to={"/cars"}>
                    Aracı İncele
                  </Nav.Link>
                </Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </div>

      <Container>
        <Accordion className="d-block mt-5 mb-5" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <b>Araç kiralama süresi nasıl hesaplanır?</b>
            </Accordion.Header>
            <Accordion.Body>
              Araç kiralama süresi, aracın teslim alındığı saatten itibaren
              günlük olarak hesaplanır. Kiralama süresi 24 saati aştığında
              ekstra bir gün ücreti uygulanabilir.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <b>En az kaç yaşında olmalıyım?</b>
            </Accordion.Header>
            <Accordion.Body>
              Araç kiralama yaşı, genellikle 21'dir. Ancak bazı araç sınıfları
              için en az 25 yaşında olmanız gerekebilir.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <b>Kaza yaparsam ne yapmalıyım?</b>
            </Accordion.Header>
            <Accordion.Body>
              Kaza durumunda, öncelikle polise ve ardından kiralama şirketine
              bilgi vermelisiniz. Sigorta işlemlerinin başlatılması için gerekli
              belgeleri temin etmeniz gerekmektedir.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <b>Araç teslim süresi gecikirse ne olur?</b>
            </Accordion.Header>
            <Accordion.Body>
              Araç tesliminde gecikme olursa, ekstra ücret uygulanabilir.
              Gecikme durumunda, kiralama şirketiyle iletişime geçmeniz tavsiye
              edilir.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export default Mainpage;
