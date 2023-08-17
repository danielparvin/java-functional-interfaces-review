import FunctionalInterfaces from "./FunctionalInterfaces";
import FilterableTable from "react-filterable-table";
import "./filterable-table.css";

const fields = [
	{name: "name", displayName: "Interface", sortable: true, inputFilterable: true},
	{name: "inputs", displayName: "Inputs", sortable: true, exactFilterable: true},
	{name: "output", displayName: "Output", sortable: true, exactFilterable: true},
	{name: "method", displayName: "Method", sortable: true, exactFilterable: true},
	{name: "primitiveSpecializationTypes", displayName: "Primitive Specialization Types", sortable: true, exactFilterable: true}
]

const Table = () => {
	return (
		<>
			<FilterableTable
				namespace="Functional Interfaces"
				initialSort="method"
				data={FunctionalInterfaces}
				fields={fields}
				noRecordsMessage="There are no functional interfaces to display."
				noFilteredRecordsMessage="No functional interfaces match your filters!"
			/>
		</>
	)
}

export default Table;
