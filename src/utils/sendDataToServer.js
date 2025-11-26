import { transformData } from './';

export const sendDateToServer = (data, images, navigate) => {
	console.log(data);
	console.log(images);
	const postData = transformData(data, images);
	console.log('Данные для отправки:', postData);
	navigate('/loading');
	// fetch("https://octs.guap.ru/services/n8n/webhook/webhook/05b6e16a-be07-4613-855d-fd185fae3a77", {
	fetch('', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ postData }),
	}).then(r => {
		console.log(r);
		if (r.status === 200) {
			navigate('/success');
		}
	});
};
