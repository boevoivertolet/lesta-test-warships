import { Vehicle } from '../../../redux/appReducer'
import s from './VehicleTag.module.css'
import {VehicleTitle} from "../VehicleTitle/VehicleTitle";
import {FC} from "react";


export const VehicleTag:FC<VehicleTagType> = ({ vehicle }) => {
      return (
            <div  className={s.vehicle_tag}>
                  <div className={s.vehicle_country_tag}>
                        <img src={vehicle.nation.icons.large} alt='#' />
                  </div>
                  <div className={s.vehicle_type_icon}>
                        <img src={vehicle.icons.medium} alt='#' />
                  </div>
                  <div className={s.vehicle_title}>
                        <VehicleTitle vehicle={vehicle} />
                  </div>
            </div>
      )
}

type VehicleTagType = {
      vehicle: Vehicle
}
