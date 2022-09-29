import React from "react";
import "../App.css";

function body() {
  return (
    <>
   <div className="fullbody container-fluid border border-success">
   <div className="container border border-success"><div className=" ">
   <form>
    <div className="mb-3"><p className="h1"><b>Set up your account</b></p></div>
    <div className="my-3"><p>Login or Register now and get access to the best food order traking app</p></div>
  <div className="mb-3 ">
    <input type="text" className="form-control bg-dark text-light" placeholder="Harsh" />
  </div>
  <div className="mb-3">
    <input type="text" className="form-control bg-dark text-light" placeholder="Vaghasiya" />
  </div>
  <div className="mb-3">
    <input type="text" className="form-control bg-dark text-light" placeholder="Mobile No"  />
  </div>
  <div className="mb-3">
    <input type="email" className="form-control bg-dark text-light" placeholder="Email" />
  </div>
  <div className="mb-3">
    <input type="password" className="form-control bg-dark text-light" placeholder="Password"  />
  </div>
  <div className="mb-3">
    <input type="password" className="form-control bg-dark text-light" placeholder="Confirm Password"/>
  </div>
  <div className="mb-3">
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
<hr/>
 <div className="my-3"><label  className="form-label">Already have an account ? <a href="/">Sign in</a></label></div>
</form>
   </div></div>
   </div>
    </>
  );
}

export default body;
