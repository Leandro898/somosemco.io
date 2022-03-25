const NavText = () => {
  return (
    <div className=" pt-5">
      <p className="text-light fs-5 fw-normal">
        {" "}
        La Sociedad en formación Ecodempo SRL. y su Ecosistema de Empoderamiento Colectivo nacen de la decisión de brindar <a
          className="text-info text-decoration-none"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="true"
          aria-controls="collapseExample"
        >
          SOLUCIONES
        </a> a la <a
          className="text-success text-decoration-none"
          data-bs-toggle="collapse"
          href="#collapseExampleTwo"
          role="button"
          aria-expanded="true"
          aria-controls="collapseExample"
        >
          COMUNIDAD
        </a> argentina en su <a
          className="text-danger text-decoration-none"
          data-bs-toggle="collapse"
          href="#collapseExampleThree"
          role="button"
          aria-expanded="true"
          aria-controls="collapseExample"
        >
          CONTEXTO ECONÓMICO ACTUAL
        </a> y de la firme convicción sobre las potencialidades de la tecnología blockchain como herramienta alternativa para la capitalización.
      </p>

      {/* Comienza la parte de los mensajes que se muestran cuando se hace click en una palabra */}

      <div className="collapse" id="collapseExample">
        <div className="card card-body">
        SOLUCIONES que se materializan plataformas de códigos abiertos que irán incorporando propuestas de manera gradual, comenzando por un espacio de intercambio de bienes y servicios.
        </div>
          
          .
        
        {/* <div className="card card-body" id="x">
          otro texto que tenga otro{" "}
          <a
            href=""
            data-bs-toggle="collapse"
            data-bs-target="#y"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            enlace
          </a>
        </div> */}
        {/* <div className="card card-body" id="y">
          3 er texto
        </div>
        <div className="card card-body" id="z">
          4 to texto
        </div> */}
      </div>
      <div className="collapse" id="collapseExampleTwo">
        <p className="text-light">La creación de COMUNIDADES de Intercambio Geográficas es una meta crucial en el desarrollo del Ecosistema, para la cual se crea e implementa una política activa de formación y alfabetización para  potenciales usuarios.</p>
      </div>
      <div className="collapse" id="collapseExampleThree">
        <p className="text-light">ENMARCADOS EN UN CONTEXTO MUNDIAL pandémico y haciendo una proyección de las secuelas que el mismo provocará en la escena  mundial y en la Argentina en particular; el Ecosistema de Empoderamiento Colectivo ofrece una <a
          className="text-danger text-decoration-none"
          data-bs-toggle="collapse"
          href="#collapseExampleFour"
          role="button"
          aria-expanded="true"
          aria-controls="collapseExample"
        >
          VÍA DE REACCIÓN
        </a> ante el flagelo de la inflación argentina para la capitalización alternativa de valores.</p>
      </div>
      <div className="collapse" id="collapseExampleFour">
        <p className="text-light">POR MEDIO DEL DESARROLLO DE UN SOFTWARE de alta complejidad para redes blockchain se logra la descentralización de las decisiones insertándonos en el único mercado que nos da las herramientas para hacer frente a ciertas problemáticas económicas del país existentes, que desde otros abordajes no se les encuentra solución.</p>
      </div>
    </div>
  );
};

export default NavText;
