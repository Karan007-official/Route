function Home() {
  return (
    <div className="container mt-5">

      <div className="bg-primary text-white p-5 rounded shadow text-center">

        <h1 className="display-4 fw-bold">
          Welcome to React Router Project
        </h1>

        <p className="lead mt-3">
          Navigation, Routing and Bootstrap UI Demo
        </p>

        <button className="btn btn-light btn-lg mt-3">
          Get Started
        </button>

      </div>

      <div className="row mt-5">

        <div className="col-md-4">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <h3>React</h3>
              <p>Build interactive user interfaces.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <h3>Router</h3>
              <p>Navigate between pages easily.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <h3>Bootstrap</h3>
              <p>Create responsive layouts quickly.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;