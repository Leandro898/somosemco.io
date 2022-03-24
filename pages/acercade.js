import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Botonera from "../components/Botonera";
import Tabs from "../components/Tabs";
import Acordion from "../components/Acordion";
import Grid from "../components/IconGrid";
import NavText from "../components/NavText";
import FooterP from "../components/Footer";
import { motion } from "framer-motion";

const Acercade = () => {
  return (
    <Container>
      <div class="container-fluid fondo" id="vision">
        <div class="row">
          <div class="col-3">
            <Botonera className="bg-dark" />
          </div>
          <div class="row col-9">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.1,
                  },
                },
              }}
            >
              <h3
                className="text-center h1 display-3 text-light fw-bolder"
                id="m"
              >
                VISIÓN
              </h3>
            </motion.div>

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
              <div className="row mt-5">
                <img
                  src="/images/mujer-sentada.svg"
                  width="300"
                  height="250"
                  className="col-4 justify-content-start"
                  style={{marginTop:'100px'}}
                />
                <Acordion />
                { /* El siguiente div es un espaciador solamente */}
                <div style={{height:'200px'}}></div>
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
              { /* El siguiente div es un espaciador solamente */}
                <div style={{height:'200px'}}></div>
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
