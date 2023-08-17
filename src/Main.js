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
				Use this table to visualize the functional interfaces of the java.util.function package by their inputs and outputs.
			</div>
			<Table />
		</div>
	)
}

export default Main;
