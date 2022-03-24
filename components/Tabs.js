import Img from "../components/Imagen.js";

const Tabs = () => {
  return (
    <div className="mt-4">
      <Img />
      <div className="container d-flex justify-content-center">
        <div className="tab-content " id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <p className="text-light fs-5 text-center mx-5">
              Somos la comunidad que entiende y socializa la herramienta de
              empoderamiento que nace de la fusión de la economía del
              conocimiento, la economía digital y<br /> la economía solidaria.
            </p>
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <p className="text-light fs-5 text-center mx-5">
              Estamos convencidos de la fuerza empoderadora de la tecnología
              blockchain y del lenguaje criptográfico como una herramienta de
              fácil acceso con beneficios para el empoderamiento colectivo de
              los usuarios y su capitalización.
            </p>
          </div>
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <p className="text-light fs-5 text-center mx-5">
              En la combinación de las herramientas digitales y la participación
              social podremos encontrar beneficios que nos permitirán contar con
              otras opciones para contrarrestar los efectos negativos económicos
              y sociales como los que hoy se manifiestan a nivel local y
              regional.
            </p>
          </div>

          {/* BOTONES PARA SELECCIONAR TEXTO */}

          <div class="container d-flex justify-content-center">
            <ul class="nav nav-pills m-5" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  <p className="text-light m-0 fw-bold">COMUNIDAD</p>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  <p className="text-light m-0 fw-bold">CAPITALIZACIÓN</p>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  <p className="text-light m-0 fw-bold" id="c">
                    HERRAMIENTAS
                  </p>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
