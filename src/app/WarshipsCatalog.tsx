import { VehicleCard } from '../components/VehicleCard/VehicleCard'
import { Vehicle, fetchVehicles } from '../redux/appReducer'
import { useAppDispatch, useAppSelector } from './store'
import { useEffect } from 'react'
import s from './WarshipsCatalog.module.css'

export const WarshipsCatalog = () => {
      const data = useAppSelector<Vehicle[]>((state) => state.app)
      const dispatch = useAppDispatch()

      useEffect(() => {
            dispatch(fetchVehicles())
      }, [])

      return (
            <div className={s.warships_catalog}>
                  {data &&
                        data.map((el) => (
                              <div key={el.id}>
                                    <VehicleCard vehicle={el} />
                              </div>
                        ))}
            </div>
      )
}
