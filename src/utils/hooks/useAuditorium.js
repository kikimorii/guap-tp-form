import { useState } from 'react';

export const useAuditorium = (setValue, getServerResponse) => {
	const [auditoriumList, setAuditoriumList] = useState(null);

	const changeAuditorium = async id => {
		setValue('auditorium', null);
		setAuditoriumList(null);
		try {
			const serverResponse = await getServerResponse(id);
			const auditoriumList = await serverResponse.json();
			setAuditoriumList(auditoriumList);
		} catch (e) {
			console.log(e);
		}
	};

	return { auditoriumList, changeAuditorium, setAuditoriumList };
};
