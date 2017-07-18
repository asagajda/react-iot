import React, {Component} from "react"
import Paper from "material-ui/Paper"
import FontIcon from "material-ui/FontIcon"
import {Card, CardHeader, CardText} from "material-ui/Card"

// Paper
const paper_style = {
  //height: 400,
  width: 600,
  margin: 20,
  display: 'inline-block',
  textAlign: "left",
};

const iconStyles = {
  marginRight: 24,
};

class Device extends Component {
  render(){

    const title = (
      <h3>
      <FontIcon className="material-icons" style={iconStyles}>devices_other
      </FontIcon>
      Device {this.props.id}</h3>
    );

    const card = (
      <Paper style={paper_style} zDepth={3}>
        <Card>
          <CardHeader
              title={title}
              subtitle="Device instance"
              actAsExpander={true}
              showExpandableButton={false}
          />
          <CardText>
            <p>Address: {this.props.fields[0]}</p>
            <p>Pubkey: {this.props.fields[1]}</p>
            <p>Owner: {this.props.fields[2]}</p>
            <p>Active: {this.props.fields[3].toString()}</p>
          </CardText>
        </Card>
      </Paper>
    );

    return card;
  }
}
