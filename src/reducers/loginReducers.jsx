/**
 * 登录reducer
 * @version 1.0
 * @author hzzhuzhenyu(hzzhuzhenyu@corp.netease.com)
 * Created by hzzhuzhenyu on 2016/4/13.
 */

import * as actionType from '../constants/loginConstants'


const initialState = {
    isLogining : false,
    status : false,
    err : ''
};

export default function login(state = initialState, action) {
    switch (action.type) {
        case actionType.LOGIN_REQUEST_BEGIN:
            return Object.assign({},state,{
                isLogining : true
            });
        case actionType.LOGIN_REQUEST_SUCCESS:
            return  Object.assign({},state,{
                isLogining : false,
                status : true
            });

        case actionType.LOGIN_REQUEST_SUCCESS:
            return Object.assign({},state,{
                isLogining : false,
                status : false,
                err : action.errMsg
            });

        default:
            return state
    }
}
