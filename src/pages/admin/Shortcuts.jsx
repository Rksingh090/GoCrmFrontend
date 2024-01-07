import React from 'react'
import "../../styles/admin/shortcuts.css"
import { getCommandList } from '../../constant/commands';
import { useAppCtx } from '../../context/appContext';
import { useNavigate } from 'react-router-dom';

const Shortcuts = () => {
    const {
        setSearchPanelOpen,
        toggleTheme
    } = useAppCtx();

    const navigate = useNavigate();
    const commands = getCommandList({
        navigate,
        setSearchPanelOpen,
        toggleTheme
    });



    return (
        <div className='ShortCutsPage'>
            <h2 className='fontXXXL'>Shortcuts</h2>
            <p className='ShortCutPageDescription'>
                This page provides a comprehensive list of keyboard shortcuts available within <span className='codeArea v2'>GoCRM</span>. These shortcuts are designed to enhance your productivity and streamline navigation and tasks within the application.
            </p>

            <div className="responsiveTable ShortCutPageTableRS">
                <table className='CustomTableX ShortCutPageTable THStart'>
                    <thead>
                        <tr>
                            <th>Shortcufts</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {commands.map((cmdItem, idx) => {
                            return (
                                <tr key={idx}>
                                    <td><span onClick={cmdItem?.func} className="cursorPointer codeArea v2">{cmdItem?.short}</span></td>
                                    <td className='fontMD text-emphasis'>{cmdItem?.description}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Shortcuts