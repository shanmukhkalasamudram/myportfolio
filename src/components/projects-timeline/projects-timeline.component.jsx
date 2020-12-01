import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_DBMS from "../../assets/img/projects/dbms.png";
import L_IWP from "../../assets/img/projects/iwp.png";
import L_NASSCOM from "../../assets/img/projects/nasscom.png";
import L_NLP from "../../assets/img/projects/nlp.png";
import L_WEATHER from "../../assets/img/projects/weather.png";
import L_SOCKET from "../../assets/img/projects/socket.png";
import L_REAC from "../../assets/img/projects/react.png";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";

import L_MONGODB from "../../assets/img/skills/mongodb.svg";

import L_AWS from "../../assets/img/skills/aws.png";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_KAGGLE from "../../assets/img/skills/kaggle.png";
import L_SQL from "../../assets/img/skills/sql.png";
import L_PHP from "../../assets/img/skills/php.svg";
import L_PANDAS from "../../assets/img/skills/pandas.jpg";
import L_JUPYTER from "../../assets/img/skills/jupy.png";
import L_SOC from "../../assets/img/skills/socket.svg";


// import L_GIT from "../../assets/img/skills/github-api.svg";
// import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";


import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS & CERTIFICATIONS</h1>
      <Timeline>
        <Events>



        {/* Project: Courier Management  */}
        <ImageEvent
            date="07/11/2019"
            className="text-center"
            text="Courier Management System"
            src={L_DBMS}
            alt="dbms"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> It is a E-commerce website made with HTML/CSS, mysql and php
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Keep track of orders</li>
                          <li>Customer can place an order</li>
                          <li>Authentication</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SQL}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              MYSQL 
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PHP}
                                alt="php"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              PHP
                            </span>
                          </li>
                         
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                {/*  */}
                <UrlButton
                  href="https://github.com/shanmukhkalasamudram/courier-management-system"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>

          {/* AWS */}


          <ImageEvent
            date="27/09/2020"
            className="text-center"
            text="AWS Fundamentals Specialization"
            src={L_AWS}
            alt="aws"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> his specialization gives current or aspiring IT professionals an overview of the features, benefits, and capabilities of Amazon Web Services (AWS). As you proceed through these four interconnected courses, you will gain a more vivid understanding of core AWS services, key AWS security concepts, strategies for migrating from on-premises to AWS
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Security concepts</li>
                          <li>strategies for migrating from on-premises to AWS</li>
                          <li>building serverless applications</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          
                          
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_AWS}
                                alt="php"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              
                            </span>
                          </li>
                         
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                {/*  */}
                <UrlButton
                  href="https://www.coursera.org/account/accomplishments/verify/VURSZ62VJKME"
                  target="_blank"
                >
                 Certificate Link
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>


{/* Project: nasscom */}
<ImageEvent
            date="26/10/2020"
            className="text-center"
            text="Website phishing detection and Analysis"
            src={L_NASSCOM}
            alt="nasscom"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> In this project we will focus on website phishing detection analysis to find which classifier gives more accuracy in detecting phishing websites to classify phishing websites and non-phishing websites. The technique for classifying the phishing websites has to be improved as the threats are increasing day by day.<hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Various ML techniques are compared</li>
                          <li>For each method, precision can be measured </li>
                          <li>Using Jupyter Notebook</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_JUPYTER}
                                alt="jup"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Jupyter Notebook
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PANDAS}
                                alt="pandas"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Pandas 
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_KAGGLE}
                                alt="kaggle"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Kaggle
                            </span>
                          </li>
                          
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/shanmukhkalasamudram/Website-Phishing-Detection-and-analysis"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>


          
{/* Project: IWP */}
<ImageEvent
            date="29/10/2020"
            className="text-center"
            text="IDEA INVEST IMPLEMENT"
            src={L_IWP}
            alt="IWP"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This project consists the web portal in which the voluntary sponsors can see the theme of the Start-ups and if they are interested then the sponsors can communicate through our web portal and can invest some amount as per the start-ups requirement and then the sponsors can expect the share in start-ups profits.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Client can register new idea</li>
                          <li>Sponsor can see all the details and sponsor </li>
                          <li>Styled with  Material-UI</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SQL}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              MYSQL 
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PHP}
                                alt="php"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              PHP
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="css"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              PHP
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/shanmukhkalasamudram/III-WEB-APPLICATION-"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>


          
{/* Project: NLP */}
<ImageEvent
            date="03/11/2020"
            className="text-center"
            text="Sentiment Analysis on Amazon Fine Food Reviews"
            
            src={L_NLP}
            alt="nlP"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> In this project, We are planning to analyze the feedback of the review given by the Customer. This basically classifies the data whether it is a positive feedback or a negative feedback or a customer just satisfied with the product. In this model, we are training a separate train sets to analyse the positivity of the product. Graphical Representation of the review.    <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Positive feedback or Negative feedback are identified</li>
                          <li>Neutrals are neglected</li>
                          <li>Dataset contains 5.6+ lakh reviews from amazon customers</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_JUPYTER}
                                alt="jup"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Jupyter Notebook
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PANDAS}
                                alt="pandas"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Pandas 
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_KAGGLE}
                                alt="kaggle"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Kaggle
                            </span>
                          </li>
                          
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/shanmukhkalasamudram/Sentiment-Analysis-on-Amazon-Finefood-Reviews"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>


        
{/* Project: weather */}
<ImageEvent
            date="13/11/2020"
            className="text-center"
            text="Weather Detection"
            src={L_WEATHER}
            alt="weather"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Weather detection based on the location using Node Js and Express. Weather is detected based on WeatherStack Api
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Temperature Of the place</li>
                          <li>Chance of rainfall</li>
                          <li>Weather Description</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="jup"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Node
                            </span>
                          </li>
                          
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="kaggle"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express Js
                            </span>
                          </li>
                          
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/shanmukhkalasamudram/weather-application"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>

                <UrlButton
                  href="https://weatherapp-shanmukh.herokuapp.com/"
                  target="_blank"
                >
                  LIVE DEMO
                </UrlButton>
                
              </div>

              
            </div>
          </ImageEvent>


               
{/* Project: CHAT */}
<ImageEvent
            date="27/11/2020"
            className="text-center"
            text="Chat Room Application "
            src={L_SOCKET}
            alt="weather"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Chat Room Application where a bunch of people can have a chat and find each others location
                          <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Login using username and Id</li>
                          <li>One can send their location</li>
                          <li>Checkin and check out notification</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="jup"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Node
                            </span>
                          </li>
                          
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="kaggle"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express Js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SOC}
                                alt="kaggle"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Socket
                            </span>
                          </li>
                          
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/shanmukhkalasamudram/real-time-message-application"
                  target="_blank"
                >
                SOURCE CODE
                </UrlButton>

                <UrlButton
                  href="https://shanmukh-wassupppp.herokuapp.com/"
                  target="_blank"
                >
                  LIVE DEMO
                </UrlButton>
                
              </div>

              
            </div>
          </ImageEvent>

       

        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
