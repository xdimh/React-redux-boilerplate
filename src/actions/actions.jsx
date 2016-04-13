import $ from 'jquery';
import * as actionType from '../constants/loginConstants';

export function loginRequestBegin() {
    return {
        type: actionType.LOGIN_REQUEST_BEGIN
    }
}

export function loginRqstSuccess(json) {
    return {
        type: types.LOGIN_REQUEST_SUCCESS,
        json
    }
}

export function loginRqstFail(json) {
    return {
        type: types.LOGIN_REQUEST_FAIL,
        json
    }
}

export function issueLoginRequest(email,passwd) {
    return function (dispatch) {
        dispatch(loginRequestBegin())
        return $.ajax({
            url : 'http://localhost:9000/login',
            type : 'get',
            data : {},
            dataType : 'json'
        }).success(function(json){
            dispatch(loginRqstSuccess(json));
        }).fail(function(json){
            dispatch(loginRqstFail(json));
        })
    }
}