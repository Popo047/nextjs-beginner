import Link from "next/link";

export default function HomePage(props) {
	const { products } = props;

	console.log(products);

	return (
		<div>
			<h1>HomePage</h1>
			<ul>
				<li>p1</li>
				<li>p2</li>
				<li>p3</li>
			</ul>
		</div>
	);
}

export async function getStaticProps() {
	//code that is not visible on client side, fetches data through props to this component
	//getStaticProps is called before executing the component
	//props must be an object (props is the key)

	return {
		props: {
			products: [{ id: "p1", title: "Product1" }],
		},
	};
}
