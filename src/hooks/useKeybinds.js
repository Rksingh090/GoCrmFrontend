import { useEffect, useState } from 'react';
import _, { forEach } from 'lodash';

const useKeybinds = (commands) => {

    const [keypress, setKeypress] = useState([]);
    const holdOn = ['Control', 'Alt', 'Shift', 'CapsLock'];


    useEffect(() => {
        function hasDuplicates(array) {
            return new Set(array).size !== array.length;
        }

        const hasHoldOnInKeypress = (keyArr) => {
            let inc = false;
            keyArr.every(key => {
                if (holdOn.includes(key)) {
                    inc = true;
                    return false;
                }
                return true;
            })
            return inc;
        }

        const isOurCMD = (keyBinds) => {
            let isOurCmdKeybinds = false;
            commands.every(cmd => {
                if(_.isEqual(cmd.cmd.sort(), keyBinds.sort())){
                    isOurCmdKeybinds = true;
                    return false;
                }
                return true;
            });
            return isOurCmdKeybinds;
        }

    

        const onKeyDown = (e) => {
            setKeypress((prev) => {
                if (hasHoldOnInKeypress(prev) && isOurCMD([...prev, e.key])) {
                    e.preventDefault();
                }
                if (hasDuplicates(prev)) {
                    return [e.key];
                }
                if (holdOn.includes(e.key)) {
                    return [...prev, e.key];
                } else {
                    return [...prev, e.key];
                }
            });
        };

        const onKeyUp = (e) => {
            setKeypress((prev) => {
                if (hasHoldOnInKeypress(prev) && isOurCMD([...prev, e.key])) {
                    e.preventDefault();
                }
                if (holdOn.includes(e.key) && prev.includes(e.key)) {
                    const removeI = prev.filter((i) => i !== e.key);
                    return removeI;
                } else {
                    (commands || []).every((cI) => {
                        if (_.isEqual(cI.cmd.sort(), prev.sort())) {
                            cI.func && cI.func();
                            return false;
                        }
                        return true;
                    });
                    const getHoldOnly = prev.filter(key => holdOn.includes(key));
                    return getHoldOnly;
                }
            });
        };

        const clearKeyPress = (e) => {
            setKeypress(p => []);
        }

        window.addEventListener('blur', clearKeyPress);
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);
        return () => {
            window.removeEventListener('blur', clearKeyPress);
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('keyup', onKeyUp);
        };
    }, [commands]);

    return keypress;
};

export default useKeybinds;
