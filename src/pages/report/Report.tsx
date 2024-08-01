import { useFormik } from "formik";
import * as Yup from "yup";

import "./report.scss";
import { Typography } from "@mui/material";

const Report = () => {
	// useFormik hook sets up the form state and provides helpful functions
	const formik = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
		},
		// Validation rules defined using Yup
		validationSchema: Yup.object().shape({
			username: Yup.string()
				.required("Username is required")
				.min(3, "Username must be at least 3 characters")
				.max(15, "Username must be at most 15 characters"),
			email: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
			password: Yup.string().required("Password is required"),
		}),
		// onSubmit is called when the form is submitted
		onSubmit: (values) => {
			// Handle form submission logic here (e.g., send data to server)
			console.log(values);
		},
	});

	return (
		<div className="info">
			<h1>Add New Report</h1>
			<div className="box">
				<form onSubmit={formik.handleSubmit}>
					<div>
						<label htmlFor="username">Username:</label>
						<input
							type="text"
							id="username"
							name="username"
							placeholder="Enter your username"
							// Connect input to formik state and handlers
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.username}
						/>
						{/* Show error message if touched and there is an error */}
						{formik.touched.username && formik.errors.username && (
							<div style={{ color: "red", marginTop: "5px" }}>
								{formik.errors.username}
							</div>
						)}
					</div>

					<div>
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Enter your email"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
						/>
						{formik.touched.email && formik.errors.email && (
							<div style={{ color: "red", marginTop: "5px" }}>
								{formik.errors.email}
							</div>
						)}
					</div>

					<div>
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="Enter your password"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.password}
						/>
						{formik.touched.password && formik.errors.password && (
							<div style={{ color: "red", marginTop: "5px" }}>
								{formik.errors.password}
							</div>
						)}
					</div>

					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
};

export default Report;
