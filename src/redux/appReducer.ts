import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../app/store'
import { api } from '../api/api'

const slice = createSlice({
      name: 'warships_catalog',
      initialState: [] as Vehicle[],
      reducers: {
            setVehicles: (state, action: PayloadAction<{ vehicles: Vehicle[] }>) => {
                  state.push(...action.payload.vehicles)
            },
      },
})

export const appReducer = slice.reducer
export const appActions = slice.actions
export type AppInitialState = ReturnType<typeof slice.getInitialState>

//thunks
export const fetchVehicles = (): AppThunk => (dispatch) => {
      api.getVehicles().then((res) => {
            const vehicles: Vehicle[] = res.vehicles
            dispatch(appActions.setVehicles({ vehicles }))
            return vehicles
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
      isPremium:boolean
      id: string
      title: string
      description: string
      icons: Icon
      level: number
      type: VehicleType
      nation: Nation
}
