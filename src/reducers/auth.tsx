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
    }
};


export type ToggleIsRegistrationType = ReturnType<typeof toggleIsRegistration>
export const toggleIsRegistration = (isRegistration: boolean) =>
    ({type: 'auth/IS-REGISTRATION', isRegistration} as const)



type AuthActionsType =
// SetEmailErrorType
// | SetPasswordErrorType
    | ToggleIsRegistrationType
