import React from "react";

function UserProfile(props) {
	const { userName } = props;

	return <div>{userName}</div>;
}

export default UserProfile;

export async function getServerSideProps(context) {
	const { params, req, res } = context;

	return {
		props: {
			userName: "Popo",
		},
	};
}
