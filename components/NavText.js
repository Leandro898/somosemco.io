const NavText = () => {
  return (
    <div>
      <p>
        <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Link with href
        </a>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Button with data-bs-target
        </button>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          Some placeholder content for the collapse component. This panel is
          hidden by <a
            href=""
            data-bs-toggle="collapse"
            data-bs-target="#z"
            aria-expanded="false"
            aria-controls="collapseExample"
          >default</a> but revealed when the user activates the relevant
          <a
            href=""
            data-bs-toggle="collapse"
            data-bs-target="#x"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            trigger
          </a>
          .
        </div>
        <div class="card card-body" id="x">
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
        </div>
        <div class="card card-body" id="y">
            3 er texto
        </div>
        <div class="card card-body" id="z">
            4 to texto
        </div>
      </div>
    </div>
  );
};

export default NavText;
