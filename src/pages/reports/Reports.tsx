import "./reports.scss";
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const columns: GridColDef[] = [
	{ field: "id", headerName: "ID", width: 90 },
	{
		field: "img",
		headerName: "Image",
		width: 100,
		renderCell: (params) => {
			return <img src={params.row.img || "/noavatar.png"} alt="" />;
		},
	},
	{
		field: "title",
		type: "string",
		headerName: "Title",
		width: 150,
	},
	{
		field: "color",
		type: "string",
		headerName: "Color",
		width: 150,
	},
	{
		field: "price",
		type: "string",
		headerName: "Price",
		width: 150,
	},
	{
		field: "producer",
		headerName: "Producer",
		type: "string",
		width: 150,
	},
	{
		field: "createdAt",
		headerName: "Created At",
		width: 100,
		type: "string",
	},
	{
		field: "inStock",
		headerName: "In Stock",
		width: 150,
		type: "boolean",
	},
];

const Reports = () => {
	const navigate = useNavigate();

	const params = useParams();
	const id = params.id as string; // Cast directly if necessary
	const targetId = parseInt(id); // Convert to number if IDs are numeric

	const handleButtonClick = () => {
		// Perform any other logic you need on
		navigate(`/platforms/${targetId}/report`); // Navigate to the new page
	};

	// TEST THE API

	// const { isLoading, data } = useQuery({
	//   queryKey: ["allproducts"],
	//   queryFn: () =>
	//     fetch("http://localhost:8800/api/products").then(
	//       (res) => res.json()
	//     ),
	// });

	return (
		<div className="reports">
			<div className="info">
				<h1>Reports</h1>
				<Button variant="contained" onClick={handleButtonClick}>
					Add New
				</Button>
			</div>
			<DataTable slug="reports" columns={columns} rows={products} />
			{/* TEST THE API */}

			{/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="products" columns={columns} rows={data} />
      )} */}
		</div>
	);
};

export default Reports;
