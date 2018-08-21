import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import './carousel.css';
import './signinsignup.css'
import Home from './components/Home';

class App extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const users = await res.json();
      this.setState({
        users
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="App">
        <Home />
        {this.state.users.map(item => (
          <div key={item.id}>
            <h1>{item.first_name} {item.last_name}</h1>
            <span>{item.email}</span>
            <h3>Currently using React {React.version}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
