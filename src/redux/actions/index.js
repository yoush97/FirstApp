import {LOGIN_EMAIL_CHANGE, LOGIN_PASSWORD_CHANGE, ON_CHANGE_EMAIL,
  EMAIL_ERROR, PASS_ERROR, ERROR_MESSAGE, ERROR_MESSAGE_2 } from './actionTypes';

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

export const onChangeEmail = (email) => {
  return {
    type: ON_CHANGE_EMAIL,
    payload: {
      email,
    },
  }
}

export const emailError = (email) => {
  return {
    type: EMAIL_ERROR,
    payload: {
      email,
    },
  }
}

export const passError = (password) => {
  return {
    type: PASS_ERROR,
    payload: {
      password,
    },
  }
}

export const errorMessage = (password) => {
  return {
    type: ERROR_MESSAGE,
    payload: {
      email,
    },
  }
}

export const errorMessage_2 = (email, password) => {
  return {
    type: ERROR_MESSAGE_2,
    payload: {
      email,
      password,
    },
  }
}

