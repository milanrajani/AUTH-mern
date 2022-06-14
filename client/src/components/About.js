import React from 'react'

export const About = () => {
  return (
    <>
      <section className="gradient-custom">
        <div className="container py-4  h-100 ">
          <div className="row d-flex justify-content-center align-item-center">
            <div className="col-sm-12 col-md-10 col-lg-7">
              <div className="card "  >
                <div className="card-body p-4 text-center">
                  <div className="container">
                    <form method="">
                      <div className="row">
                        <div className="col-sm-6">
                          qwret
                        </div>
                        <div className="col-sm-4">
                          <div className="profile-head">
                            <h5>Milan Rajani</h5>
                            <p style={{color:"blue"}}>MERN Developer</p>
                            <p className="profile-rating mt-3 mb-5">RANKINGS <span>1/10</span> </p>
                            <ul className="nav nav-tabs" role='tablist'>
                              <li className="nav-items">
                                <a href="#home" className="nav-link active" id='home-tab' data-toggle='tab' role='tab' >About</a>
                              </li>
                              <li className="nav-items">
                                <a href="#profile" className="nav-link active" id='profile-tab' data-toggle='tab' role='tab' >Timeline</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-sm-2">
                          <input type="submit" className='profile-edit-btn'  value='edit'/>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-4">
                          <div className="profile-work">
                            <p>Work Link</p>
                            {/* <a href=""></a> */}
                          </div>
                        </div>
                      </div>
                    </form>
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
export default About