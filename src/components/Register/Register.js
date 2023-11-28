import "../Register/Register.scss";
const Register = (props) => {
  return (
    <div className="form-register">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <main className="form-signin w-100 m-auto">
              <div className="card p-2 my-2">
                <h1 className="h3 my-3 text-center">Register</h1>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    id=""
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="form-control"
                    id=""
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    placeholder="Password"
                    type="password"
                    className="form-control"
                    id=""
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Re-enter password</label>
                  <input
                    placeholder="Re-enter password"
                    type="password"
                    className="form-control"
                    id=""
                  />
                </div>

                <div className="d-grid gap-2">
                  <button type="button" className="btn btn-primary btn-block">
                    Register
                  </button>
                </div>
                <hr />
                <div className="text-center">
                  <button type="button" className="btn btn-success">
                    Login now
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
