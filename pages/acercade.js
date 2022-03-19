import Container from "../components/Container";
import Navigation from "../components/navigation";
import Botonera from "../components/Botonera";

import Tabs from "../components/Tabs";
import Acordion from "../components/Acordion";
import Grid from "../components/IconGrid";
import NavText from "../components/NavText";
// import Styles from '../styles/acercade.module.css';


const Acercade = () => {
  return (
    <Container>
      <div class="container-fluid fondo" id="vision">
        <div class="row">
          <div class="col-3">
            <Botonera />
          </div>
          <div class="row col-9">
            <h3 className="text-center h1 display-3 text-light fw-bolder" id="m">VISIÓN</h3>
            {/* <p className="text-light text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
              magnam reiciendis, quod exercitationem commodi dolorum at quidem
              repellat laudantium fugit, molestias autem! Odit ex vitae eligendi
              similique illum! Perferendis, soluta?
            </p> */}
            <Tabs/>
          </div>
        </div>
      </div>
      <section class="" id="mision">
        <div className="container-fluid mision">
          <div class="row">
            <div class="col-3">
              <Botonera />
            </div>
            <div class="col-9 ">
              <h3 className="text-center">MISIÓN</h3>
              <Acordion/>
            </div>
          </div>
        </div>
      </section>
      <section class="" id="valores">
        <div className="container-fluid fondo">
          <div class="row">
            <div class="col-3">
              <Botonera />
            </div>
            <div class="col-9">
              <h3 className="text-center">VALORES</h3>
              <p class="text-center">texto</p>
              <Grid/>
            </div>
          </div>
        </div>
      </section>
      <section class="" id="filosofia">
        <div className="container-fluid mision">
          <div class="row">
            <div class="col-3">
              <Botonera />
            </div>
            <div class="col-9 ">
              <h3 className="text-center">FILOSOFÍA</h3>
              <NavText/>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Acercade;
