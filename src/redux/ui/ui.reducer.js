import { DRAWER_OPEN } from './ui.types'

const initialState = {
    drawer: { open: false }
}

export default function uiReducer(state = initialState, action) {
    switch (action.type) {
        case DRAWER_OPEN:
            return {
                ...state,
                drawer: {
                    ...state.drawer,
                    open: action.payload
                }
            }
        default:
            return state;
    }
}