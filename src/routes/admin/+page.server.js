export const load = async () => {
	const apiKey = 'qF3wveUq2Z2WAvnd5Q83NHdZ5NFEt6H9iQw0jmWFHNnILl0jIozEiKu0Znpkliay';
	const endpoint =
		'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-gvblzlp/endpoint/data/v1/action/find';

	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'api-key': apiKey
			},
			body: JSON.stringify({
				dataSource: 'cluster0',
				database: 'test',
				collection: 'tickets',
				filter: {}
			})
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();

		// Return the fetched data as props to the page
		return {
			voters: data.documents || []
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		return {
			voters: []
		};
	}
};