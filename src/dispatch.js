import Creator from './creator'
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

const mapDispatchToProps = (dispatch) => ({
    inc: (folder, key) => dispatch(inc(folder, key)),
    dec: (folder, key) => dispatch(dec(folder, key))
})

export default mapDispatchToProps