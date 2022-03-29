import styles from "../styles/Equipo.module.css";
import Image from "next/image";
import Miembro from "./Miembro";

const Equipo = () => {
  return (
    <section className="" id={styles.team}>
      <div className="container mt-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-light fw-bold fs-1 h1">Nuestro equipo</h2>
            <p className="text-light h2">
              Equipo de Sistema de Empoderamiento Colectivo - Emco
            </p>
          </div>
        </div>
        <div className="container p-1">
          <div className="row p-5">
            <Miembro
              src="/images/team/Rodri.jpeg"
              className="border p-2"
              h4="Rodrigo Castro"
              tarea="Director General"
            />

            <Miembro
              src="/images/team/Cesar.jpeg"
              className="border"
              h4="Cesar Herrera"
              tarea="Asesor Económico y Financiero"
            />

            <Miembro
              src="/images/team/Jimena-Mascaro.jpeg"
              className="border"
              h4="Jimena Mascaró"
              tarea="Resp. de la comunicación general"
            />
            <Miembro
              src="/images/team/Luis-Zamudio.jpeg"
              className="border"
              h4="Luis Zamudio"
              tarea="Desarrollo de propuestas de valor"
            />
            <Miembro
              src="/images/team/Remberto-Gonzalez.jpeg"
              className="border"
              h4="Remberto Gonzalez"
              tarea="Desarrollador Backend Senior"
            />
            <Miembro
              src="/images/team/Leandro-Cief.jpeg"
              className="border p-2"
              h4="Leandro Cief"
              tarea="Desarrollador Backend"
            />
            <Miembro
              src="/images/team/Fiorella-Bissi.jpeg"
              className="border p-2"
              h4="Fiorella Bissi"
              tarea="Desarrolladora Frontend"
            />
            <Miembro
              src="/images/team/Franco-Raffaele.jpeg"
              className="border"
              h4="Franco Raffaele"
              tarea="Diseñador multimedia especializado en diseño de interfaces"
            />
            <Miembro
              src="/images/team/Tatiana-Castro.jpeg"
              className="p-2"
              h4="Tatiana Castro"
              tarea="Responsable de la cadena de suministro y mejora de la GA en procesos productivos"
            />

            <Miembro
              src="/images/team/Lorena-Zuluaga.jpeg"
              className="border"
              h4="Lorena Zuluaga"
              tarea="Redactora de la revista Emconautas"
            />
            <Miembro
              src="/images/team/Emir-Castro.jpeg"
              className="border"
              h4="Emir Castro"
              tarea="Redactor de la revista Emconautas"
            />
          </div>
        </div>
        {/* <div className="col-lg-3 col-md-6">
            <div className={styles.member}>
              <div class="member-img">
                <Image
                  src="/images/team/Rodri.jpeg"
                  height={280}
                  width={240}
                  alt="mi imagen de perfil"
                ></Image>
              </div>
              <div className={styles.memberInfo}>
                <h4>Rodrigo Castro</h4>
                <span>Director General</span>
                <div className={styles.socialLinks}>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-pinterest-p"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

        {/* <div class="col-lg-3 col-md-6">
            <div className={styles.member}>
              <div class="member-img">
                <Image
                  src="/images/team/Cesar.jpeg"
                  height={280}
                  width={220}
                  alt="mi imagen de perfil"
                ></Image>

              </div>
              <div className={styles.memberInfo}>
                <h4>Bobby Robins</h4>
                <span>Web Developer</span>
                <div className={styles.socialLinks}>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-pinterest-p"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

        {/* <div class="col-lg-3 col-md-6">
            <div className={styles.member}>
              <div class="member-img">
                <Image
                  src="/images/team/Jimena-Mascaro.jpeg"
                  height={280}
                  width={280}
                  alt="mi imagen de perfil"
                ></Image>

                
              </div>
              <div className={styles.memberInfo}>
                <h4>Gena lee</h4>
                <span>SEO Expert</span>
                <div className={styles.socialLinks}>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-pinterest-p"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

        {/* <div class="col-lg-3 col-md-6">
            <div className={styles.member}>
              <div class="member-img">
                <Image
                  src="/images/team/Luis-Zamudio.jpeg"
                  height={290}
                  width={300}
                  alt="mi imagen de perfil"
                ></Image>

                
              </div>
              <div className={styles.memberInfo}>
                <h4>Noel Flantier</h4>
                <span>ISO Developer</span>
                <div className={styles.socialLinks}>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-pinterest-p"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
      </div>
    </section>
  );
};

export default Equipo;
