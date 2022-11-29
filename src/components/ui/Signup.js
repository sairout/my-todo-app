import { useState } from "react";
import { Link } from "react-router-dom";

function Signup(){

    const [ currentPassword, setCurrentPassword ] = useState('');
    const [ currentConfirmPassword, setCurrentConfirmPassword ] = useState('');

    function passwordChangeHandler(event){
        setCurrentPassword(event.target.value);
    }

    function confirmPasswordChangeHandler(event){
        setCurrentConfirmPassword(event.target.value);
    }

    return (
        <>
        <br /><br />
        <div className="cotainer">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">Register</div>
                        <div className="card-body">
                            <form action="" method="">

                                <div className="form-group row">
                                    <label htmlFor="username" className="col-md-4 col-form-label text-md-right">Username</label>
                                    <div className="col-md-6">
                                        <input type="text" id="username" className="form-control" name="username" required autoFocus/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="email_address" className="col-md-4 col-form-label text-md-right">Email</label>
                                    <div className="col-md-6">
                                        <input type="text" id="email_address" className="form-control" name="email-address" required autoFocus/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                    <div className="col-md-6">
                                        <input type="password" id="password" className="form-control" name="password" required onChange={passwordChangeHandler}/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="confirm_password" className="col-md-4 col-form-label text-md-right"> Confirm Password</label>
                                    <div className="col-md-6">
                                        <input type="password" id="confirm_password" className="form-control" name="confirm-password" required onChange={confirmPasswordChangeHandler}/>
                                        { currentPassword !== currentConfirmPassword && <span style={{color: "red"}}>Password Mismatch</span> }
                                    </div>
                                </div>

                                <div className="col-md-6 offset-md-3">
                                    <button type="submit" className="btn btn-primary">
                                    Register
                                    </button>
                                </div>
                                <Link to="/login" className="btn btn-link">
                                    Have account? Login.
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

export default Signup;