import PlatformBox from "../../components/platformBox/PlatformBox";

import { chartBoxUser } from "../../data";
import "./forms.scss";

const Forms = () => {
	return (
		<div className="contentContainer">
			<h1>Daily Progress Reports</h1>
			<div className="forms">
				<div className="box box2">
					<PlatformBox {...chartBoxUser} />
				</div>
				<div className="box box2">
					<PlatformBox {...chartBoxUser} />
				</div>
				{/* TEST THE API */}
			</div>
		</div>
	);
};

export default Forms;
