import {LOGIN_EMAIL_CHANGE, LOGIN_PASSWORD_CHANGE, } from './actionTypes';

export const changeLoginEmail = (email) => {
    return {
      type: LOGIN_EMAIL_CHANGE,
      payload: {
        email,
      },
    }
  }

export const changeLoginPassword = (password) => {
  return {
    type: LOGIN_PASSWORD_CHANGE,
    payload: {
      password,
    },
  }
}