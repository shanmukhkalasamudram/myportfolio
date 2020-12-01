import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";

const ContactForm = () => {
  return (
    <div id="contact">
      <br></br>
      {/* <h1 className="pt-3 text-center font-details-b pb-3">GET IN TOUCH</h1> */}
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            
            <div className="m-2">
              <a href="https://www.linkedin.com/in/shanmukh-sai-4bb1a2167/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkedIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Contact">
                  <i className="fab fa-callmade"></i> 91+9494472861
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://github.com/shanmukhkalasamudram" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="mailto:shanmukhkalasamudram@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="shanmukhkalasamudram@gmail.com"> 
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            
            
            <div className="m-2">
              <a href="https://www.instagram.com/mr.shanmukh87/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="Follow me on!">
                  <i className="fab fa-instagram"></i> Instagram
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.facebook.com/shanmukh.kalasamudram" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Say hello on FB">
                  <i className="fab fa-facebook-square"></i> FaceBook
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;
