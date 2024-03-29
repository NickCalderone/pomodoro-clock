import Actions from './actions'

const inc = (folder, key) => {
    return {
        type: Actions.INC,
        folder: folder,
        key: key
    }
}
const dec = (folder, key) => ({
    type: Actions.DEC,
    folder: folder,
    key: key
})
const set = (folder, key, value) => ({
    type: Actions.SET,
    folder: folder,
    key: key,
    value: value
})
const flip = (folder) => ({
    type: Actions.FLIP,
    folder: folder
})
const reset = () => ({
    type: Actions.RESET
})

const mapDispatchToProps = (dispatch) => ({
    inc: (folder, key) => dispatch(inc(folder, key)),
    dec: (folder, key) => dispatch(dec(folder, key)),
    set: (folder, key, value) => dispatch(set(folder, key, value)),
    flip: (folder) => dispatch(flip(folder)),
    reset: () => dispatch(reset())
})

export default mapDispatchToProps