import React,{Component} from 'react';
import { Button } from 'semantic-ui-css';

class App extends Component{
  render(){
    return (
      <div>
        <h1> Dev-Meet </h1>
        <button className="ui icon">
          <i icon="smile icon"></i>
          CSS Button
        </button>
        <Button icon="smile" content= "React Button" />
      </div>
    );
  }
}

export default App;

