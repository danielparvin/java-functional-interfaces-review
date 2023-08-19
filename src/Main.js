import Table from "./Table";

const Main = () => {
	return (
		<div class="main" id="main">
			<div class="header">
				<h1 class="title">
					Java's Standard Functional Interfaces
				</h1>
			</div>
			<div class="description">
				Use this table to visualize the functional interfaces of the java.util.function package by their inputs and outputs.<br/>Type in the field below to filter the table by interface name. Click on the column headers to sort the table by a column. Click on the input, output, method, and primitive specialization type values to filter the table by those values.
			</div>
			<Table />
		</div>
	)
}

export default Main;
