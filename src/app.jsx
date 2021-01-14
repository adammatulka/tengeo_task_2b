import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            email:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            phone:
            <input type="text" value1={this.state.value1} onChange={this.handleChange} />
          </label>
          <input type="submit" value="SEND THAT SHIT" />
        </form>
      );
    }
  }
  
  ReactDOM.render(<Main />,document.getElementById('root'));