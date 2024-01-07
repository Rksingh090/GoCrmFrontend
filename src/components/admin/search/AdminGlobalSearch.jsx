import React, { useEffect, useRef, useState } from 'react'

import "./adminglobalsearch.css";

const AdminGlobalSearch = ({ open }) => {
    const searchInputRef = useRef(null);
    const [inputVal, setInputVal] = useState("");

    useEffect(() => {
        if(searchInputRef && searchInputRef.current){
            searchInputRef.current.focus();
        }
    }, [open])

    return (
        <div className={`AdminGlobalSearch ${open ? "open" : "close"}`}>
            <div className="AdminGlobalSearchBox">
                <div className="SearchInput">
                    <input
                        type="text"
                        className='fontMD'
                        ref={searchInputRef} 
                        autoFocus={true}
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        placeholder='Search'
                    />
                    <span className='codeArea em v2'>Esc</span>
                </div>

                <div className="AdminGlobalSearchRes">

                </div>

                <div className='AdminGlobalSearchFooter'>
                    <span>Open Search with: <span className='codeArea'>Ctrl + k</span></span>
                </div>
            </div>
        </div>
    )
}

export default AdminGlobalSearch