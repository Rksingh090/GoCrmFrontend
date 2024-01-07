export const getCommandList = ({
    setSearchPanelOpen,
    toggleTheme,
    navigate
}) => {
    return [
    {
        cmd: ["Escape"],
        short: "Esc",
        func: () => setSearchPanelOpen ? setSearchPanelOpen(false) : {},
        description: "Close the Search Panel",
    },
    {
        cmd: ["Control", "k"],
        short: "Ctrl + k",
        func: () => setSearchPanelOpen ? setSearchPanelOpen(true) : {},
        description: "Opens the Search Panel",
    },
    {
        cmd: ["Alt", "x"],
        short: "Alt + x",
        func: () => toggleTheme ? toggleTheme() : {},
        description: "Toggle theme mode",
    },
    {
        cmd: ["Control", "1"],
        short: "Ctrl + 1",
        func: () => navigate ? navigate("/admin") : {},
        description: "Opens dashboard page",
    },
    {
        cmd: ["Control", "2"],
        short: "Ctrl + 2",
        func: () => navigate ? navigate("/admin/contacts") : {},
        description: "Opens contacts page",
    },
    {
        cmd: ["Control", "3"],
        short: "Ctrl + 3",
        func: () => navigate ? navigate("/admin/leads"): {},
        description: "Opens leads page",
    },
    {
        cmd: ["Control", "4"],
        short: "Ctrl + 4",
        func: () => navigate ? navigate("/admin/accounts"): {},
        description: "Opens accounts page",
    },
    {
        cmd: ["Control", "5"],
        short: "Ctrl + 5",
        func: () => navigate ? navigate("/admin/report"): {},
        description: "Opens report page",
    },
    {
        cmd: ["Control", "6"],
        short: "Ctrl + 6",
        func: () => navigate ? navigate("/admin/hrm"): {},
        description: "Opens hrm page",
    },
    {
        cmd: ["Control", "m"],
        short: "Ctrl + m",
        func: () => navigate ? navigate("/admin/profile"): {},
        description: "Opens profile page",
    },
    {
        cmd: ["Control", "h"],
        short: "Ctrl + h",
        func: () => navigate ? navigate("/admin/support"): {},
        description: "Opens support page",
    },
    {
        cmd: ["Control", "s"],
        short: "Ctrl + s",
        func: () => navigate ? navigate("/admin/settings"): {},
        description: "Opens settings page",
    },
    {
        cmd: ["Control", "/"],
        short: "Ctrl + /",
        func: () => navigate ? navigate("/admin/shortcuts"): {},
        description: "Opens shortcuts page",
    },
]
};