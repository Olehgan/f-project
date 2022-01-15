import {Dispatch} from "react";
import {registerApi, RegisterRequestType} from "../api/register-api";

const initialState = {
    // emailError: null as null | string,
    // passwordError: null as null | string,
    isRegistration: false,
    isFetching: false,
    errorRequestValue: null as null | string
}
type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        // case 'auth/EMAIL-ERROR':
        //     return {...state, emailError: action.error}
        // case  'auth/PASSWORD-ERROR':
        //     return {...state, passwordError: action.error}
        case 'auth/IS-REGISTRATION' :
            return {...state, isRegistration: action.isRegistration}
        case 'auth/TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}

        default:
            return state
    }
};
// export type SetEmailErrorType = ReturnType<typeof setEmailError>
// export const setEmailError = (error: null | string) =>
//     ({type: 'auth/EMAIL-ERROR', error} as const)
//
// export type SetPasswordErrorType = ReturnType<typeof setPasswordError>
// export const setPasswordError = (error: null | string) =>
//     ({type: 'auth/PASSWORD-ERROR', error} as const)

export type ToggleIsRegistrationType = ReturnType<typeof toggleIsRegistration>
export const toggleIsRegistration = (isRegistration: boolean) =>
    ({type: 'auth/IS-REGISTRATION', isRegistration} as const)

export type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) =>
    ({type: 'auth/TOGGLE-IS-FETCHING', isFetching} as const)


type AuthActionsType =
// SetEmailErrorType
// | SetPasswordErrorType
    | ToggleIsRegistrationType
    | ToggleIsFetchingType
