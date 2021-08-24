import React, { useState, useContext } from 'react'

const AppContext=React.createContext();
const AppProvider=({children})=>{

    const [isModalOpen,isSetModalOpen] = useState(false);
    const [isSidebarOpen,isSetSidebarOpen] = useState(false);

    const showModal=()=>{
        isSetModalOpen(true);
    }
    const closeModal=()=>{
        isSetModalOpen(false);
    }

      const showSidebar=()=>{
        isSetSidebarOpen(true);
    }
    const closeSidebar=()=>{
        isSetSidebarOpen(false);
    }


    return(
        <AppContext.Provider value={
            {
            showModal,closeModal,isModalOpen,showSidebar,closeSidebar,isSidebarOpen
            }
        }>
             {children}
        </AppContext.Provider>
    )


}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export { AppContext, AppProvider };