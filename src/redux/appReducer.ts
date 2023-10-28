import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../app/store'
import { api } from '../api/api'

const slice = createSlice({
    name: 'warships_catalog',
    initialState: {
        vehicles: [] as Vehicle[],
        filter: {
            level: 0,
            nation: '',
            type: '',
        } as FilterType,
    },
    reducers: {
        setVehicles: (state, action: PayloadAction<{ vehicles: Vehicle[] }>) => {
            state.vehicles.push(...action.payload.vehicles)
        },
        setFilterValues: (
            state,
            action: PayloadAction<{
                filter: { level: number; nation: string; type: string }
            }>,
        ) => {
            return {
                ...state,
                filter: {
                    level: action.payload.filter.level,
                    nation: action.payload.filter.nation,
                    type: action.payload.filter.type,
                },
            }
        },
    },
})

export const appReducer = slice.reducer
export const appActions = slice.actions

//thunks

export const fetchVehicles = (): AppThunk => (dispatch) => {
    api.getVehicles().then((res) => {
        const vehicles: Vehicle[] = res.vehicles
        dispatch(appActions.setVehicles({ vehicles }))
    })
}

//Interfaces

interface Icon {
    large: string
    medium: string
}

interface VehicleType {
    name: string
    title: string
    icons: {
        default: string
        premium: string
    }
}

interface Nation {
    name: string
    title: string
    color: string
    icons: {
        small: string
        medium: string
        large: string
    }
}

export interface Vehicle {
    isPremium: boolean
    id: string
    title: string
    description: string
    icons: Icon
    level: number
    type: VehicleType
    nation: Nation
}

export type FilterType = { level: number; nation: string; type: string }
