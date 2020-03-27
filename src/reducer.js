import Actions from './actions'

const initialState = {
    timers: {session: 2, break: 1},
    display: {min: 2, sec: 5},
    flip: true
} 
const reducer = function(state = initialState, action){
    switch (action.type){
        case Actions.INC:
            return Object.assign({}, state, Object.assign({}, state[action.folder], {
                [action.folder]: Object.assign({}, state[action.folder], {[action.key]: state[action.folder][action.key] + 1})
            }))
        case Actions.DEC:
            return Object.assign({}, state, Object.assign({}, state[action.folder], {
                [action.folder]: Object.assign({}, state[action.folder], {[action.key]: state[action.folder][action.key] - 1})
            }))
        case Actions.SET:
            return Object.assign({}, state, Object.assign({}, state[action.folder], {
                [action.folder]: Object.assign({}, state[action.folder], {[action.key]: action.value})
            }))
        case Actions.FLIP:
            return Object.assign({}, state, {flip: !state.flip})
        default: 
            return state
    }
}
export default reducer