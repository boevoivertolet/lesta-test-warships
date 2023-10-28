import { Vehicle } from "../../../redux/appReducer";
import s from "./VehicleTitle.module.css";
import { FC } from "react";

export const VehicleTitle: FC<VehicleTitleType> = ({ vehicle }) => {
  function toRoman(arabic: number) {
    if (arabic === 1) return "I";
    if (arabic === 2) return "II";
    if (arabic === 3) return "III";
    if (arabic === 4) return "IV";
    if (arabic === 5) return "V";
    if (arabic === 6) return "VI";
    if (arabic === 7) return "VII";
    if (arabic === 8) return "VIII";
    if (arabic === 9) return "IX";
    if (arabic === 10) return "X";
  }

  const lvl = toRoman(vehicle.level); // перевод в римские =)

  return (
    <div>
      <div className={s.icon_lvl_title}>
        <div>
          <img
            src={
              vehicle.isPremium
                ? vehicle.type.icons.premium
                : vehicle.type.icons.default
            }
            alt="#"
          />
        </div>
        <div>{lvl}</div>
        <div>{vehicle.title}</div>
      </div>
      <div>
        <div style={{ fontSize: "18px" }}>{vehicle.type.title}</div>
      </div>
    </div>
  );
};

type VehicleTitleType = {
  vehicle: Vehicle;
};
