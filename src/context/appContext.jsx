import { createContext, useContext, useEffect, useState } from "react";

const appCtx = createContext({
    toggleTheme: () => { },
    toggleSidebar: () => { },
    sidebarState: Boolean,
    themeState: String,
    searchPanelOpen: Boolean,
    setSearchPanelOpen: () => { },
    toggleSearchPanel: () => { }
});


export const useAppCtx = () => useContext(appCtx);


const AppContextProvider = ({ children }) => {

    const [sidebarState, setSidebarState] = useState(true);
    const [themeState, setThemeState] = useState("light");

    const [searchPanelOpen, setSearchPanelOpen] = useState(false);

    const toggleTheme = () => {
        const body = document.getElementsByTagName("body")[0];
        const getTheme = body.getAttribute("data-theme");

        if (getTheme === "dark") {
            body.removeAttribute("data-theme");
            localStorage.setItem("__theme", "light");
            setThemeState("dark");
        } else {
            body.setAttribute("data-theme", "dark");
            localStorage.setItem("__theme", "dark");
            setThemeState("light");
        }
    }

    const toggleSidebar = () => {
        return setSidebarState(p => !p);
    }
    const toggleSearchPanel = () => {
        return setSearchPanelOpen(p => !p);
    }

    useEffect(() => {
        const theme = localStorage.getItem("__theme");
        if (!theme) return;
        if (theme === "dark") setThemeState("dark");
        document.getElementsByTagName("body")[0]?.setAttribute("data-theme", theme);
    }, [])

    return (
        <appCtx.Provider value={{
            toggleTheme,
            sidebarState,
            setSidebarState,
            toggleSidebar,
            themeState,
            searchPanelOpen,
            setSearchPanelOpen,
            toggleSearchPanel
        }}>
            {children}
        </appCtx.Provider>
    )
}

export default AppContextProvider;