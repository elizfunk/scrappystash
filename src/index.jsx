import React from 'React';
import { render } from 'react-dom';
import Button from './components/Button.jsx';


class App extends React.Component {
  constructor (props) {
    super(props);
  }

  alertUs () {
    alert("Hi folks!");
  }
  
  render() {
    return (<div>
              <p>Welcome to Scrappy Stash!</p>
              <Button buttonText="Click here" clickFunction={this.alertUs}/>
            </div>)
  }
};


render(<App/>, document.getElementById('app'));
