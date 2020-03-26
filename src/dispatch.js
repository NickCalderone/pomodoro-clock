import Creator from './creator'
import Actions from './actions'

const inc = (folder, key) => {
        return {
            type: Actions.INC,
            folder: folder,
            key: key
        }
    }

const mapDispatchToProps = (dispatch) => ({
    inc: (folder, key) => dispatch(inc(folder, key))
})

export default mapDispatchToProps