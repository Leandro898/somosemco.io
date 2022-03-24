import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-transparent" id="mynav"
      >
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand ">
              <img src="/images/logo.png" width="150px" height="50px"></img>
            </a>
          </Link>
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

                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/acercade">
                  <a className="nav-link text-light fw-bold" data-toggle="pill" >Acerca de</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/team">
                  <a className="nav-link text-light fw-bold">Team Emco</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/paper">
                  <a className="nav-link text-light fw-bold">White Paper</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/enlaces">
                  <a className="nav-link text-light fw-bold">Enlaces</a>
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
