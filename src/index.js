import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import BangDiem from './components/BangDiem';

let data = [
	{
		name: 'Teo',
		toan: 2,
		ly: 3
	},
	{
		name: 'Ti',
		toan: 6,
		ly: 7
	}
]

class App extends Component {
	render() {
		return(
			<BangDiem data={data} />
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);