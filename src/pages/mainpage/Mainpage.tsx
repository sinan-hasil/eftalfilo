import { SetStateAction, useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import carouselImg from "../../images/fiat egea carousel.jpg";
import carouselImg1 from "../../images/fiat doblo.jpg";
import carouselImg2 from "../../images/transit group.jpg";
import carouselImg3 from "../../images/l-200.jpg";
import clio from "../../images/clio.png";
import transit from "../../images/2-ford.png";
import courier from "../../images/courier.webp";
import ranger from "../../images/fordranger.png";
import vito from "../../images/vito-tourer@2x.png";
import vinc from "../cars/cars-img/sepetli-vinc_1-4000x9000.webp";
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
import { Link, useLocation } from "react-router-dom";
import descimg from "../../images/descimg.jpg";
import desc2 from "../../images/desc1.jpg";

const Mainpage = () => {
  const [index, setIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src={carouselImg} className="object-fit-cover" />
          <Carousel.Caption>
            <h1>ARAÇ KİRALAMA</h1>
            <p>Konfor, Güven, Uygun Fiyat</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carouselImg1} className="object-fit-cover" />
          <Carousel.Caption>
            <h1>FİLO KİRALAMA</h1>
            <p>Hız, Esneklik, Memnuniyet</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carouselImg3} className="object-fit-cover" />
          <Carousel.Caption>
            <h1>HER YOLA UYGUN ARAÇLAR</h1>
            <p>Kalite, Konfor, Güvenlik</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carouselImg2} className="object-fit-cover" />
          <Carousel.Caption>
            <h1>TİCARİ ARAÇLAR</h1>
            <p>İşiniz İçin Hazır</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="tab">
        <Container>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3 mt-5 d-flex justify-content-center custom-tabs"
          >
            <Tab eventKey="home" title="Binek Araç" className="text-dark custom-tab">
              <Row className="align-items-center">
                <Col className="d-flex justify-content-center" sm={12} md={6}>
                  <img src={clio} alt="Binek Araç" className="img-fluid" />
                </Col>
                <Col>
                  <p>
                    Eftal Rent a Car, geniş bir binek araç filosu ile
                    müşterilerine konforlu ve güvenilir çözümler sunar. Şehir
                    içi ve uzun yolculuklar için ideal olan binek araçlar, yakıt
                    tasarrufu ve rahatlık sağlar. Eftal Rent a Car, ekonomik
                    araçlardan lüks segment araçlara kadar farklı seçeneklerle,
                    her ihtiyaca ve bütçeye uygun kiralama hizmeti sunmaktadır.
                    Günlük veya uzun süreli kiralama seçenekleriyle, Eftal Rent
                    a Car, yolculuklarınızı daha keyifli hale getirir.
                  </p>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="profile" title="Hafif Ticari">
              <Row className="align-items-center">
                <Col className="d-flex justify-content-center" sm={12} md={6}>
                  <img
                    src={courier}
                    style={{ width: "500px", height: "250px" }}
                    alt="Hafif Ticari"
                    className="courier-tab"
                  />
                </Col>
                <Col>
                  <p>
                    Eftal Rent a Car, binek araçların yanı sıra hafif ticari
                    araç kiralama hizmeti de sunmaktadır. Hafif ticari araçlar,
                    geniş iç hacimleri ve yük taşıma kapasiteleriyle iş amaçlı
                    kullanım için idealdir. Hem şehir içi hem de şehir dışı
                    taşımacılıkta pratik çözümler sağlayan bu araçlar, ekonomik
                    yakıt tüketimiyle de tercih edilmektedir. Eftal Rent a Car,
                    farklı iş ihtiyaçlarına uygun hafif ticari araç
                    seçenekleriyle, müşterilerine güvenilir ve esnek kiralama
                    hizmetleri sunar.
                  </p>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="ticari" title="Ticari">
              <Row className="align-items-center">
                <Col className="d-flex justify-content-center" sm={12} md={6}>
                  <img
                    src={transit}
                    style={{ width: "400px", height: "300px" }}
                    alt="Ticari"
                    className="img-fluid"
                  />
                </Col>
                <Col>
                  <p>
                    Eftal Rent a Car, binek araçların yanı sıra hafif ticari
                    araç kiralama hizmeti de sunmaktadır. Hafif ticari araçlar,
                    geniş iç hacimleri ve yük taşıma kapasiteleriyle iş amaçlı
                    kullanım için idealdir. Hem şehir içi hem de şehir dışı
                    taşımacılıkta pratik çözümler sağlayan bu araçlar, ekonomik
                    yakıt tüketimiyle de tercih edilmektedir. Eftal Rent a Car,
                    farklı iş ihtiyaçlarına uygun hafif ticari araç
                    seçenekleriyle, müşterilerine güvenilir ve esnek kiralama
                    hizmetleri sunar.
                  </p>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="arazi" title="Arazi">
              <Row className="align-items-center">
                <Col className="d-flex justify-content-center" sm={12} md={6}>
                  <img
                    src={ranger}
                    style={{ width: "400px", height: "250px" }}
                    alt="Arazi"
                    className="img-fluid"
                  />
                </Col>
                <Col>
                  <p>
                    Eftal Rent a Car, binek ve hafif ticari araçların yanı sıra
                    arazi araçlarıyla da hizmet sunmaktadır. Zorlu yol
                    koşullarında yüksek performans gösteren arazi araçları,
                    güçlü motorları ve dört çeker sistemleriyle özellikle
                    off-road sürüşler için idealdir. Hem iş seyahatleri hem de
                    macera dolu yolculuklar için tercih edilen bu araçlar,
                    konfor ve dayanıklılığı bir arada sunar. Eftal Rent a Car,
                    arazi araçlarıyla her türlü yolculuğunuzu güvenle ve keyifle
                    tamamlamanızı sağlar.
                  </p>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="vip" title="VİP">
              <Row className="align-items-center">
                <Col className="d-flex justify-content-center" sm={12} md={6}>
                  <img
                    src={vito}
                    style={{ width: "400px", height: "270px" }}
                    alt="VİP"
                    className="img-fluid"
                  />
                </Col>
                <Col>
                  <p>
                    Eftal Rent a Car, binek ve hafif ticari araçların yanı sıra
                    arazi araçlarıyla da hizmet sunmaktadır. Zorlu yol
                    koşullarında yüksek performans gösteren arazi araçları,
                    güçlü motorları ve dört çeker sistemleriyle özellikle
                    off-road sürüşler için idealdir. Hem iş seyahatleri hem de
                    macera dolu yolculuklar için tercih edilen bu araçlar,
                    konfor ve dayanıklılığı bir arada sunar. Eftal Rent a Car,
                    arazi araçlarıyla her türlü yolculuğunuzu güvenle ve keyifle
                    tamamlamanızı sağlar.
                  </p>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="is" title="İş Makinası">
              <Row className="align-items-center">
                <Col className="d-flex justify-content-center" sm={12} md={6}>
                  <img
                    src={vinc}
                    style={{ width: "400px", height: "250px" }}
                    alt="İş Makinası"
                    className="img-fluid"
                  />
                </Col>
                <Col>
                  <p>
                    Eftal Rent a Car, binek ve ticari araçların yanı sıra iş
                    makineleri kiralama hizmeti de sunmaktadır. İnşaat, tarım ve
                    sanayi gibi sektörlerde ihtiyaç duyulan ekskavatör, forklift
                    ve yükleyici gibi iş makineleri, yüksek performans ve
                    dayanıklılık sunarak projelerinizi hızlı ve güvenli bir
                    şekilde tamamlamanızı sağlar. Eftal Rent a Car, iş
                    makineleri kiralama konusunda esnek çözümler sunarak iş
                    süreçlerinizi kolaylaştırır ve verimliliğinizi artırır.
                  </p>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Container>
      </div>

      <div className="job-description bg-danger"  id="job-description">
        <Row>
          <Col sm={12} md={6} className="p-0">
            <img src={descimg} className="egea" />
          </Col>
          <Col sm={12} md={6} className="p-5 d-flex justify-content-center flex-column">
            <h4 className="text-white">Neden Eftal?</h4>
            <p className="text-white">
              Eftal Rent a Car olarak, yılların deneyimi ve profesyonel hizmet
              anlayışımızla araç kiralama sektöründe siz değerli <br />
              müşterilerimize en iyi hizmeti sunmayı hedefliyoruz. Kocaeli başta
              olmak üzere geniş bir hizmet ağı ile bireysel ve kurumsal araç
              kiralama ihtiyaçlarınızı karşılamaktayız.
            </p>
            <p className="text-white">
              Eftal Rent a Car, müşteri memnuniyetini ön planda tutarak,
              güvenilir ve konforlu araç kiralama hizmetleri sunan lider bir
              firmadır. Yılların getirdiği tecrübe ve geniş araç filomuzla, hem
              bireysel hem de kurumsal müşterilerimize en iyi hizmeti sağlama
              hedefindeyiz. Misyonumuz, en yeni modellerle güncellediğimiz
              araçlarımız ve esnek kiralama seçeneklerimizle müşterilerimizin
              seyahat deneyimini kolaylaştırmaktır. Eftal Rent a Car olarak,
              ihtiyaçlarınıza en uygun araçları rekabetçi fiyatlarla sunarak
              seyahatinizi sorunsuz hale getiriyoruz.
            </p>
          </Col>
          
          <Col
            sm={12}
            md={6}
            lg={6}
            xl={6}
            xxl={6}
            className="order-2 order-sm-1 bg-primary p-5 m-0 d-flex flex-column justify-content-center text-col"
          >
            <ul className="mt-5" style={{ listStyle: "none", color: "white" }}>
              <li className="mb-5">
                <h4>Zengin Araç Filosu</h4>
                <p>
                  Ekonomik araçlardan lüks modellere, ticari araçlardan iş
                  makinelerine kadar geniş bir yelpazeye sahibiz.
                </p>
              </li>
              <li className="mb-5">
                <h4>Esnek Kiralama Seçenekleri</h4>
                <p>
                  Günlük, haftalık, aylık ve yıllık kiralama seçenekleriyle
                  esneklik sunuyoruz.
                </p>
              </li>
              <li className="mb-5">
                <h4>7/24 Müşteri Desteği</h4>
                <p>
                  Seyahatiniz boyunca ihtiyaç duyabileceğiniz her an
                  yanınızdayız.
                </p>
              </li>
              <li className="mb-5">
                <h4>Uygun Fiyat Garantisi</h4>
                <p>
                  Müşterilerimize en uygun fiyatları sunarak bütçenizi
                  zorlamadan kaliteli hizmet almanızı sağlıyoruz.
                </p>
              </li>
              <li className="mb-5">
                <h4>Kolay Rezervasyon</h4>
                <p>
                  Web sitemiz üzerinden hızlı ve kolay bir şekilde aracınızı
                  rezerve edebilirsiniz.
                </p>
              </li>
              <Nav.Link as={Link} to={"/contact"}>
                <Button variant="danger">
                  Whatsapp Üzerinden Rezervasyon Yap
                </Button>
              </Nav.Link>
            </ul>
          </Col>
          <Col
            className="order-2 order-sm-2 p-0 m-0"
            sm={12}
            md={6}
            lg={6}
            xl={6}
            xxl={6}
          >
            <img src={desc2} />
          </Col>
        </Row>
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
