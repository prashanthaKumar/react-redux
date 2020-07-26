import {FETCH_USER_INFO_SUCCESS, FETCH_USER_INFO_FAILURE, FETCH_USER_REPO_SUCCESS, FETCH_USER_REPO_FAILURE} from './searchType';
const initialState = {
    user :{},
    repoList:{},
}

const searchReducer = (state = initialState, action) =>{

    switch(action.type){

        case  FETCH_USER_INFO_SUCCESS : return{
            ...state,
            user : action.payload,
        }

        case FETCH_USER_INFO_FAILURE : return{
            ...state,
            user:[],
            error:action.payload
        }

        case FETCH_USER_REPO_SUCCESS: return{
            ...state,
            repoList: action.payload,
        }

        case FETCH_USER_REPO_FAILURE : return{
            ...state,
            repoList:[],
            error: action.payload
        }

        default : return state

    }

}

export default searchReducer;
