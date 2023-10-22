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
            <div>
                  {data.map((el) => (
                        <div key={el.title}>{el.title}</div>
                  ))}
            </div>
      )
}
