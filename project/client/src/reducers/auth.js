import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	ACCOUNT_DELETED,
} from '../actions/types';

const initialState = {
	
	isAuthenticated: null,
	//loading is used to make sure the
	//request is done and we got a response before proceeding
	loading: true,
	user: null,
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: payload,
			};
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false,
			};
		case REGISTER_FAIL:
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case LOGOUT:
		case ACCOUNT_DELETED:
			
			return {
				...state,
		
				isAuthenticated: false,
				loading: false,
			};
		default:
			return state;
	}
}
