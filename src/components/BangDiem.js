import React, {Component} from 'react';
import SinhVien from './SinhVien';

class BangDiem extends Component {
	render() {
		return(
			<div className="bangDiem">
				<h1>Bang Diem</h1>
				<table>
					<thead>
						<tr>
							<th>Sinh Vien</th>
							<th>Diem Toan</th>
							<th>Diem Ly</th>
						</tr>
					</thead>
					<tbody>
					{
							this.props.data.map((sinhvien, id) => {
								return <SinhVien data={sinhvien} key={id} />
							})
					}
					</tbody>
				</table>
			</div>
		);
	}
}

export default BangDiem;