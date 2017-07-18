import React, {Component} from "react"
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';

// Paper
const paper_style = {
  //height: 400,
  width: 600,
  margin: 20,
  display: 'inline-block',
  textAlign: "left",
};

class ContractsInfo extends Component {
  render(){
    var output =
    <Paper style={paper_style} zDepth={3}>
      <Card>
        <CardHeader
            title="Service Smart Contracts Info"
            actAsExpander={false}
            showExpandableButton={false}
        />
        <CardText>
            <p>Address Manager address: {this.props.rootstate.dougAddress}</p>
            <p>App Manager address: {this.props.rootstate.appManagerAddress}</p>
            <p>Device Manager address: {this.props.rootstate.dmAddress}</p>
            <p>Eternal Storage address: {this.props.rootstate.esAddress}</p>
        </CardText>
      </Card>
    </Paper>
    return output;
  }
}

export default ContractsInfo
