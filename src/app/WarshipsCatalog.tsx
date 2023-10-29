import { VehicleCard } from '../components/VehicleCard/VehicleCard'
import { FC } from 'react'
import s from './WarshipsCatalog.module.css'
import { FilterBar } from '../components/FilterBar/FilterBar'
import { Vehicle } from '../redux/appReducer'

export const WarshipsCatalog: FC<WarshipsCatalogType> = ({ vehicles }) => {
    return (
        <div className={s.warships_catalog}>
            <div className={s.filter_bar}>
                <FilterBar />
            </div>
            <div className={s.vehicle_cards}>
                {vehicles.length !== 0 ? (
                    vehicles.map((el) => (
                        <div key={el.id}>
                            <VehicleCard vehicle={el} />
                        </div>
                    ))
                ) : (
                    <h1 style={{ color: 'white' }}>Vehicles not found :(</h1>
                )}
            </div>
        </div>
    )
}

type WarshipsCatalogType = {
    vehicles: Vehicle[]
}
