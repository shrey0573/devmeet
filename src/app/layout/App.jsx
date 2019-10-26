import React,{Component} from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard'
import { Container } from 'semantic-ui-react';
import NavBar, {  } from '../../features/nav/NavBar/NavBar';

class App extends Component{
  render(){
    return (
        <div>
        <NavBar/>
        <Container className="main">
        <EventDashboard/>
        </Container>
        </div>
    );
  }
}

export default App;

