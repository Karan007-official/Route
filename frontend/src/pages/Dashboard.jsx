function Dashboard() {
  return (
    <div className="container mt-5">

      <h1 className="mb-4">
        Dashboard
      </h1>

      <div className="row">

        <div className="col-md-4 mb-4">

          <div className="card bg-primary text-white shadow border-0">

            <div className="card-body text-center">

              <h2>150</h2>

              <p>Total Users</p>

            </div>

          </div>

        </div>

        <div className="col-md-4 mb-4">

          <div className="card bg-success text-white shadow border-0">

            <div className="card-body text-center">

              <h2>75</h2>

              <p>Projects</p>

            </div>

          </div>

        </div>

        <div className="col-md-4 mb-4">

          <div className="card bg-warning text-dark shadow border-0">

            <div className="card-body text-center">

              <h2>230</h2>

              <p>Tasks</p>

            </div>

          </div>

        </div>

      </div>

      <div className="card shadow-lg border-0">

        <div className="card-body">

          <h3>Recent Activity</h3>

          <table className="table table-striped mt-3">

            <thead>
              <tr>
                <th>ID</th>
                <th>Task</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Create React App</td>
                <td>Completed</td>
              </tr>

              <tr>
                <td>2</td>
                <td>Setup Router</td>
                <td>Completed</td>
              </tr>

              <tr>
                <td>3</td>
                <td>Build Dashboard</td>
                <td>Completed</td>
              </tr>
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;