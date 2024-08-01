import Single from "../../components/single/Single";
import { singleProduct } from "../../data";
import "./product.scss";
import { useParams } from "react-router-dom";

const Product = () => {
	//Fetch data and send to Single Component

	const params = useParams();
	const id = params.id as string;
	const targetId = parseInt(id);
	return (
		<div className="product">
			{singleProduct.map((platform, index) => {
				if (platform.id === targetId) {
					return (
						<div key={platform.id} className={`box box${index + 1}`}>
							<Single {...platform} />
						</div>
					);
				} else {
					return null;
				}
			})}
		</div>
	);
};

export default Product;
