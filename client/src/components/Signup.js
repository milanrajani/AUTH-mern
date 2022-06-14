import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../App.css'

export const Signup = () => {
    const navigate = useNavigate();
    const[user, setUser] = useState({
    name:'',
    email:'',
    work:'',
    password:'',
    cpassword:'',
});
let name,value;
const handleInputs=(e)=>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value})
}

const postData = async (e)=>{
   e.preventDefault();
   const {name,email,work,password,cpassword} = user
   
   const res = await fetch('/register',{
    method:"POST",
    headers:{
        "Content-type" : "application/json",
        'Accept': 'application/json'
    },
    body:JSON.stringify({ 
        name,
        email,
        work,
        password,
        cpassword,
    })
})


   const data = await res.json();
   if(res.status === 422 || !data){
    window.alert("Registration fail plz try again")
   console.log("Registration fail plz try again");
   } else{
    window.alert('Registration Successfull')
    console.log('Registration Successfull');

    navigate('/home');
   }
}
 

    return (
        <>
            <section className="gradient-custom">
                <div className="container py-4  h-100 ">
                    <div className="row d-flex justify-content-center align-item-center">
                        <div className="col-sm-12 col-md-10 col-lg-5">
                            <div className="card bg-dark text-white" style={{ bordeRadius: '5 rem' }}>
                                <div className="card-body p-4 text-center">
                                    <div className="mb-5">
                                        <form method="POST">
                                            <div className="form">
                                                <div className="form-body">
                                                    <div className="username">
                                                        <div className="card-body p-2 text-center">
                                                            <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                                                            <p className="text-white-50 mb-5">Don't have Account? Create one  </p>
                                                        </div>
                                                    </div>
                                                       <div className="name">
                                                            <input className="form-control Form-control-lg mb-2" type="text" size='4' id="firstName" name='name' placeholder="Name" value={user.name} onChange={handleInputs} required />
                                                       </div>
                                                    <div className="email">
                                                        <input type="email" className="form-control Form-control-lg mb-2" id="email" name='email' placeholder="Email" value={user.email} onChange={handleInputs} required/>
                                                    </div>
                                                    <div className="work">    
                                                        <input className="form-control Form-control-lg mb-2" type="text" id="work" name='work' placeholder="Work" value={user.work} onChange={handleInputs} required/>
                                                    </div>
                                                    <div className="password"> 
                                                        <input className="form-control Form-control-lg mb-2" type="password" id="password" name='password' placeholder="Password" value={user.password} onChange={handleInputs} required/>
                                                    </div>
                                                    <div className="cpassword">   
                                                        <input className="form-control Form-control-lg mb-2" type="password" id="cpassword" name='cpassword' placeholder="Confirm Password" value={user.cpassword} onChange={handleInputs} required/>
                                                    </div>
                                                </div>
                                                <div class="footer">
                                                    <a href="/"><button className="btn btn-outline-success btn-lg px-5" onClick={postData}>Sign Up</button></a>
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
