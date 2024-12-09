import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PersonItem {
		employee: string,
		name: string,
		note: string,
		num: number,
		qc: string
}

export PersonState {
	person: PersonItem[]
}

const initialState: PersonState = {
	person: [],
}

export const personSlice = createSlice({
	name: 'Person',
	initialState,
	reducers: {
	handleEnding: (state, action: PayloadAction<PersonItem>) => {
	state.value += 1
	},
	decrement: (state) => {
	state.value -= 1
	},
	incrementByAmount: (state, action: PayloadAction<number>) => {
	state.value += action.payload
	},
	},
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer