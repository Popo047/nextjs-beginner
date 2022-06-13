export default function handler(req, resp) {
	resp.status(200).json({
		message: "This works",
	});
}
