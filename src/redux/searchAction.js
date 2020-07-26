import {FETCH_USER_INFO_SUCCESS , FETCH_USER_INFO_FAILURE, FETCH_USER_REPO_SUCCESS, FETCH_USER_REPO_FAILURE} from './searchType';
import axios from 'axios';

export const fetchUserInfo =  (argUserName) =>{
    return dispatch =>{
        axios
        .get(`https://api.github.com/users/${argUserName}`)
        .then(response => {
            const user = response.data;
            dispatch(fetchUserSuccess(user));
            dispatch(fetchUserRepoList(user.repos_url))
        })
        .catch(error => {
             //const errorMsg =  error.message;
             alert("User name not found");
        })
    }
}

export const fetchUserRepoList = (argRepoLink) =>{
    return dispatch =>{
        axios
        .get(argRepoLink)
        .then(response =>{
            const list = response.data;
            if(list.length === 0){
                alert("User do not have repo");
            }
            dispatch(fetchRepoListSuccess(list));
        })
        .catch(error =>{
            //const errorMsg =  error.message;
            alert("No repo found");
        })
    }
}

export const fetchUserSuccess = user =>{
    return{
        type: FETCH_USER_INFO_SUCCESS,
        payload: user,
    }
}
export const fetchUserFailure = error =>{
    return{
        type : FETCH_USER_INFO_FAILURE,
        payload: error,
    }
}

export const fetchRepoListSuccess = list =>{
    return{
        type:FETCH_USER_REPO_SUCCESS,
        payload:list,
    }
}

export const fetchRepoListFailure = error => {
    return{
        type: FETCH_USER_REPO_FAILURE,
        payload:error,
    }
}