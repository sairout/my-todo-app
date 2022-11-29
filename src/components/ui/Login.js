import { Link } from "react-router-dom";

function Login(){
    return (
        <>
        <br /><br />
        <div className="cotainer">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <form action="" method="">
                                <div className="form-group row">
                                    <label htmlFor="email_address" className="col-md-4 col-form-label text-md-right">Email/Username</label>
                                    <div className="col-md-6">
                                        <input type="text" id="email_address" className="form-control" name="email-address" required autoFocus/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                    <div className="col-md-6">
                                        <input type="password" id="password" className="form-control" name="password" required/>
                                    </div>
                                </div>

                                <div className="col-md-6 offset-md-3">
                                    <button type="submit" className="btn btn-primary">
                                    Login
                                    </button>
                                </div>
                                <Link to="/signup" className="btn btn-link">
                                    New User? Sign Up.
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;