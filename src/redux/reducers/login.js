import { LOGIN_EMAIL_CHANGE, LOGIN_PASSWORD_CHANGE} from '../actions'; 

const INITIAL_STATE = {
    email: '',
    password: '',

}
const login = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOGIN_EMAIL_CHANGE:
            return {
              ...state,
              email: action.payload.email,
            }
        case LOGIN_PASSWORD_CHANGE:
          return {
            ...state,
            password: action.payload.password,
          }
          default:
            return state;
    }
    
}
export default login
