import "../Login/Login.scss";
const Login = (props) => {
  return (
    <div className="form-login">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="form-sign-in w-100 m-auto">
              <div className="card p-2 my-2">
                <h1 className="h3 my-3 text-center">Login</h1>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" id="" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <div className="d-grid gap-2">
                  <button type="button" className="btn btn-primary btn-block">
                    Login
                  </button>
                  <button type="button" className="btn btn-link">
                    Forgot your password?
                  </button>
                </div>
                <hr />
                <div className="text-center">
                  <button type="button" className="btn btn-success">
                    Create new account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
