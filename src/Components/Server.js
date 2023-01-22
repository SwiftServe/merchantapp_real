import React from "react";

function Server () {
    return (
        <>
        <div className="col-md-4 text-center my-3 margin">
            <h3>Server sign-in:</h3>
            <form className = "my-3" id="login-form">
                <div className = "input-group col-md-4 my-4">
                     <div className="input-group flex-nowrap">
                      <span className="input-group-text" id="addon-wrapping">☺️</span>
                      <input type="text" className="form-control" placeholder="Server ID" aria-label="Server ID" aria-describedby="addon-wrapping" />
                    </div>
                </div>

               <div>
                    <h6 className="my-2 mx-2 forgotPass">Forgot ID?</h6>
                </div>
                <div className="col-12">
                    <button type="button" class="btn btn-primary my-3 mx-3">Enter</button>
                    <button type="button" class="btn btn-secondary my-3">Register</button>
                </div>
            </form>
        </div>
    </>
)

}

export default Server