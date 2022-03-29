import styles from "../styles/Equipo.module.css";
import Image from "next/image";

const Miembro = (props) => {

    const x = {
        a: props.src,
        b: props.height,
        c: props.width,
        d: props.className
    } ;
    
    console.log(x.a)

    return (
        <div class="col-lg-3 col-md-6 p-3">
            <div className={styles.member}>
              <div className="member-img">
                <Image
                  src={x.a}
                  height={300}
                  width={280}
                  alt="mi imagen de perfil"
                  className={props.className}
                ></Image>

                {/* <img
                  src="/images/team/Jimena-Mascaro.jpeg"
                  class="img-fluid"
                  alt=""
                  width={500}
                /> */}
              </div>
              <div className={styles.memberInfo}>
                <h3>{props.h4}</h3>
                <span>{props.tarea}</span>
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
          </div>
    )
}

export default Miembro