export const getServerResponse = id => {
	return new Promise(resolve => {
		setTimeout(() => {
			let data = [];
			switch (id) {
				case 0: {
					data = [
						{ value: '00-00', label: '00-00' },
						{ value: '00-11', label: '00-11' },
					];
					break;
				}
				case 1: {
					data = [
						{ value: '11-00', label: '11-00' },
						{ value: '11-11', label: '11-11' },
					];
					break;
				}
				case 2: {
					data = [
						{ value: '22-00', label: '22-00' },
						{ value: '22-11', label: '22-11' },
					];
					break;
				}
				case 3: {
					data = [
						{ value: '33-00', label: '33-00' },
						{ value: '33-11', label: '33-11' },
					];
					break;
				}
				default: {
					data = [
						{ value: '33-00', label: '33-00' },
						{ value: '33-11', label: '33-11' },
					];
					break;
				}
			}

			resolve({
				json: () => Promise.resolve(data),
			});
		}, 1000);
	});
};
