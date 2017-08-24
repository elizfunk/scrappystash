import React from 'React';
import { render } from 'react-dom';


class App extends React.Component {
  
  render() {
    return (<div>
              <p>Welcome to Scrappy Stash!</p>
            </div>)
  }
};


render(<App/>, document.getElementById('app'));
