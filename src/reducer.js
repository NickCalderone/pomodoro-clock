import Actions from './actions'

const initialState = {
    timers: {session: 25, break: 5},
    display: {min: 25, sec: 0},
    flip: true,
    started: false
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
            return Object.assign({}, state, {[action.folder]: !state[action.folder]})
        case Actions.RESET:
            return initialState
        default: 
            return state
    }
}
export default reducer