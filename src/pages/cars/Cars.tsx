import { Card, CardGroup, Container } from "react-bootstrap";
import clio from "./cars-img/clio.png";
import megane from "./cars-img/renomeganesedan.png";
import egea from "./cars-img/egea sedan.png";
import egeaHatc from "./cars-img/egea hetchback.png";
import taliant from "./cars-img/taliant.png";
import corolla from "./cars-img/corolla.png";
import talisman from "./cars-img/talisman.png";
import i20 from "./cars-img/i20-beyaz.webp";
import jugger from "./cars-img/dacia-jogger.png";
import doblo from "./cars-img/doblo.png";
import dobloPan from "./cars-img/doblo-panelvan.png";
import courier from "../../images/courier.webp";
import transit from "./cars-img/transit.png";
import jumper from "./cars-img/jumper.png";
import boxer from "./cars-img/boxer.png";
import duster from "./cars-img/Dacia_Duster.webp";
import dmax from "./cars-img/dmax.png";
import l200 from "./cars-img/l200.png";
import hilux from "./cars-img/hilux.png";
import ranger from "./cars-img/ranger.png";
import supurge from "./cars-img/su-tankeri.png";
import suTankeri from "./cars-img/su-tankeri.png";
import kuka from "./cars-img/kuka.png";
import temsa from "./cars-img/temsa atlas.jpg";
import vinc from "./cars-img/sepetli-vinc_1-4000x9000.webp";
import vito from "./cars-img/vito.png";
import crafter from "./cars-img/crafter.png";
import "./cars.css";
import { handleWhatappSendIcon } from "../mainpage/Mainpage";
import { FaWhatsapp } from "react-icons/fa6";

