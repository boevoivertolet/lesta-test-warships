import { Vehicle } from '../../../redux/appReducer'
import s from './VehicleTitle.module.css'
import {FC} from "react";

export const VehicleTitle:FC<VehicleTitleType> = ({ vehicle }) => {
      return (
            <div>
                  <div className={s.icon_lvl_title}>
                        <div>
                              <img src={vehicle.type.icons.default} alt='#' />
                        </div>
                        <div>{vehicle.level}</div>
                        <div>{vehicle.title}</div>
                  </div>
                  <div>
                        <div>{vehicle.type.name}</div>
                  </div>
            </div>
      )
}

type VehicleTitleType = {
      vehicle: Vehicle
}
