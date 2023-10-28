import { VehicleCard } from '../components/VehicleCard/VehicleCard'
import { FC } from 'react'
import s from './WarshipsCatalog.module.css'
import { FilterBar } from '../components/FilterBar/FilterBar'
import { FilterType, Vehicle } from '../redux/appReducer'
import { useAppSelector } from './store'
import { utils } from '../utils/utils'

export const WarshipsCatalog: FC<WarshipsCatalogType> = ({ vehicles }) => {
    const filter = useAppSelector<FilterType>((state) => state.app.filter)

    const filteredVehicles = utils.filter(vehicles, filter)

    console.log('отфильтрованные :', filteredVehicles)

    return (
        <div className={s.warships_catalog}>
            <div className={s.filter_bar}>
                <FilterBar />
            </div>
            <div className={s.vehicle_cards}>
                {filteredVehicles &&
                    filteredVehicles.map((el) => (
                        <div key={el.id}>
                            <VehicleCard vehicle={el} />
                        </div>
                    ))}
            </div>
        </div>
    )
}

type WarshipsCatalogType = {
    vehicles: Vehicle[]
}
