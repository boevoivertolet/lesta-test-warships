import React, { ChangeEvent, FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/store'
import { appActions, FilterType } from '../../redux/appReducer'

export const FilterBar: FC<FilterBarType> = (props) => {
    const dispatch = useAppDispatch()
    const filter = useAppSelector<FilterType>((state) => state.app.filter)

    const onChangeLevelHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const { id, value } = e.target
        if (id === '1') {
            dispatch(
                appActions.setFilterValues({
                    filter: {
                        level: Number(value),
                        nation: filter.nation,
                        type: filter.type,
                    },
                }),
            )
        }
    }
    const onChangeNationHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const { id, value } = e.target
        if (id === '2') {
            dispatch(
                appActions.setFilterValues({
                    filter: {
                        level: filter.level,
                        nation: value,
                        type: filter.type,
                    },
                }),
            )
        }
    }
    const onChangeTypeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const { id, value } = e.target
        if (id === '3') {
            dispatch(
                appActions.setFilterValues({
                    filter: {
                        level: filter.level,
                        nation: filter.nation,
                        type: value,
                    },
                }),
            )
        }
    }

    return (
        <div>
            <div>
                <select onChange={onChangeLevelHandler} name="level" id="1">
                    <option value="0">level</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div>
                <select onChange={onChangeNationHandler} name="nation" id="2">
                    <option value="">nation</option>
                    <option value="Japan">Japan</option>
                    <option value="U.S.A.">U.S.A.</option>
                    <option value="U.S.S.R.">U.S.S.R.</option>
                    <option value="Germany">Germany</option>
                    <option value="U.K.">U.K.</option>
                    <option value="France">France</option>
                    <option value="Pan-Asia">Pan-Asia</option>
                    <option value="Italy">Italy</option>
                    <option value="Commonwealth">Commonwealth</option>
                    <option value="Pan-America">Pan-America</option>
                    <option value="Europe">Europe</option>
                    <option value="The Netherlands">The Netherlands</option>
                    <option value="Spain">Spain</option>
                </select>
            </div>
            <div>
                <select onChange={onChangeTypeHandler} name="type" id="3">
                    <option value="">type</option>
                    <option value="Submarine">Submarine</option>
                    <option value="Destroyer">Destroyer</option>
                    <option value="Cruiser">Cruiser</option>
                    <option value="Battleship">Battleship</option>
                    <option value="Aircraft Carrier">Aircraft Carrier</option>
                </select>
            </div>
        </div>
    )
}
type FilterBarType = {}
