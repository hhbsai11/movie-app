// A slice is the portion of Redux code that relates to a specific set of data and actions 
// within the store 's state. 
// A slice reducer is the reducer responsible 
// for handling actions and updating the data for 
// a given slice.

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const homeSlice = createSlice({
  name: 'home',
  initialState : {
    url : {},
    genres : {}
  },
  reducers: {
  getApiConfiguration : (state, action)=>{
   
       state.url = action.payload
  },

  getGenres :(state, action)=>{
    state.genres = action.payload
  }
  },
})

// Action creators are generated for each case reducer function
export const {getApiConfiguration, getGenres } = homeSlice.actions

export default homeSlice.reducer