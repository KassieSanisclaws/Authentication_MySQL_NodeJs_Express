import Axios from 'axios';
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from '../Constants/userConstants';


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const register = ( email, password) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { email, password } });
    try {
        const { data } = await Axios.post('/api/user/register', {
           email,         
           password,
        });
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
       dispatch({
           type: USER_REGISTER_FAIL,
           payload: error.response && error.response.data.message
           ? error.response.data.message
           : error.message,
       });
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const login =  (email, password) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST, payload: { email, password } });
    try {
        const { data } = await Axios.post('/api/user/login', {email, password});
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
       dispatch({
           type: USER_LOGIN_FAIL,
           payload: error.response && error.response.data.message
           ? error.response.data.message
           : error.message,
       });
    }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const logout = () => (dispatch) => {
        localStorage.removeItem('userInfo');
        dispatch({ type: USER_LOGOUT});
    };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


