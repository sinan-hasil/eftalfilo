import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  Form,
  Row,
  Table,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import handleWhatappSendIcon from "../mainpage/Mainpage";
import "./contact.css";

interface BrandItem {
  [key: string]: string[];
}

interface SelectedVehicle {
  brand: string;
  model: string;
  km: string;
  period: string;
  quantity: number;
}

type BrandArray = BrandItem[];

const brand: BrandArray = [
  { Renault: ["Megane", "Talisman", "Clio", "Taliant"] },
  { Fiat: ["Egea", "Doblo", "Doblo Panelvan"] },
  { Toyota: ["Corolla", "Hilux"] },
  { Dacia: ["Jugger", "Duster"] },
  { Ford: ["Courier", "Transit", "Ranger"] },
  { Citroen: ["Jumper"] },
  { Peugeot: ["Boxer"] },
  { Isuzu: ["D-max"] },
  { Mitsubishi: ["L-200"] },
  { Mercedes: ["Vito"] },
  { Hyundai: ["İ20"] },
  {
    "İş Makinası": [
      "Mitsubishi Temsa Atlas",
      "Süpürge Aracı",
      "Kanal Açma Aracı",
      "Sepetli Vinç",
      "Su Tankeri",
    ],
  },
];

const rentalKm = [
  "5.000km",
  "10.000km",
  "15.000km",
  "20.000km",
  "25.000km",
  "30.000km",
  "35.000km",
  "40.000km",
  "45.000km",
];

const jobs = [
  "Doktor",
  "Mühendis",
  "Avukat",
  "Öğretmen",
  "Hemşire",
  "Polis",
  "işçi",
  "şoför",
  "Mimar",
  "Grafik Tasarımcı",
  "Yazılım Geliştirici",
  "İş Analisti",
  "Muhasebeci",
  "Pazarlama Uzmanı",
  "Satış Temsilcisi",
  "Proje Yöneticisi",
  "Çevirmen",
  "Fotoğrafçı",
  "Pilot",
  "Eczacı",
  "İnsan Kaynakları Uzmanı",
  "Veri Analisti",
];

const rentalPeriods = ["Günlük", "Aylık", "12 Ay", "24 Ay", "36 Ay", "47 Ay"];

const ilceler = [
  "Başiskele",
  "Çayırova",
  "Darıca",
  "Derince",
  "Dilovası",
  "Gebze",
  "Gölcük",
  "İzmit",
  "Kandıra",
  "Karamürsel",
  "Kartepe",
  "Körfez",
];

