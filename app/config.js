(function(){

'use strict';
angular.module('ApplicationConfig', [])
.value('AppConfig', {
	loginUrl: 'https://localhost:3000/authenticate/login',
	signupUrl: 'https://localhost:3000/authenticate/register',
	msg: {
		CREATING_NEW_USER: 'Creating new user',
		USER_CREATED: 'User created',
		CREATE_USER_ERROR: 'Can\'t create new user',
		UNAUTHORIZED: 'Unauthorized',
		FORCE_OUT_UNAUTHORIZED: 'You have been logout due to Unauthorized. Please re-login!',
		USER_EXISTS: 'Email has been exists.',
		NOT_FILL_ALL_REQUIRED_FIELD: 'You aren\'t fill all required fields',
	},
	broadcast: {
		Unauthorized: 'Unauthorized',
	},
	sqlError: {
		ER_DUP_ENTRY: 1062
	}
});

})();

