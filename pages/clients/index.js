import React from "react";
import Link from "next/link";

function ClientsPage() {
	const clients = [
		{ id: "pop", name: "Popo" },
		{ id: "jyo", name: "Jyotika" },
	];
	return (
		<>
			<div>ClientsPage</div>
			<ul>
				{clients.map((item) => (
					<li key={item.id}>
						<Link
							href={{
								pathname: "/clients/[id]",
								query: {
									id: item.id, //Dynamic Segment Identifier
								},
							}}
						>
							{item.name}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default ClientsPage;
