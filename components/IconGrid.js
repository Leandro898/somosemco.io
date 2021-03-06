import { motion } from "framer-motion";

const Grid = () => {
  return (
    <div>
      <div className="container">
        <div className="row align-middle" style={{ marginTop: "80px" }}>
          <div className="col text-center">
            <img src="/images/icons/proactividad.png"  width="100px" />
            <p className=" fw-bold" style={{ fontFamily: "Montserrat", color:"#053A59" }}>PROACTIVIDAD</p>
          </div>
          <div className="col text-center">
            <img src="/images/icons/docencia.png" width="100px" />
            <p className=" fw-bold">VOLUNTAD DE DOCENCIA Y ALFABETIZACIÓN</p>
          </div>
          <div className="col text-center">
            <img src="/images/icons/empoderamiento.png" width="100px" />
            <p className=" fw-bold" style={{color:"#053A59"}}>EMPODERAMIENTO</p>
          </div>
        </div>
        <div className="" style={{ marginTop: "110px" }}>
          <div className="row align-middle">
            <div className="col text-center">
              <img src="/images/icons/descentralizacion.png" width="100px" />
              <p className=" fw-bold" style={{color:"#053A59"}}>DESCENTRALIZACIÓN</p>
            </div>
            <div className="col text-center">
              <img src="/images/icons/blockchain.png" width="100px" />
              <p className=" fw-bold" style={{color:"#053A59"}}>INCORPORACIÓN DE TECNOLOGIAS BLOCKCHAIN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
