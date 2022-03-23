import Container from "../components/Container";
import Navigation from "../components/navigation";
import Botonera from "../components/Botonera";
import Tabs from "../components/Tabs";
import Acordion from "../components/Acordion";
import Grid from "../components/IconGrid";
import NavText from "../components/NavText";
import FooterP from "../components/Footer";

const Acercade = () => {
  return (
    <Container>
      <div class="container-fluid fondo" id="vision">
        <div class="row">
          <div class="col-3">
            <Botonera />
          </div>
          <div class="row col-9">
            <h3
              className="text-center h1 display-3 text-light fw-bolder"
              id="m"
            >
              VISIÓN
            </h3>
            <Tabs />
          </div>
        </div>
      </div>
      <section class="" id="mision">
        <div className="container-fluid mision claro">
          <div class="row">
            <div class="col-3">
              <Botonera />
            </div>
            <div class="col-9">
              <h3
                className="text-center h1 display-3 fw-bolder mt-5"
                id="txt-color"
              >
                MISIÓN
              </h3>
              <div className="row">
                <Acordion />
              </div>
              <div className="">
                <img src="/images/mujer-sentada.svg" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="" id="valores">
        <div className="container-fluid">
          <div class="row">
            <div class="col-3">
              <Botonera />
            </div>
            <div class="col-9">
              <h3
                className="text-center h1 display-3 fw-bolder mt-5"
                id="titulo"
              >
                VALORES
              </h3>
              <Grid />
            </div>
          </div>
        </div>
      </section>
      <section class="" id="filosofia">
        <div className="container-fluid mision fondo">
          <div class="row">
            <div class="col-3">
              <Botonera />
            </div>
            <div class="col-9 ">
              <h3 className="text-center h1 display-3 fw-bolder mt-5 text-light">
                FILOSOFÍA
              </h3>
              <NavText />
            </div>
          </div>
        </div>
      </section>
      <FooterP className="bg-dark" />
    </Container>
  );
};

export default Acercade;
