import { VehicleCard } from '../components/VehicleCard/VehicleCard'
import { Vehicle, fetchVehicles } from '../redux/appReducer'
import { useAppDispatch, useAppSelector } from './store'
import { useEffect } from 'react'

export const WarshipsCatalog = () => {
      const data = useAppSelector<Vehicle[]>((state) => state.app)
      const dispatch = useAppDispatch()

      useEffect(() => {
            dispatch(fetchVehicles())
      }, [])

      return (
            <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                  {data &&
                        data.map((el) => (
                              <div key={el.id}>
                                    <VehicleCard vehicle={el} />
                              </div>
                        ))}
            </div>
      )
}
