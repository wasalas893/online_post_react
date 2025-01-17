import {auth,googleProvider} from '../firebase';

import {GET_USER,USER_STATUS} from '../actionTypes';

export function getUser(){

    
       
    return dispatch=>{

        //loading status true
       dispatch({
        type:USER_STATUS,
        payload:true
    });
        auth.onAuthStateChanged(user=>{
            dispatch({
                type: GET_USER,
                payload:user

            });
            //loading false
            dispatch({
                type:USER_STATUS,
                payload:false
            });
            
        });
    }
}

export function googleLogin(){
    return dispatch=>auth.signInWithPopup(googleProvider);
}

export function logout(){
    return dispatch=>auth.signOut();
}