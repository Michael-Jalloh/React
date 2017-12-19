import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { Whoops404 } from './components/Whoops404'
import { hello, goodbye} from './lib'
import {HashRouter, Route, Switch} from 'react-router-dom'


window.React = React

render(
	<HashRouter >
		<Switch>
			<Route exact path="/" component={App}/>
			<Route exact path="/add-day" component={App}/>
			<Route  exact path="/list-days/" component={App}/>
			<Route path="/list-days/:filter" component={App}/>
			<Route  path="*" component={Whoops404}/>
		</Switch>
	</HashRouter>,
	document.getElementById('react-container')
)
