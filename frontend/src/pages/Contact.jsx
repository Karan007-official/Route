function Contact() {
  return (
    <div className="container mt-5">

      <div className="card shadow-lg border-0">

        <div className="card-body p-5">

          <h1 className="mb-4">
            Contact Us
          </h1>

          <div className="mb-3">

            <label className="form-label">
              Name
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Message
            </label>

            <textarea
              rows="5"
              className="form-control"
              placeholder="Write your message"
            ></textarea>

          </div>

          <button className="btn btn-primary">
            Send Message
          </button>

        </div>

      </div>

    </div>
  );
}

export default Contact;