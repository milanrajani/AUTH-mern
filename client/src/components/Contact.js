import React from 'react'

export const Contact = () => {
  return (
    <>
       <section className="gradient-custom">
    <div className="container py-4  h-100 ">
        <div className="row d-flex justify-content-center align-item-center">
            <div className="col-sm-12 col-md-10 col-lg-5">
                <div className="card bg-dark text-white" style={{bordeRadius: '5 rem'}}>
                    <div className="card-body p-4 text-center">
                        <div className="mb-5">
                            <h2 className="fw-bold mb-5 text-uppercase">CONTACT</h2>
                           
                            <div className="form-outline Form-white mb-4">
                                {/* <label className="form-label fw-bold" htmlFor="typeEmailX">Email:</label> */}
                                <input type="Name" id="typeEmailX" placeholder='Name' className="form-control Form-control-lg"/>
                            </div>
                            <div className="form-outline Form-white mb-4">
                                {/* <label className="form-label fw-bold" htmlFor="typeEmailX">Email:</label> */}
                                <input type="email" id="typeEmailX" placeholder='Email' className="form-control Form-control-lg"/>
                            </div>
                            <div className="form-outline  Form-white mb-4">
                                {/* <label htmlFor="password" className="form-label fw-bold">Password:</label> */}
                                <textarea class="form-control" placeholder='Write a message' name="message" id="message" cols="30" rows="7"></textarea> 
                            </div>
                           
                             <a href="/"><button className="btn btn-outline-success btn-lg px-5">Send Message</button></a>
                        </div>
                        <div>
                             
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

      
    </>
  )
}
export default Contact