const Contact = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>("Seçin");
  const [models, setModels] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState<string>("Seçin");
  const [selectedPeriod, setSelectedPeriod] = useState<string>("Ay");
  const [selectedKm, setSelectedKm] = useState<string>("10.000");
  const [quantity, setQuantity] = useState<number>(1);
  const [value, setValue] = useState([1, 3]);
  const [customerType, setCustomerType] = useState<string>("Bireysel");
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [tc, setTc] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("Başiskele");
  const [phone, setPhone] = useState<string>("");
  const [selectedJob, setSelectedJob] = useState("Meslek Seçin");
  const [selectedVehicles, setSelectedVehicles] = useState<SelectedVehicle[]>(
    []
  );

  const handleAddVehicle = () => {
    if (selectedBrand === "Seçin" || selectedModel === "Seçin") {
      alert("Lütfen marka ve model seçiniz.");
      return;
    }

    const newVehicle: SelectedVehicle = {
      brand: selectedBrand,
      model: selectedModel,
      km: selectedKm,
      period: selectedPeriod,
      quantity: quantity,
    };

    setSelectedVehicles([...selectedVehicles, newVehicle]);

    // Reset form after adding
    setSelectedBrand("Seçin");
    setSelectedModel("Seçin");
    setSelectedKm("10.000");
    setSelectedPeriod("Ay");
    setQuantity(1);
  };

  const handleRemoveVehicle = (index: number) => {
    const updatedVehicles = selectedVehicles.filter((_, i) => i !== index);
    setSelectedVehicles(updatedVehicles);
  };

  const handleJob = (job: string) => {
    setSelectedJob(job);
  };

  const handleCustomerTypeChange = (type: string) => {
    setCustomerType(type);
  };

  const handleBrandSelect = (brandName: string) => {
    setSelectedBrand(brandName);
    const selectedBrandItem = brand.find((item) => brandName in item);
    if (selectedBrandItem) {
      setModels(selectedBrandItem[brandName]);
    } else {
      setModels([]);
    }
  };

  const handleKm = (km: string) => {
    setSelectedKm(km);
  };

  const handleModelSelect = (model: string) => {
    setSelectedModel(model);
  };

  const handlePeriodSelect = (period: string) => {
    setSelectedPeriod(period);
  };

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (val: any) => setValue(val);

  const handleWhatsAppSend = () => {
    const phoneNumber = "+905313260853";
    const url =
      "https://wa.me/" +
      phoneNumber +
      "?text=" +
      "Merhaba! Seçtiğim araç hakkında bilgi almak istiyorum." +
      "\n" +
      "\n Marka: " +
      selectedBrand +
      " - \n" +
      "\n Model: " +
      selectedModel +
      " - \n" +
      "\n Araç Adedi: " +
      quantity +
      " - \n" +
      "\n Yıllık Kullanım: " +
      selectedKm +
      " - \n" +
      "\n Vade: " +
      selectedPeriod +
      " - \n" +
      "\n Müşteri Tipi: " +
      customerType +
      " - \n" +
      "\n Ad: " +
      name +
      " - \n" +
      "\n Soyad: " +
      lastName +
      " - \n" +
      "\n TC Kimlik No: " +
      tc +
      " - \n" +
      "\n Doğum Tarihi: " +
      birthDate +
      " - \n" +
      "\n Meslek: " +
      selectedJob +
      " - \n" +
      "\n Adres: " +
      address +
      " - \n" +
      "\n İlçe: " +
      selectedDistrict +
      " - \n" +
      "\n Telefon Numarası: " +
      phone;

    window.open(url, "_blank")?.focus();
  };

  return (
    <>
      <div className="bg-secondary py-5 mb-5">
        <Container className="px-5 d-flex flex-column gap-4 text-white">
          <h1 className="text-center">HEMEN TEKLİF ALIN</h1>
          <p className="text-center">
            Alttaki formu doldurarak, ihtiyaçlarınıza uygun araç kiralama
            teklifinizi hemen alın. Eftal Rent a Car olarak, size en iyi hizmeti
            sunabilmek için hızlı ve kolay bir teklif süreci sağlıyoruz. Formu
            tamamladıktan sonra, uzman ekibimiz size en kısa sürede geri dönüş
            yaparak detayları iletecektir. Yolda güvende olmak için hemen teklif
            alın!
          </p>
        </Container>
      </div>

      <div className="wp" onClick={handleWhatappSendIcon}>
        <FaWhatsapp className="wp-icon" />
      </div>

      <div className="form-div mb-5">
        <Container fluid className="d-flex justify-content-center">
          <form>
            <Container>
              <Row className="d-flex gap-2 justify-content-between">
                <Col className="d-flex flex-column gap-1 ">
                  <small>Marka</small>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="arac-drop"
                      variant="outline"
                      id="dropdown-basic"
                    >
                      {selectedBrand}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {brand.map((item, index) => {
                        const [brandName] = Object.keys(item);
                        return (
                          <Dropdown.Item
                            key={index}
                            onClick={() => handleBrandSelect(brandName)}
                          >
                            {brandName}
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>

                <Col className="d-flex flex-column gap-1">
                  <small>Model</small>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="arac-drop"
                      variant="outline"
                      id="dropdown-basic"
                    >
                      {selectedModel}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {models.length > 0 ? (
                        models.map((model, index) => (
                          <Dropdown.Item
                            key={index}
                            onClick={() => handleModelSelect(model)}
                          >
                            {model}
                          </Dropdown.Item>
                        ))
                      ) : (
                        <Dropdown.Item disabled>Marka Seçiniz</Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>

                <Col className="d-flex flex-column gap-1">
                  <small>Yıllık Kullanım</small>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="arac-drop"
                      variant="outline"
                      id="dropdown-basic"
                    >
                      {selectedKm}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {selectedKm.length > 0 ? (
                        rentalKm.map((km, index) => (
                          <Dropdown.Item
                            key={index}
                            onClick={() => handleKm(km)}
                          >
                            {km}
                          </Dropdown.Item>
                        ))
                      ) : (
                        <Dropdown.Item disabled>Marka Seçiniz</Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>

                <Col className="d-flex flex-column gap-1">
                  <small>Vade</small>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="arac-drop"
                      variant="outline"
                      id="dropdown-basic"
                    >
                      {selectedPeriod}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {rentalPeriods.map((period, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={() => handlePeriodSelect(period)}
                        >
                          {period}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>

                <Col className="ms-1 mt-2">
                  <div>
                    <ToggleButtonGroup
                      type="checkbox"
                      value={value}
                      onChange={handleChange}
                      className="mt-3"
                    >
                      <ToggleButton
                        variant="outline"
                        className="text-dark button-grup"
                        id="tbg-btn-1"
                        onClick={decrement}
                        value={1}
                      >
                        -
                      </ToggleButton>
                      <ToggleButton variant="outline" id="tbg-btn-2" value={2}>
                        <span>{quantity}</span>
                      </ToggleButton>
                      <ToggleButton
                        id="tbg-btn-3"
                        onClick={increment}
                        value={3}
                        variant="outline"
                        className="text-dark button-grup"
                      >
                        +
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                </Col>
                <Col>
                  <Button
                    variant="outline"
                    onClick={handleAddVehicle}
                    className="mt-4 adet-btn"
                  >
                    Aracı Ekle
                  </Button>
                </Col>
              </Row>

              {selectedVehicles.length > 0 && (
                <Container fluid className="mt-4">
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Marka</th>
                        <th>Model</th>
                        <th>Yıllık Kullanım</th>
                        <th>Vade</th>
                        <th>Kiralama Paketi</th>
                        <th>Adet</th>
                        <th>İşlem</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedVehicles.map((vehicle, index) => (
                        <tr key={index}>
                          <td>{vehicle.brand}</td>
                          <td>{vehicle.model}</td>
                          <td>{vehicle.km}</td>
                          <td>{vehicle.period}</td>
                          <td>{vehicle.quantity}</td>
                          <td>
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={() => handleRemoveVehicle(index)}
                            >
                              Sil
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Container>
              )}
            </Container>

            <div className="person mt-5">
              <h4 className="text-center">Kişisel Bilgiler</h4>
              <Container fluid className="mt-4">
                <Row className="gap-4">
                  <Col md={5} className="p-0">
                    <h6>Müşteri Tipi</h6>
                    <div className="d-flex gap-3">
                      <div>
                        <input
                          type="radio"
                          id="bireysel"
                          name="customerType"
                          checked={customerType === "Bireysel"}
                          onChange={() => handleCustomerTypeChange("Bireysel")}
                        />{" "}
                        <span>Bireysel</span>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="sirket"
                          name="customerType"
                          checked={customerType === "Şahıs Şirketi"}
                          onChange={() =>
                            handleCustomerTypeChange("Şahıs Şirketi")
                          }
                        />{" "}
                        <span>Şahıs Şirketi</span>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="ticari"
                          name="customerType"
                          checked={customerType === "Ticari Şirket"}
                          onChange={() =>
                            handleCustomerTypeChange("Ticari Şirket")
                          }
                        />{" "}
                        <span>Ticari Şirket</span>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <label htmlFor="name">
                      <small>Adınız</small>
                    </label>
                    <Form.Control
                      required
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <label htmlFor="lastName">
                      <small>Soyadınız</small>
                    </label>
                    <Form.Control
                      required
                      id="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col md={2} className="p-0">
                    <label htmlFor="tc">
                      <small>TC Kimlik No</small>
                    </label>
                    <Form.Control
                      required
                      id="tc"
                      type="number"
                      value={tc}
                      onChange={(e) => setTc(e.target.value)}
                    />
                  </Col>

                  <Col className="">
                    <small>Meslekler</small>
                    <Dropdown className="d-flex justify-content-between w-100">
                      <Dropdown.Toggle
                        className="job-drop"
                        variant="outline"
                        id="dropdown-basic"
                      >
                        {selectedJob}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {jobs.map((job, index) => (
                          <Dropdown.Item
                            key={index}
                            onClick={() => handleJob(job)}
                          >
                            {job}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>

                  <Col>
                    <label htmlFor="city">
                      <small className="text-muted">Şehir</small>
                    </label>
                    <Form.Control
                      id="city"
                      required
                      type="text"
                      defaultValue={"Kocaeli"}
                      disabled
                    />
                  </Col>
                  <Col className="d-flex flex-column align-items-center">
                    <label htmlFor="">
                      <small>İlçe Seç</small>
                    </label>
                    <div className="w-100">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="outline-primary"
                          id="dropdown-basic"
                          className="w-100"
                        >
                          {selectedDistrict}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          {ilceler.map((ilce, index) => {
                            return (
                              <Dropdown.Item
                                key={index}
                                onClick={() => setSelectedDistrict(ilce)}
                              >
                                {ilce}
                              </Dropdown.Item>
                            );
                          })}
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-4 gap-4">
                  <Col className="p-0">
                    <label htmlFor="tel">
                      <small>Tel No</small>
                    </label>
                    <Form.Control
                      required
                      id="tel"
                      type="number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Col>
                  <Col className="d-flex flex-column">
                    <label htmlFor="birtDate">
                      <small>Doğum Tarihi</small>
                    </label>
                    <input
                      type="date"
                      id="birtDate"
                      style={{
                        height: "35px",
                        border: "1px solid #dee2e6",
                        borderRadius: "5px",
                        padding: "0 5px",
                      }}
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      as="textarea"
                      placeholder="Adresiniz"
                      style={{ height: "100px" }}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </Col>
                </Row>
              </Container>
            </div>
            <Button
              variant="success"
              className="d-flex align-items-center gap-1"
              onClick={handleWhatsAppSend}
            >
              <FaWhatsapp /> Talep Et
            </Button>
          </form>
        </Container>
      </div>

      <Container className="mb-5 mt-5 border-top py-5">
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
