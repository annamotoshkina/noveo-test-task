export default function getFolder(token, path) {
	const request = new Request(`https://cloud-api.yandex.net/v1/disk/resources?path=${path}&limit=1000`);
	const requestHeaders = request.headers;
	requestHeaders.append('Authorization', `OAuth ${token}`);
	requestHeaders.append('Content-Type', 'application/json');

	return fetch(request)
		.then(response => {
		if (response.status === 200) {
			return response.json();
		} else {
			throw new Error('Something went wrong on api server!');
		}
	});
}
