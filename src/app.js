import React from 'react';
import ReactDOM from 'react-dom';
import '../Common/init';
import { Header } from './components/Element';
import { HashRouter as Router, Route,Switch } from 'react-router-dom';
import Firstpage from './components/Firstpage';
import { TransitionGroup,CSSTransition,Transition } from 'react-transition-group'
import { spring,AnimatedSwitch } from 'react-router-transition';
// import registerServiceWorker from './registerServiceWorker';
global.WebApp = {}
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){ // Every react component has a render method.
      return(<div id="box">
                <Header ref={(el)=>{global.WebApp.header = el}}/>
                <Firstpage />
            </div>);
    }
  }
  ReactDOM.render(<App />, document.getElementById('app'));
//   registerServiceWorker();