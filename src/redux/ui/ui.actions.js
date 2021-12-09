import { DRAWER_OPEN } from './ui.types'

export const drawerToggle = (isOpen) => dispatch => {
    dispatch({ type: DRAWER_OPEN, payload: !isOpen })
}