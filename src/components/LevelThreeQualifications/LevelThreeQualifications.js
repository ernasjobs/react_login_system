import React from "react";
import TextBox from "../TextBox/TextBox";
import "./LevelThreeQualifications.css";
import { Container, Row, Col } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";
import RadioButton from '../RadioButton/RadioButton';
var l3QualificationsOptions = [
  { label: "Yes", id: "qualificationYes", value: "yes" },
  { label: "No", id: "qualificationNo", value: "no" },
];

const LevelThreeQualifications = (props) => {
  function UserTypeSelect() {
    if (props.userType === "staff") {
      return (
        <Row id="buttonRow">
          <Col className="centered-buttons">
            <UCPButton
              primary="True"
              className="mediumbutton"
              buttonText="Go Back"
            />
          </Col>
          <Col className="centered-buttons">
            <div id="confirmButton" hidden>
              <UCPButton
                primary="True"
                className="mediumbutton"
                buttonText="Confirm and Go"
              />
            </div>
          </Col>
        </Row>
      );
    } else {
      return (
        <Row id="buttonRow">
          <Col className="centered-buttons">
            <div id="confirmButton" hidden>
              <UCPButton
                primary="True"
                className="mediumbutton"
                buttonText="Apply Now"
              />
            </div>
          </Col>
          <Col className="centered-buttons">
            <div id="confirmButton1" hidden>
              <UCPButton
                primary="True"
                className="mediumbutton"
                buttonText="Request Call Back"
              />
            </div>
          </Col>

          <Col className="centered-buttons">
            <div id="confirmButton2" hidden>
              <UCPButton
                primary="True"
                className="mediumbutton"
                buttonText="Request Video Call Back"
              />
            </div>
          </Col>
        </Row>
      );
    }
  }
  return (
    <Container className="form-container">
      <div className="form-background">
        <h6 className="form-title">What Level 3 qualifications does the applicant hold?</h6>
        <span class="form-right">
          <p>Qualification: (E.g. A Level, BTEC, Access)</p>
          <TextBox
             placeholder="Enter qualification"/> 
          <p>Subject: (E.g. Bussiness Studies)</p>
            <TextBox
             placeholder="Enter subject"/> 
          <p>Grade Achieved</p>
          <TextBox
             placeholder="Enter grade"/> 
          <p>GCSE Science / Additional Science</p>
          <TextBox
          type="date"/> 
           <p>Other L3 Qualifications</p>
          <RadioButton
            options={l3QualificationsOptions}
            name="l3qualifications"
          />
        </span>
      </div>
      <div>{UserTypeSelect()}</div>
    </Container>
  );
};

export default LevelThreeQualifications;
