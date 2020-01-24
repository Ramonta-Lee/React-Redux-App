import React from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const Job = props => {
  console.log("job", props);
  return (
    <div >
      <Card>
        <CardImg
          top
          style={{width: "50%"}}
          src={props.job.company_logo}
          alt="Card image cap"
        />
        <CardBody>
  <CardTitle>{props.job.title}</CardTitle>
  <CardSubtitle>{props.job.location}</CardSubtitle>
          <CardText>
           {props.job.how_to_apply}
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Job;
