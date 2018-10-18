import * as types from '../constants/ActionTypes';

function addFriend(name) {
    return {
        type: types.ADD_FRIEND,
        name
    };
}

function deleteFriend(id) {
    return {
        type: types.DELETE_FRIEND,
        id
    };
}

export default {addFriend, deleteFriend};
