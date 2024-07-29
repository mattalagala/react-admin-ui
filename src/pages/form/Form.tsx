import { useFormik } from "formik";
import {
	barChartBoxRevenue,
	barChartBoxVisit,
	chartBoxConversion,
	chartBoxProduct,
	chartBoxRevenue,
	chartBoxUser,
} from "../../data";
import "./form.scss";

const Form = () => {
	// Pass the useFormik() hook initial form values and a submit function that will
	// be called when the form is submitted
	const formik = useFormik({
		initialValues: {
			email: "",
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<div className="form">
			{/* <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div> */}
			<form onSubmit={formik.handleSubmit}>
				<label htmlFor="email">Email Address</label>
				<input
					id="email"
					name="email"
					type="email"
					onChange={formik.handleChange}
					value={formik.values.email}
				/>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Form;
