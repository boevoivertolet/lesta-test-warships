import { WarshipsCatalog } from './WarshipsCatalog'
import { useAppDispatch, useAppSelector } from './store'
import { fetchVehicles, Vehicle } from '../redux/appReducer'
import { useEffect } from 'react'

function App() {
    const data = useAppSelector<Vehicle[]>((state) => state.app.vehicles)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (data) {
            dispatch(fetchVehicles())
        }
    }, [])
    return (
        <div>
            <WarshipsCatalog vehicles={data} />
        </div>
    )
}

export default App
