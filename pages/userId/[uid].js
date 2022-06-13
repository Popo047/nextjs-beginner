function UserIdPage(props) {
	const { userId } = props;

	return <div>{userId}</div>;
}

export default UserIdPage;

export async function getServerSideProps(context) {
	const { params } = context;

	const userId = params.uid;

	return {
		props: {
			userId,
		},
	};
}
