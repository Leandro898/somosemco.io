const Acordion = () => {
  return (
    <div className="mt-5 col-5 ms-auto me-md-5">
      <div className="accordion " id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              COMUNIDAD
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Crear y alfabetizar una comunidad de empoderamiento criptográfico
              colectivo.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              FORMACIÓN
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Brindar conocimiento, formación y actualización por medio de las
              instancias de creación y divulgación de contenidos creadas para
              tal fin: Academia EMCO (capacitaciones on line), y EMCO Report
              (revista sobre el mundo de la economía digital)
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              SOLUCIONES
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Brindar soluciones a esa comunidad, de tal manera que permitan
                su empoderamiento colectivo frente al contexto económico
                argentino. (Soluciones que se materializan plataformas de
                códigos abiertos que irán incorporando servicios y propuestas de
                manera gradual, comenzando por un espacio de intercambio de
                bienes y servicios)por medio de la tecnología blockchain.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              SEGURIDAD
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Crear una criptomoneda amigable y accesible atada a un valor
                -por medio de contratos inteligentes (smart contracts)- que en
                este caso será al conjunto de bienes que integran la canasta
                básica alimentos, ya que posee un valor intrínseco que evita la
                formación de burbujas financieras detrás esos bienes.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              FUTURO
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Ofrecemos como solución una plataforma que nos permitirá generar
                valor, autoempleo y así cubrir nuestras necesidades básicas sin
                descuidar potenciales inversiones para nuestro futuro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acordion;
