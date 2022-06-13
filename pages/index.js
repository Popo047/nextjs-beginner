import Link from "next/link";
import axios from "axios";

export default function HomePage(props) {
	const { products } = props;

	console.log(products);

	return (
		<div>
			<h1>HomePage</h1>
			<ul>
				{products?.map((item) => (
					<>
						<li>
							<Link href={`/${item.id}`}>{item.id}</Link>
						</li>
					</>
				))}
			</ul>
		</div>
	);
}

export async function getStaticProps() {
	//code that is not visible on client side, fetches data through props to this component
	//getStaticProps is called before executing the component
	//props must be an object (props is the key)

	const response = await axios.get("http://localhost:8000/products");

	if (!response.data) {
		return {
			redirect: {
				destination: "/signin",
			},
		};
	}

	if (response.data.length === 0) {
		return { notFound: true };
	}

	return {
		props: {
			products: response.data,
		},
		// revalidate: 1000,
	};
}
