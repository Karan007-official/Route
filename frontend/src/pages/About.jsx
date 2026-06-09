function About() {
  return (
    <div className="container mt-5">

      <div className="card shadow-lg border-0">

        <div className="card-body p-5">

          <h1 className="mb-4">About Project</h1>

          <p className="fs-5">
            This project demonstrates React Router DOM
            navigation with Bootstrap styling.
          </p>

          <div className="alert alert-success mt-4">
            Assignment Features Completed Successfully
          </div>

          <ul className="list-group mt-4">
            <li className="list-group-item">
              Home Page
            </li>

            <li className="list-group-item">
              About Page
            </li>

            <li className="list-group-item">
              Contact Page
            </li>

            <li className="list-group-item">
              Dashboard Page
            </li>

            <li className="list-group-item">
              Protected Route
            </li>
          </ul>

        </div>

      </div>

    </div>
  );
}

export default About;