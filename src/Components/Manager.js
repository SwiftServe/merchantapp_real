import React from "react";

function Manager () {
    return (
        <>
            <div className="col-md-4 text-center my-3 margin">
                <h3>Manager Login:</h3>
                <form className = "my-3" id="login-form">
                    <div className = "input-group col-md-4 my-4">
                         <div className="input-group flex-nowrap">
                          <span className="input-group-text" id="addon-wrapping">@</span>
                          <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" />
                        </div>
                    </div>

                    <div className = "input-group col-md-4 my-4">
                         <div className="input-group flex-nowrap">
                          <span className="input-group-text" id="addon-wrapping">🔒</span>
                          <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" />
                        </div>
                        <h6 className="my-2 mx-2 forgotPass">Forgot Password?</h6>
                    </div>
                    <div className="col-12">
                        <button type="button" class="btn btn-primary my-3 mx-3">Login</button>
                        <button type="button" class="btn btn-secondary my-3">Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Manager