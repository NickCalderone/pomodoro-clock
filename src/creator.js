import Actions from './actions'

const Creator = {
    incDec(folder, key, value){
        const incrementedValue = value === true ? this.props.store[folder][key] + 1 : this.props.store[folder][key] - 1
        return {
            type: Actions.INCDEC,
            folder: folder,
            key: key,
            value: incrementedValue
        }
    }
}
export default Creator