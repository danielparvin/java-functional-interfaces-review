import FunctionalInterfaces from "./FunctionalInterfaces";
import FilterableTable from "react-filterable-table";

const fields = [
	{name: "name", displayName: "Interface", sortable: true, inputFilterable: true},
	//{inputs: "inputs", displayName: "Inputs", sortable: true},
	//{method: "method", displayName: "Method", sortable: true, exactFilterable: true}
	//{primitiveSpecializationTypes: "primitiveSpecializationTypes", displayName: "Primitive Specialization Types"}
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
