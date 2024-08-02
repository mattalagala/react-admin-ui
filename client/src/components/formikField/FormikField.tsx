import "./formikfield.scss";
import React from "react";
import { FormikProps } from "formik";
import TextField from "@mui/material/TextField";

// Ensure this is defined in the same file if not imported
export interface FieldConfig {
	name: string;
	label: string;
	validation: any; // Optionally replace 'any' with a specific type
	type?: string;
}

export interface FormikFieldProps<T> {
	field: FieldConfig;
	formik: FormikProps<T>;
}

const FormikField: React.FC<FormikFieldProps<any>> = ({ field, formik }) => (
	<TextField
		fullWidth
		id={field.name}
		name={field.name}
		label={field.label}
		type={field.type || "text"}
		value={formik.values[field.name]}
		onChange={formik.handleChange}
		onBlur={formik.handleBlur}
		error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
		helperText={
			(formik.touched[field.name] as boolean) &&
			(formik.errors[field.name] as string)
		}
		inputProps={{ style: { color: "#fbc02d" } }}
		InputLabelProps={{ style: { color: "#DCDCDC" } }}
		color="secondary"
	/>
);

export default FormikField;
