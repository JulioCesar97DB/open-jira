import { createContext } from 'react';

interface ContextProps {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;

    //Methods
    openSideMenu: () => void;
    closeSideMenu: () => void;

    isAdding: (isAdding: boolean) => void;

    taskDragging: ( taskDragging: boolean ) => void;
}

export const UIContext = createContext({} as ContextProps);