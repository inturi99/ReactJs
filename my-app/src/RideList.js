import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import Pagination from './Pagination';
import { Container, Table } from 'reactstrap';
import data from './data.json';
class Home extends Component {
	constructor() {
		super();
		var exampleItems = data.rides.currentrides;

		this.state = {
			exampleItems: exampleItems,
			pageOfItems: [],
		};

		// bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
		this.onChangePage = this.onChangePage.bind(this);
	}

	onChangePage(pageOfItems) {
		// update state with new page of items
		this.setState({ pageOfItems: pageOfItems });
	}

	render() {
		const itemList = this.state.pageOfItems.map(item => {
			return (
				<tr key={item.ride_id}>
					<td style={{ whiteSpace: 'nowrap' }}>{item.status}</td>
					<td style={{ whiteSpace: 'nowrap' }}>{'--'}</td>
					<td style={{ whiteSpace: 'nowrap' }}>{item.Passenger.last_name}</td>
					<td style={{ whiteSpace: 'nowrap' }}>{item.Passenger.first_name}</td>
					<td style={{ whiteSpace: 'nowrap' }}>{'--'}</td>
					<td style={{ whiteSpace: 'nowrap' }}>{item.ride_id}</td>
					<td style={{ whiteSpace: 'nowrap' }}>{item.ETA}</td>
				</tr>
			);
		});

		return (
			<div>
				<AppNavbar />
				<Container fluid>
					<h3>Ride Request Report</h3>
					<Table className="mt-4">
						<thead>
							<tr>
								<th width="15%">Final Ride Status</th>
								<th width="15%">Transaction Id</th>
								<th width="15%">Last Name</th>
								<th width="15%">First Name</th>
								<th width="15%">Submittd on</th>
								<th width="15%">Lyft Ride Id</th>
								<th width="15%">Ride Cost</th>
							</tr>
						</thead>
						<tbody>{itemList}</tbody>
					</Table>
					<Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
				</Container>
			</div>
		);
	}
}

export default Home;
