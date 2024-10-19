import React  from 'react'

export default function Form(props) {
    //const [Email, setEmail] = useState("Enter your Email address");
    //const [Password, setPassword] = useState("Enter your Password");

  return (
    <div className="signin-container">
    <div className="form-container">
    <form>
        <h1>{props.heading}</h1>
    <button type="submit" className="btn btn-primary mx-3">Admin</button>
    <button type="submit" className="btn btn-primary mx-3">Faculty</button>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label my-3">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</div>
  );
}
