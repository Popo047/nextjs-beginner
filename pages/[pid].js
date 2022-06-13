import axios from "axios";
function ProductDetailPage(props) {
	console.log(props);

	return <></>;
}

async function getData() {
	const response = await axios.get("http://localhost:8000/products");
	return response.data;
}

export async function getStaticProps(context) {
	const { params } = context;

	const productId = params.pid;

	const data = await getData();

	const product = data.find((item) => item.id === productId);

	if (!product) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			loadedProduct: product,
		},
	};
}

export async function getStaticPaths() {
	const data = await getData();

	const pIds = data.map((item) => item.id);

	const pathsWithParams = pIds.map((item) => ({ params: { pid: item } }));

	return {
		paths: pathsWithParams,
		fallback: false,
	};
}

export default ProductDetailPage;
