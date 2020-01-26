import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import axios from "axios";
import "./style.css"
import ReCAPTCHA from "react-google-recaptcha";


let mailer = ()=>{
  if(!document.getElementById("name").value||!document.getElementById("message").value||!document.getElementById("email").value){
    alert("Please Fill Out all Fields")
  }
  else{
  axios.post("/contact", {
    from:"dorlandotech@gmail.com",
    to:"gagedorlando@gmail.com",
    subject:document.getElementById("subject").value,
    html:"<b>Name:</b> "+document.getElementById("name").value+"<br><br><b>Email:</b> "+document.getElementById("email").value+"<br><br><b>Message:</b> "+document.getElementById("message").value
  }).then(()=>{
    alert("Email sent.");
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("message").value="";
    document.getElementById("subject").value="";
  })
}
}

function NoMatch() {
  return (
    <Container fluid>
      <div className="card" id="thisForm">
        <div className="card-header">
          <h1 >Contact Me</h1>
        </div>
        <div className="card-body" >
          <div id="flex">
            <Container>
              <Row>
                <Col size="md-3">
                  <div className="form-group">
                    <label htmlFor="name" >Name:</label>
                    <input type="text" id="name" className="form-control" />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" className="form-control" />
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" className="form-control" id="subject" />
                  </div>
                </Col>
                <Col size="md-9">
                  <label htmlFor="message">Message:</label>
                  <textarea className="form-control" id="message"></textarea>
                </Col>
              </Row>
              <Row>
              {/* <ReCAPTCHA sitekey="6LdK1dIUAAAAANmVlp9Juf0jlnP1SszYbN5c0CdH" onChange={document.getElementById}/> */}
                <button type="button" id="sendButton" className="btn btn-warning btn-lg btn-block" onClick={()=>mailer()}>Send</button> 
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <div style={{textAlign:"center"}}>
        <img src={process.env.PUBLIC_URL+"/assets/images/insta.png"} alt="Insta" onClick={()=>window.location.assign("https://instagram.com/gagedorl")}/>
        <img src={process.env.PUBLIC_URL+"/assets/images/linkedin.png"} alt="linkedin" onClick={()=>window.location.assign("https://linkedin.com/in/gage-d-orlando-392b61186")} />
        <img src={process.env.PUBLIC_URL+"/assets/images/github.png"} alt="Github" onClick={()=>window.location.assign("https://github.com/gagedorl")} />
      </div>
    </Container>
  );
}

export default NoMatch;
