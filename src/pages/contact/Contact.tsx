import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  Form,
  Row,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import "./contact.css";

interface BrandItem {
  [key: string]: string[];
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

const rentalPeriods = ["Günlük", "Aylık", "Yıllık"];

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
  const [selectedBrand, setSelectedBrand] = useState<string>("Marka Seçin");
  const [models, setModels] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState<string>("Model Seçin");
  const [selectedPeriod, setSelectedPeriod] = useState<string>(
    "Kiralama Süresi Seçin"
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [value, setValue] = useState([1, 3]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [submittedData, setSubmittedData] = useState<any[]>([]);

  const handleBrandSelect = (brandName: string) => {
    setSelectedBrand(brandName);
    const selectedBrandItem = brand.find((item) => brandName in item);
    if (selectedBrandItem) {
      setModels(selectedBrandItem[brandName]);
    } else {
      setModels([]);
    }
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

  const handleSubmit = () => {
    setSubmittedData([
      ...submittedData,
      {
        brand: selectedBrand,
        model: selectedModel,
        period: selectedPeriod,
        quantity,
      },
    ]);
    
    
    setSelectedBrand("Marka Seçin");
    setModels([]);
    setSelectedModel("Model Seçin");
    setSelectedPeriod("Kiralama Süresi Seçin");
    setQuantity(1);
    setValue([1, 3]);
  };

  const handleWhatsAppSend = () => {
    const phoneNumber = "+905513911163";
    const url = "https://wa.me/" + phoneNumber + "?text=" +
    "Merhaba! Seçtiğim araç hakkında bilgi almak istiyorum." + "\n" +
     "Marka: " + selectedBrand + "\n" +
    "Model: " + selectedModel + "\n" +
    "Kiralama Süresi: " + selectedPeriod + "\n" +
    "";

    window.open(url, "_blank")?.focus()
};
  
  

  return (
    <>
      <div className="bg-secondary py-5 mb-5">
        <Container className="px-5 d-flex flex-column gap-4 text-white">
          <h1 className="text-center">HEMEN TEKLİF ALIN</h1>
          <p className="text-center px-5">
            Alttaki formu doldurarak, ihtiyaçlarınıza uygun araç kiralama
            teklifinizi hemen alın. Eftal Rent a Car olarak, size en iyi hizmeti
            sunabilmek için hızlı ve kolay bir teklif süreci sağlıyoruz. Formu
            tamamladıktan sonra, uzman ekibimiz size en kısa sürede geri dönüş
            yaparak detayları iletecektir. Yolda güvende olmak için hemen teklif
            alın!
          </p>
        </Container>
      </div>

      <div className="form-div mb-5">
        <Container className="d-flex justify-content-center">
          <form action="https://formsubmit.co/sinan.hasil61@gmail.com">
            <div className="d-flex justify-content-between">
              {/* MARKA */}
              <div className="d-flex flex-column gap-1 align-items-center">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline-primary"
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
              </div>

              {/* MODEL */}
              <div className="d-flex flex-column gap-1 align-items-center">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline-primary"
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
              </div>

              {/* Kiralama Süresi Seçimi */}
              <div className="d-flex flex-column gap-1 align-items-center">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline-primary"
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
              </div>             

              {/* Araç adedi seçimi */}
              <div className="d-flex flex-column gap-1 align-items-center">
                <div>
                  <ToggleButtonGroup
                    type="checkbox"
                    value={value}
                    onChange={handleChange}
                  >
                    <ToggleButton id="tbg-btn-1" onClick={decrement} value={1}>
                      -
                    </ToggleButton>
                    <ToggleButton id="tbg-btn-2" value={2}>
                      <span>{quantity}</span>
                    </ToggleButton>
                    <ToggleButton id="tbg-btn-3" onClick={increment} value={3}>
                      +
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>
              </div>
            </div>

            <div className="person mt-5">
              <h4 className="text-center">Kişisel Bilgiler</h4>
              <Container className="mt-4">
                <Row className="gap-4">
                  <Col md={5}>
                    <h6>Müşteri Tipi</h6>
                    <div className="d-flex gap-3">
                      <div>
                        <input type="checkbox" id="" /> <span>Bireysel</span>
                      </div>
                      <div>
                        <input type="checkbox" id="" />{" "}
                        <span>Şahıs Şirketi</span>
                      </div>
                      <div>
                        <input type="checkbox" id="" />{" "}
                        <span>Ticari Şirket</span>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <label htmlFor="name">
                      <small>Adınız</small>
                    </label>
                    <Form.Control required type="text" id="name" />
                  </Col>
                  <Col>
                    <label htmlFor="lastName">
                      <small>Soyadınız</small>
                    </label>
                    <Form.Control required id="lastName" type="text" />
                  </Col>
                </Row>

                <Row className="mt-4 gap-4">
                  <Col md={5}>
                    <label htmlFor="tc">
                      <small>TC Kimlik No</small>
                    </label>
                    <Form.Control required id="tc" type="number" />
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
                          Başiskele
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          {ilceler.map((ilce, index) => {
                            return (
                              <>
                                <Dropdown.Item key={index}>
                                  {ilce}
                                </Dropdown.Item>
                              </>
                            );
                          })}
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-4 gap-4">
                  <Col>
                    <label htmlFor="tel">
                      <small>Tel No</small>
                    </label>
                    <Form.Control required id="tel" type="number" />
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
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      as="textarea"
                      placeholder="Adresiniz"
                      style={{ height: "100px" }}
                    />
                  </Col>
                </Row>
              </Container>
            </div>
            <Button onClick={handleWhatsAppSend}>Talep Et</Button>
          </form>
        </Container>
      </div>
    </>
  );
};

export default Contact;
