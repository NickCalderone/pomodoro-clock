import Actions from './actions'

const initialState = {
    timers: {min: 25, sec: 5},
    display: {min: 25, sec: 5}
}

const reducer = function(state = initialState, action){
    switch (action.type){
        case Actions.INC:
            return Object.assign({}, state, Object.assign({}, state[action.folder], {
                [action.folder]: Object.assign({}, state[action.folder], {[action.key]: state[action.folder][action.key] + 1})
            }))
        default: 
            return state
    }
}
export default reducer