const Cars = () => {
  return (
    <>
    <div className="wp" onClick={handleWhatappSendIcon}>
        <FaWhatsapp className="wp-icon" />
      </div>
      
      <Container>
        <nav className="mt-5">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Binek Araç
            </button>
            <button
              className="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Hafif Ticari
            </button>
            <button
              className="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Ticari
            </button>
            <button
              className="nav-link"
              id="nav-arazi-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-arazi"
              type="button"
              role="tab"
              aria-controls="nav-arazi"
              aria-selected="false"
            >
              Arazi
            </button>
            <button
              className="nav-link"
              id="nav-is-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-is"
              type="button"
              role="tab"
              aria-controls="nav-is"
              aria-selected="false"
            >
              İş Makinası
            </button>
            <button
              className="nav-link"
              id="nav-vip-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-vip"
              type="button"
              role="tab"
              aria-controls="nav-vip"
              aria-selected="false"
            >
              VİP
            </button>
          </div>
        </nav>
        <div className="tab-content py-5" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabIndex={0}
          >
            {/* BİNEK PART-1 */}
            <div>
              <Container className="mt-5">
                <h2 className="mb-3">Binek Araç</h2>
                <CardGroup>
                  <Card>
                    <div className="d-flex justify-content-center">
                      <img className="car-img" src={clio} />
                    </div>
                    <Card.Body>
                      <Card.Title>Renault Clio</Card.Title>
                      <Card.Text>
                        Reno Clio, kompakt yapısı, yakıt tasarrufu ve şehir içi
                        sürüşe uygunluğu ile pratik ve ekonomik bir araçtır..
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <div className="d-flex justify-content-center">
                      <img className="car-img" src={megane} />
                    </div>
                    <Card.Body>
                      <Card.Title>Renault Megane</Card.Title>
                      <Card.Text>
                        Reno Megane, şık tasarımı ve güçlü performansıyla hem
                        konforlu hem de güvenli bir sürüş sunar.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <div className="d-flex justify-content-center">
                      <img className="car-img" src={egea} />
                    </div>
                    <Card.Body>
                      <Card.Title>Fiat Egea</Card.Title>
                      <Card.Text>
                        Fiat Egea, geniş iç mekanı, düşük yakıt tüketimi ve
                        uygun fiyatıyla aileler için ideal bir sedan modelidir.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Container>

              {/* PART-2 */}

              <Container className="mt-5">
                <h2 className="mb-3">Binek Araç</h2>
                <CardGroup>
                  <Card>
                    <div className="d-flex justify-content-center">
                      <img className="car-img" src={egeaHatc} />
                    </div>
                    <Card.Body>
                      <Card.Title>Fiat Egea Hatchback</Card.Title>
                      <Card.Text>
                        Fiat Egea, geniş iç mekanı, düşük yakıt tüketimi ve
                        uygun fiyatıyla aileler için ideal bir sedan modelidir.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <div className="d-flex justify-content-center">
                      <img className="car-img" src={talisman} />
                    </div>
                    <Card.Body>
                      <Card.Title>Renault Talisman</Card.Title>
                      <Card.Text>
                        Reno Talisman, lüks tasarımı, güçlü motoru ve gelişmiş
                        teknolojik özellikleriyle prestijli ve konforlu bir
                        sürüş sunar.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <div className="d-flex justify-content-center">
                      <img className="car-img" src={taliant} />
                    </div>
                    <Card.Body>
                      <Card.Title>Renault Taliant</Card.Title>
                      <Card.Text>
                        Reno Taliant, ekonomik yakıt tüketimi, geniş bagaj hacmi
                        ve modern tasarımıyla şehir içi kullanım için ideal bir
                        sedan modelidir.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Container>

              {/* PART-3 */}

              <Container className="mt-5">
                <h2 className="mb-3">Binek Araç</h2>
                <CardGroup>
                  <Card>
                    <div className="d-flex justify-content-center">
                      <img className="car-img" src={corolla} />
                    </div>
                    <Card.Body>
                      <Card.Title>Toyota Corolla</Card.Title>
                      <Card.Text>
                        Toyota Corolla, güvenilirliği, yakıt verimliliği ve
                        konforlu sürüşüyle dünya genelinde en çok tercih edilen
                        sedan modellerinden biridir.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <div className="d-flex justify-content-center">
                      <img className="car-img" src={i20} />
                    </div>
                    <Card.Body>
                      <Card.Title>CHyundai İ20</Card.Title>
                      <Card.Text>
                        Hyundai i20, kompakt boyutları, modern tasarımı ve yakıt
                        verimliliğiyle şehir içi sürüşler için ideal bir
                        hatchback modelidir.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <div className="d-flex justify-content-center">
                      <img className="car-img" src={jugger} />
                    </div>
                    <Card.Body>
                      <Card.Title>Dacia Jogger</Card.Title>
                      <Card.Text>
                        Dacia Jogger, geniş iç mekanı, çok yönlü kullanım
                        alanları ve uygun fiyatıyla aileler ve macera tutkunları
                        için ideal bir SUV modelidir.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Container>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
            tabIndex={0}
          >
            {/* HAFİF TİCARİ PART-1 */}
            <div>
              <Container className="mt-5">
                <h2>Hafif Ticari</h2>
                <CardGroup>
                  <Card>
                    <div className="d-flex justify-content-center">
                      <img className="car-img" src={doblo} />
                    </div>
                    <Card.Body>
                      <Card.Title>Fiat Doblo</Card.Title>
                      <Card.Text>
                        Fiat Doblo, geniş iç hacmi, yüksek taşıma kapasitesi ve
                        pratik kullanımıyla hem ticari hem de aile kullanımına
                        uygun bir van modelidir.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className="py-4">
                    <div className="d-flex justify-content-center">
                      <img
                        className="car-img"
                        style={{ height: "120px" }}
                        src={dobloPan}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>Fiat Doblo Panelvan</Card.Title>
                      <Card.Text>
                        Fiat Doblo Panelvan, geniş yük alanı, dayanıklı yapısı
                        ve pratik tasarımıyla iş amaçlı kullanımlar için ideal
                        bir ticari araçtır.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className="py-4">
                    <div className="d-flex justify-content-center">
                      <img
                        className="car-img"
                        style={{ height: "120px" }}
                        src={courier}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>Ford Courier</Card.Title>
                      <Card.Text>
                        Ford Courier, kompakt boyutları, pratik yük alanı ve
                        verimli yakıt tüketimiyle şehir içi ve hafif ticari
                        kullanımlar için ideal bir van modelidir.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Container>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
            tabIndex={0}
          >
            {/* TİCARİ PART-1 */}
            <div>
              <Container className="mt-5">
                <h2>Ticari</h2>
                <CardGroup>
                  <Card>
                    <div className="d-flex justify-content-center">
                      <img
                        className="car-img"
                        style={{ height: "150px" }}
                        src={transit}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>Ford Transit Panelvan</Card.Title>
                      <Card.Text>
                        Ford Transit Panelvan, geniş yük kapasitesi, sağlam
                        yapısı ve esnek iç tasarımıyla ağır iş yükleri ve ticari
                        kullanımlar için mükemmel bir araçtır.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <div className="d-flex justify-content-center">
                      <img className="car-img" src={jumper} />
                    </div>
                    <Card.Body>
                      <Card.Title>Citroen Jumper</Card.Title>
                      <Card.Text>
                        Citroën Jumper, geniş iç hacmi, güçlü motor seçenekleri
                        ve esnek yük alanıyla ticari kullanım için ideal bir
                        panelvan modelidir.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <div className="d-flex justify-content-center">
                      <img className="car-img" src={boxer} />
                    </div>
                    <Card.Body>
                      <Card.Title>Peugeot Boxer</Card.Title>
                      <Card.Text>
                        Peugeot Boxer, geniş yük alanı, dayanıklı yapısı ve
                        yüksek taşıma kapasitesiyle ticari kullanım için
                        mükemmel bir panelvan modelidir.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Container>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-arazi"
            role="tabpanel"
            aria-labelledby="nav-arazi-tab"
            tabIndex={0}
          >
            {/* ARAZİ PART-1 */}
            <div>
              <Container className="mt-5">
                <h2>Arazi</h2>
                <CardGroup>
                  <Card>
                    <div className="d-flex justify-content-center">
                      <img
                        src={duster}
                        style={{ height: "150px", width: "180px" }}
                        className="car-img"
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>Dacia Duster</Card.Title>
                      <Card.Text>
                        Dacia Duster, sağlam yapısı, yüksek yerden yüksekliği ve
                        uygun fiyatıyla off-road ve şehir içi kullanımlar için
                        ideal bir SUV modelidir.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <div className="d-flex justify-content-center">
                      <img src={dmax} className="car-img" />
                    </div>
                    <Card.Body>
                      <Card.Title>Isuzu D-MAX 4X4</Card.Title>
                      <Card.Text>
                        Isuzu D-MAX, güçlü motoru, dayanıklı yapısı ve geniş yük
                        alanıyla zorlu arazi koşullarında ve ağır iş yüklerinde
                        performans gösteren bir pick-up modelidir.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <div className="d-flex justify-content-center">
                      <img src={dmax} className="car-img" />
                    </div>
                    <Card.Body>
                      <Card.Title>Isuzu D-MAX 4X2</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This card has
                        even longer content than the first to show that equal
                        height action.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Container>

              {/* PART-2 */}

              <Container className="mt-5">
                <h2>Arazi</h2>
                <CardGroup>
                  <Card>
                    <div className="d-flex justify-content-center">
                      <img src={l200} className="car-img" />
                    </div>
                    <Card.Body>
                      <Card.Title>Mitsubishi L-200</Card.Title>
                      <Card.Text>
                        Mitsubishi L-200, güçlü performansı, dayanıklı yapısı ve
                        geniş yük kapasitesiyle zorlu arazi koşullarında ve
                        ticari kullanımlar için ideal bir pick-up modelidir.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <div className="d-flex justify-content-center">
                      <img src={hilux} className="car-img" />
                    </div>
                    <Card.Body>
                      <Card.Title>Toyota Hilux</Card.Title>
                      <Card.Text>
                        Toyota Hilux, sağlam yapısı, güçlü motor seçenekleri ve
                        mükemmel off-road kabiliyetiyle zorlu koşullarda ve
                        ticari kullanımlar için ideal bir pick-up modelidir.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <div className="d-flex justify-content-center">
                      <img src={ranger} className="car-img" />
                    </div>
                    <Card.Body>
                      <Card.Title>Ford Ranger</Card.Title>
                      <Card.Text>
                        Ford Ranger, güçlü motor seçenekleri, dayanıklı yapısı
                        ve geniş yük alanıyla zorlu arazi koşullarında ve ticari
                        kullanımlar için mükemmel bir pick-up modelidir.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Container>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-is"
            role="tabpanel"
            aria-labelledby="nav-is-tab"
            tabIndex={0}
          >
            {/* İŞ MAKİNASI PART-1 */}
            <div>
              <Container className="mt-5">
                <h2>İş Makinası</h2>
                <CardGroup>
                  <Card>
                    <div className="d-flex justify-content-center">
                      <img src={suTankeri} style={{ width: "150px" }} />
                    </div>
                    <Card.Body>
                      <Card.Title>Su Tankeri</Card.Title>
                      <Card.Text>
                        Su tankeri, büyük miktarda su taşıma ve dağıtımı için
                        kullanılan bir araçtır.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <div className="d-flex justify-content-center">
                      <img
                        src={kuka}
                        style={{ width: "170px", height: "110px" }}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>Kanal Açma Aracı</Card.Title>
                      <Card.Text>
                        Kombine kuka kanal açma aracı, su basıncıyla kanalları
                        açan ve vakumla atıkları toplayan bir temizlik aracıdır.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <div className="d-flex justify-content-center">
                      <img src={supurge} style={{ width: "150px" }} />
                    </div>
                    <Card.Body>
                      <Card.Title>Süpürge Aracı</Card.Title>
                      <Card.Text>
                        Süpürge aracı, caddeleri ve otopark gibi geniş alanları
                        temizlemek için kullanılan, pratik ve çevre dostu bir
                        temizlik aracıdır.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Container>

              <Container className="mt-5">
                <h2>İş Makinası</h2>
                <CardGroup>
                  <Card>
                    <div className="d-flex justify-content-center">
                      <img
                        src={temsa}
                        style={{ width: "170px", height: "150px" }}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>Kanal Açma Aracı</Card.Title>
                      <Card.Text>
                        Kombine kuka kanal açma aracı, su basıncıyla kanalları
                        açan ve vakumla atıkları toplayan bir temizlik aracıdır.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <div className="d-flex justify-content-center">
                      <img src={vinc} style={{ width: "200px" }} />
                    </div>
                    <Card.Body>
                      <Card.Title>Süpürge Aracı</Card.Title>
                      <Card.Text>
                        Süpürge aracı, caddeleri ve otopark gibi geniş alanları
                        temizlemek için kullanılan, pratik ve çevre dostu bir
                        temizlik aracıdır.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Container>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-vip"
          role="tabpanel"
          aria-labelledby="nav-vip-tab"
          tabIndex={0}
        >
          {/* VİP ARAÇ PART-1 */}
          <div className="mt-5">
            <Container>
              <h2>VİP Araç</h2>
              <CardGroup>
                <Card className="py-3">
                  <div className="d-flex justify-content-center">
                    <img
                      src={vito}
                      style={{ width: "150px", height: "80px" }}
                      alt=""
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>Mercedes Vito</Card.Title>
                    <Card.Text>
                      Mercedes-Benz Vito, geniş iç hacmi ve konforlu yapısıyla
                      hem ticari hem de yolcu taşımacılığı için ideal bir
                      minibüs modelidir.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="py-3">
                  <div className="d-flex justify-content-center">
                    <img src={crafter} style={{ width: "150px" }} alt="" />
                  </div>
                  <Card.Body>
                    <Card.Title>Volkswagen Crafter</Card.Title>
                    <Card.Text>
                      Volkswagen Crafter, geniş yük kapasitesi, dayanıklı yapısı
                      ve gelişmiş teknolojik özellikleriyle ticari taşımacılık
                      için ideal bir panelvan modelidir.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Container>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cars;
