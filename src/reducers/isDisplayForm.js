import * as types from './../constants/ActionTypes';


//tra ve mang cos du lieu hoac mang rong
var initialState = false; //close form
var myReducer = (state = initialState,action) =>{
	switch(action.type){
		case types.TOGGLE_FORM :
			return !state;
		case types.OPEN_FORM :
			state = true;
			return state;
		case types.CLOSE_FORM :
		state = false;
			return state;		
		default : return state;
	}
};

export default myReducer;	   