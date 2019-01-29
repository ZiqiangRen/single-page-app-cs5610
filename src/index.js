import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
import HelloWorld from './components/hello'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import WhiteBoard from './containers/WhiteBoard'
import Stateless from './components/Stateless'


//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
	<div className="container-fluid">
		<WhiteBoard/>
	</div>,
	document.getElementById("root")
);
	

