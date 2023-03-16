import { UIState } from './UIProvider';

type UIType = 
    | { type: 'UI - Open Sidebar' }
    | { type: 'UI - Close Sidebar' }
    | { type: 'UI - Is Adding Entry', payload: boolean}
    | { type: 'UI - Is Dragging a Task', payload: boolean}

export const uiReducer = ( state: UIState, action: UIType ): UIState => {
    
    switch (action.type) {
        case 'UI - Open Sidebar':
            return {
                ...state,
                sidemenuOpen: true,
            }
        case 'UI - Close Sidebar':
            return {
                ...state,
                sidemenuOpen: false,
            }

        case 'UI - Is Adding Entry':
            return {
                ...state,
                isAddingEntry: action.payload
            }

        case 'UI - Is Dragging a Task':
            return {
                ...state,
                isDragging: action.payload
            }
    
        default:
            return state;
    }
}