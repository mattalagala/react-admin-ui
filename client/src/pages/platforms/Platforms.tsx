import PlatformBox from "../../components/platformBox/PlatformBox";
import { platforms } from "../../data";
import "./platforms.scss";

const Platforms = () => {
	return (
		<div className="contentContainer">
			<h1>Platforms</h1>
			<div className="platforms">
				{platforms.map((platform, index) => (
					<div key={platform.id} className={`box box${index + 1}`}>
						<PlatformBox {...platform} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Platforms;
