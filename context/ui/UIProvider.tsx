import { FC, useReducer, PropsWithChildren } from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './uiReducer';

export interface UIState {
    sidemenuOpen: boolean;
    isAddingEntry:boolean;
    isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    isAddingEntry: false,
    isDragging: false,
}

export const UIProvider:FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const openSideMenu = () => dispatch({ type: 'UI - Open Sidebar' })
    
    const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' })
    
    const isAdding = ( isAdding: boolean) => dispatch({ type: 'UI - Is Adding Entry', payload: isAdding })

    const taskDragging = ( taskDragging: boolean ) => dispatch({ type: 'UI - Is Dragging a Task', payload: taskDragging})

    return (
        <UIContext.Provider value={{
            ...state,

            //Methods
            openSideMenu,
            closeSideMenu,
            isAdding,
            taskDragging,
        }}>
            { children }
        </UIContext.Provider>
    )
}