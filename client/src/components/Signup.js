import React from 'react'
import '../App.css'

export const Signup = () => {
    return (
        <>
            <section className="gradient-custom">
                <div className="container py-4  h-100 ">
                    <div className="row d-flex justify-content-center align-item-center">
                        <div className="col-sm-12 col-md-10 col-lg-5">
                            <div className="card bg-dark text-white" style={{ bordeRadius: '5 rem' }}>
                                <div className="card-body p-4 text-center">
                                    <div className="mb-5">
                                        <form action="">
                                            <div className="form">
                                                <div className="form-body">
                                                    <div className="username">
                                                        <div className="card-body p-2 text-center">
                                                            <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                                                            <p className="text-white-50 mb-5">Don't have Account? Create one  </p>
                                                        </div>


                                                        {/* <label className="form__label" for="firstName">  Name </label>     */}
                                                        <input className="form-control Form-control-lg mb-2" type="text" id="firstName" placeholder="Name" />
                                                    </div>

                                                    <div className="email">
                                                        {/* <label className="form__label" for="email">Phone </label> */}
                                                        <input type="email" className="form-control Form-control-lg mb-2" id="email" placeholder="Email" />
                                                    </div>
                                                    <div className="confirm-password">
                                                        {/* <label className="form__label" for="confirmPassword">Work </label> */}
                                                        <input className="form-control Form-control-lg mb-2" type="password" id="confirmPassword" placeholder="Work" />
                                                    </div>
                                                    <div className="password">
                                                        {/* <label className="form__label" for="password">Password </label> */}
                                                        <input className="form-control Form-control-lg mb-2" type="password" id="password" placeholder="Password" />
                                                    </div>
                                                    <div className="confirm-password">
                                                        {/* <label className="form__label" for="confirmPassword">Confirm Password </label> */}
                                                        <input className="form-control Form-control-lg mb-2" type="password" id="confirmPassword" placeholder="Confirm Password" />
                                                    </div>
                                                </div>
                                                <div class="footer">
                                                    <a href="/"><button className="btn btn-outline-success btn-lg px-5">Sign Up</button></a>
                                                </div>
                                                 
                                            </div>
                                        </form>
                                    </div>
                                    <a href="/login" className="mb-0 hey">I am already register</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Signup;
