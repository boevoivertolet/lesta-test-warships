import { WarshipsCatalog } from './WarshipsCatalog'
import { useAppDispatch, useAppSelector } from './store'
import { fetchVehicles, FilterType, Vehicle } from '../redux/appReducer'
import { useEffect } from 'react'
import { utils } from '../utils/utils'

function App() {
    const data = useAppSelector<Vehicle[]>((state) => state.app.vehicles)
    const dispatch = useAppDispatch()
    const filter = useAppSelector<FilterType>((state) => state.app.filter)
    const filteredVehicles = utils.filter(data, filter)

    useEffect(() => {
        if (data) {
            dispatch(fetchVehicles())
        }
    }, [])
    return (
        <div>
            <WarshipsCatalog vehicles={filteredVehicles} />
        </div>
    )
}

export default App
