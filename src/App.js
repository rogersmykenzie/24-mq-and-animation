import React from 'react';
import logo from './logo.svg';
import './reset.css'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menuStatus: 'menu'
    }
  }

  toggleMenu = () => {
    if(this.state.menuStatus === 'menu-open') {
      this.setState({menuStatus: 'menu-close'});
    } else {
      this.setState({menuStatus: 'menu-open'});
    }
  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>Start Bootstrap</li>
            <div>
              <li>
                <img 
                onClick={this.toggleMenu}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAACVBMVEX////x8fH4+Pg/xVg9AAAAf0lEQVR4nO3bwQ0AIAgEQbX/oq1CJMdMB/sjubAWAAAAAAAAAAAAAAAAAACMcqp8K9xVFCpUqFChQoUKH8q/2gAAAAAAALrI354UKlSoUKFChQoTCgEAAAAAALrI/wPO354UKlSoUKFChRMK8682AAAAAAAAAAAAAAAAAAD44gLQbBAAqqi0mgAAAABJRU5ErkJggg==" 
                alt="Hamburger Menu" />
              </li>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </div>
          </ul>
        </nav>
  
      <div className={this.state.menuStatus}></div>
  
      </div>
    );
  }
  
}

export default App;
