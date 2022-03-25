const Carrusel = () => {
  return (
    <div className="">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="30000">
            <div class="position-absolute top-50 start-50 translate-middle">
              <a href="/empo" className="btn btn-primary">
                <p className="mb-0 p-2 h4 text-light">¿Cómo empoderarte?</p>
              </a>
            </div>
            <img
              src="/images/slider-uno.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
          <div class="position-absolute top-50 start-50 translate-middle">
              <a href="/empo" className="btn btn-primary">
                <p className="mb-0 p-2 h4 text-light">¿Cómo empoderarte?</p>
              </a>
            </div>
            <img
              src="/images/slider-dos.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          {/* <div className="carousel-item">
            <Image src="/images/tree.jpg" className="d-block w-100" alt="..." />
          </div> */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carrusel;
