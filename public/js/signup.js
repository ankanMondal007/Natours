/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const signup = async (name ,email, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: 'POST',
      // url: 'http://127.0.0.1:3000/api/v1/users/signup',
      url: '/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Signed up successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
    // console.log(res);
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      // url: 'http://127.0.0.1:3000/api/v1/users/logout'
      url: '/api/v1/users/logout'
    });
    if ((res.data.status = 'success')) location.reload(true);
  } catch (err) {
    // console.log(err.response);
    showAlert('error', 'Error logging out! Try again.');
  }
};
