import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./wells.scss";
import { useState } from "react";
import Add from "../../components/add/Add";
import { wellRows } from "../../data";
//import { useQuery } from "@tanstack/react-query";

const columns: GridColDef[] = [
	{
		field: "id",
		headerName: "ID",
		width: 90,
	},
	{
		field: "img",
		headerName: "Avatar",
		width: 100,
		renderCell: (params) => {
			return <img src={params.row.img} alt="" />;
		},
	},
	{
		field: "operator",
		type: "string",
		headerName: "Operator",
		width: 150,
	},
	{
		field: "wellName",
		type: "string",
		headerName: "Well Name",
		width: 150,
	},
	{
		field: "platform",
		type: "string",
		headerName: "Platform",
		width: 200,
	},
	{
		field: "field",
		type: "string",
		headerName: "Field",
		width: 200,
	},
	{
		field: "block",
		headerName: "Block",
		width: 150,
		type: "string",
	},
	{
		field: "type",
		headerName: "Type",
		width: 150,
		type: "string",
	},
	{
		field: "status",
		headerName: "Status",
		width: 150,
		type: "string",
	},
];

const Wells = () => {
	const [open, setOpen] = useState(false);

	// TEST THE API

	// const { isLoading, data } = useQuery({
	//   queryKey: ["allusers"],
	//   queryFn: () =>
	//     fetch("http://localhost:8800/api/users").then(
	//       (res) => res.json()
	//     ),
	// });

	return (
		<div className="users">
			<div className="info">
				<h1>Wells</h1>
				<button onClick={() => setOpen(true)}>Add New Wells</button>
			</div>
			<DataTable slug="users" columns={columns} rows={wellRows} />
			{/* TEST THE API */}

			{/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )} */}
			{open && <Add slug="user" columns={columns} setOpen={setOpen} />}
		</div>
	);
};

export default Wells;
