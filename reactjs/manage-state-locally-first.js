class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }
  submitMessage() {
    this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input]
    })
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input type="text" onChange={e => this.handleChange(e)} value={this.state.input}/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>{this.state.messages.map(m => {
          return <li>{m}</li> 
        })}
        </ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};