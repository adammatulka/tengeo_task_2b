import React from 'react';

export class Main extends React.Component {

    constructor(props) {
      super(props);

      this.state = { email: '', phone: '' };
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeEmail(event) {
      this.setState({ email: event.target.value });
    }

    handleChangePhone(event) {
      this.setState({ phone: event.target.value });
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + JSON.stringify(this.state));
      event.preventDefault();
    }
  
    render() {

      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            email:
            <input type="text" value={this.state.email} onChange={this.handleChangeEmail.bind(this)} />
            phone:
            <input type="text" value1={this.state.phone} onChange={this.handleChangePhone.bind(this)} />
          </label>
          <input type="submit" value="SEND THAT SHIT" />
        </form>
      );
    }
  }
  