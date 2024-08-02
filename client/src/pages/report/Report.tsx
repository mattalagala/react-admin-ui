import { useFormik } from "formik";
import * as Yup from "yup";

import "./report.scss";

const Report = () => {
	const formik = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
		},
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
		onSubmit: async (values) => {
			// Post data to the server
			try {
				const response = await fetch("http://localhost:8800/api/reports", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(values),
				});
				const data = await response.json();
				console.log(data); // Log or handle the response data
			} catch (error) {
				console.error("Failed to submit report:", error);
			}
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
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.username}
						/>
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
