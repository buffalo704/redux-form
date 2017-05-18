/**
 * Created by scribbleLive on 5/17/2017.
 */
import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
    case FETCH_POSTS:
        console.log(action.payload.data);
        return  _.mapKeys(action.payload.data, 'id');
    default:
        return state;
    }
}