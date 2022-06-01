import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function ClientProjectsPage() {
	const router = useRouter();

	const projectLoadHandler = () => {
		router.push({
			pathname: "/clients/[id]/[projectid]",
			query: { id: "pop", projectid: "2" },
		});
	};

	return (
		<>
			<div>Projects of a given client</div>
			<button onClick={projectLoadHandler}>Load Project A</button>
		</>
	);
}

export default ClientProjectsPage;
