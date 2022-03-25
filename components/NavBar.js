import Link from "next/link";
//import Image from 'next/image'
import Logo from './Logo'

const Navigation = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-transparent" id="mynav"
      >
        <div className="container-fluid">
          <Logo />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarNav"
          >
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item" id="active" role="presentation">
                <Link href="/">
                  <a
                    className="nav-link text-light fw-bold fw-bold"
                    data-toggle="pill"
                    id="enlaces"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/acercade">
                  <a className="nav-link text-light fw-bold" data-toggle="pill" id="enlaces">Acerca de</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/team">
                  <a className="nav-link text-light fw-bold" id="enlaces">Team Emco</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/paper">
                  <a className="nav-link text-light fw-bold" id="enlaces">White Paper</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/enlaces">
                  <a className="nav-link text-light fw-bold" id="enlaces">Enlaces</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
