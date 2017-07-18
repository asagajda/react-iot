class DougForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {value: this.props.address};
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddressChange(this.state.value)
  }

  render(){
    return(
    <form onSubmit={this.handleSubmit}>
    <p>Enter contract manager address:</p>
      <label for="doug">
        Address:
      </label>
      <input
        id="doug"
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        />
      <input type="submit" value="Submit" />
    </form>
    )
  }
}
