import React, {Component} from 'react';class SinhVien extends Component {	render() {		//this.props.data		return(			<tr>				<td>{this.props.data.name}</td>				<td>				{this.props.data.toan}					<button>Update</button>				</td>				<td>				{this.props.data.ly}					<button>Update</button>				</td>			</tr>		);	}}export default SinhVien;