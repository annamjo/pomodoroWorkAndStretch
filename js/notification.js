// ask for camera & microphone
navigator.permissions
	.query({ name: 'microphone' })
	.then((permissionObj) => {
		console.log(permissionObj.state);
	})
	.catch((error) => {
		console.log('Got error :', error);
	});

navigator.permissions
	.query({ name: 'camera' })
	.then((permissionObj) => {
		console.log(permissionObj.state);
	})
	.catch((error) => {
		console.log('Got error :', error);
	});
