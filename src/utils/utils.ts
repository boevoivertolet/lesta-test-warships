import { FilterType, Vehicle } from '../redux/appReducer'

export const utils = {
    filter(arr: Vehicle[], filter: FilterType): Vehicle[] {
        const { level, nation, type } = filter
        return arr.filter((el) => {
            return (
                (level === 0 || el.level === level) &&
                (nation === '' || el.nation.title === nation) &&
                (type === '' || el.type.title === type)
            )
        })
    },
}
