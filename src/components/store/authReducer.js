
const initState = {
    authError: null
};

const authReducer = (state = initState,action)  => {
    switch(action.type)
    {
        case 'SIGNOUT_SUCCESS':
            console.log('sign out success');
            return state;
        case 'LOGIN_ERROR':
            console.log('failure');
            return {
                ...state,
                authError:'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_SUCCESS':
            console.log('signup error');
            return {
                ...state,
                authError: action.err.message
            }
        default:
          return state;
    }
   return state;
}

export default authReducer;