import React from 'react'
 
export const Login = () => {
  return (
    <section className="gradient-custom">
    <div className="container py-4  h-100 ">
        <div className="row d-flex justify-content-center align-item-center">
            <div className="col-sm-12 col-md-10 col-lg-5">
                <div className="card bg-dark text-white" style={{bordeRadius: '5 rem'}}>
                    <div className="card-body p-4 text-center">
                        <div className="mb-5">
                            <h2 className="fw-bold mb-2 text-uppercase">login</h2>
                            <p className="text-white-50 mb-5">Please enter your Login and Password</p>
                            <div className="form-outline Form-white mb-4">
                                {/* <label className="form-label fw-bold" htmlFor="typeEmailX">Email:</label> */}
                                <input type="email" id="typeEmailX" placeholder='Email' className="form-control Form-control-lg"/>
                            </div>
                            <div className="form-outline  Form-white mb-4">
                                {/* <label htmlFor="password" className="form-label fw-bold">Password:</label> */}
                                <input type="password" name="password" id="password" placeholder='Password' className="form-control Form-control-lg"/>
                            </div>
                            <p className="small mb-5"><a href="!#">Forgot Password?</a></p>
                             <a href="/"><button className="btn btn-outline-success btn-lg px-5">Sign In</button></a>
                        </div>
                        <div>
                             
                            <p className="mb-0">Don't have account? <a href="/Signup" className="fw-bold">Sign Up</a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
export default Login
