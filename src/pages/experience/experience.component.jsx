import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";

import Tilt from "react-tilt";
import "./experience.styles.css";
import L_VIT from "../../assets/img/experience/vit.jpg";
import L_SCHOOL from "../../assets/img/experience/school.jpg";
import L_INTER from "../../assets/img/experience/inter.png";
import L_LEO from "../../assets/img/experience/leo.jpg";
import L_SAHITI from "../../assets/img/experience/sahiti.jpg";
import L_RIV from "../../assets/img/experience/riv.jpg";
import L_AYUDA from "../../assets/img/experience/ayuda.jpg";
import L_CODING from "../../assets/img/experience/coding.png";



const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE & EDUCATION</h1>
      
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
            
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              <div>
                  <Card.Title className="text-center">EDUCATION</Card.Title>
                </div>
                {/* <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" /> */}
              </Card.Header>
             
              <Card.Body className="d-flex justify-content-center flex-column">
                
                <div>
                <Card.Img variant="center" className="img-resize" src={L_SCHOOL} alt="VB School" />
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">VishwaBharathi E.M High School</strong>
                    <br />
                    <strong>Secondary Education</strong><br></br> June 2013 - March 2016 
                  </Card.Text>
                </div>
                <br></br>
                <div>
                <Card.Img variant="center" className="img-resize" src={L_INTER} alt="Iinter" />
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Narayana IIT Academy</strong>
                    <br />
                    <strong>Intermediate Education,Hyderabad</strong><br></br> June 2016 - March 2018
                    {/* <strong>Technology:</strong> React JS, DOTNET, C#, MS-SQL, Python     */}
                  </Card.Text>
                </div>
                <br></br>
                <div>
                <Card.Img variant="center" className="img-resize" src={L_VIT} alt="" />
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Vellore Institute of Technology</strong>
                    <br />
                    {/* <strong>Technology:</strong> React JS, DOTNET, C#, MS-SQL, Python     */}
                    <strong>BTech Computer Science and Engineering,Vellore</strong><br></br> July 2018 - Present
                  </Card.Text>
                </div>


              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
            
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              <div>
                  <Card.Title className="text-center">EXPERIENCE</Card.Title>
                </div>
                {/* <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" /> */}
              </Card.Header>
             
              <Card.Body className="d-flex justify-content-center flex-column">
                
                <div>
                <Card.Img variant="center" className="img-resize" src={L_LEO} alt="leo" />
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">VIT LEO CLUB</strong>
                    <br />
                    <strong>Vice ChairPerson</strong> February 2020- Present
                    <br></br>
                    <strong>Core Commitee Member</strong> December 2018 – February 2020


                  </Card.Text>
                </div>
                <br></br>
                <br></br>
                <div>
                <Card.Img variant="center" className="img-resize" src={L_SAHITI} alt="sahiti" />
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Sahiti-TLA</strong>
                    <br />
                    <strong>Core Commitee Member</strong> December 2018 – Present
                    {/* <strong>Technology:</strong> React JS, DOTNET, C#, MS-SQL, Python     */}
                  </Card.Text>
                </div>
                <br></br>
                <br></br>
                <div>
                <Card.Img variant="center" className="img-resize" src={L_CODING} alt="sahiti" />
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Coding Ninjas</strong>
                    <br />
                    <strong>Campus Ambassdor At Coding Ninjas</strong> April 2020- June 2020


                    {/* <strong>Technology:</strong> React JS, DOTNET, C#, MS-SQL, Python     */}
                  </Card.Text>
                </div>
                <br></br>
                <br></br>
                <div>
                <Card.Img variant="center" className="img-resize" src={L_RIV} alt="sahiti" />
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">RIVIERA '20</strong>
                    <br />
                    <strong>Member in Publicity & Marketing-ROI</strong> December 2019- March 2020

                    {/* <strong>Technology:</strong> React JS, DOTNET, C#, MS-SQL, Python     */}
                  </Card.Text>
                </div>
                <br></br>
                <br></br>
                <div>
                <Card.Img variant="center" className="img-resize" src={L_AYUDA} alt="sahiti" />
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">AYUDA NGO</strong>
                    <br />
                    <strong>Core Commitee Member</strong> December 2018- August 2019

                    {/* <strong>Technology:</strong> React JS, DOTNET, C#, MS-SQL, Python     */}
                  </Card.Text>
                </div>
                <br></br>
                <br></br>
                


              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

      
     
    </div>

    



    
  );
};

export default Experience;
