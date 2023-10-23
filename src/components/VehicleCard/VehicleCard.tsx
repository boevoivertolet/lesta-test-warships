import { Vehicle } from '../../redux/appReducer'
import { VehicleTag } from './VehicleTag/VehicleTag'
import s from '../VehicleCard/VehicleCard.module.css'
import {FC} from "react";

export const VehicleCard:FC<WarshipCardType> = ({ vehicle }) => {
      return (
            <div className={s.vehicle_card}>
                  <div  className={s.vehicle_card_vehicle_tag}>
                        <VehicleTag vehicle={vehicle} />
                  </div>
                  <div className={s.vehicle_card_description}>{vehicle.description}</div>
            </div>
      )
}
type WarshipCardType = {
      vehicle: Vehicle
}
//style={{ background: `${vehicle.nation.color}` }}