import "./report.scss";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import FormikField from "../../components/formikField/FormikField";
import { FieldConfig } from "../../components/formikField/FormikField";

interface FormValues {
	email: string;
	password: string;
}

const fields: FieldConfig[] = [
	{
		name: "field",
		label: "Field",
		type: "text",
		validation: yup.string(),
		//.required("Email is required"),
	},
	{
		name: "block",
		label: "Block",
		type: "text",
		validation: yup.string().min(8, "Field length should be min 8 chars"),
	},
	{
		name: "platform",
		label: "Platform",
		type: "text",
		validation: yup.string().min(8, "Field length should be min 8 chars"),
	},
	{
		name: "vessel",
		label: "Vessel",
		type: "text",
		validation: yup.string().min(8, "Field length should be min 8 chars"),
	},
];

const validationSchema = yup.object(
	fields.reduce(
		(schema, field) => ({
			...schema,
			[field.name]: field.validation,
		}),
		{}
	)
);

const Report = () => {
	const formik = useFormik<FormValues>({
		initialValues: fields.reduce(
			(vals, field) => ({ ...vals, [field.name]: "" }),
			{} as FormValues
		),
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<div className="report">
			<form className="box" onSubmit={formik.handleSubmit}>
				<div className="info">
					<h3>General</h3>
				</div>
				{fields.map((field) => (
					<FormikField key={field.name} field={field} formik={formik} />
				))}
				<Button color="primary" variant="contained" fullWidth type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
};

export default Report;
