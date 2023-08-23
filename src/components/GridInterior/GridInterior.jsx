import React, { useState, useMemo } from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { countries } from '../Data/countries';

import { Modal } from '@mui/material';
import styles from './GridInterior.module.css';
import ItemSelector from '../ItemSelector/ItemSelector';

const GridInterior = ({ topicX, topicY }) => {
    const [open, setOpen] = useState(false);
    const [isSelectionCorrect, setIsSelectionCorrect] = useState(false);
    const [selection, setSelection] = useState(null);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const selectedDependencies = useMemo(() => {
        console.log('selection', selection)
        console.log('coutnries', countries)

        const filteredDependencies = countries.filter(item => item.value === selection?.value)
        console.log('filtered dependencies', filteredDependencies)
        const values = filteredDependencies.map(item => item.label)
        console.log('values', values)
        return values
    }, [selection] 

    )

    useMemo(() => { 
        if (selectedDependencies.includes(topicX) && selectedDependencies.includes(topicY)) {

            setIsSelectionCorrect(true)
        } else {
            setIsSelectionCorrect(false)
        }
    }, [selectedDependencies, topicX, topicY])
    

   
    return (
        <>
            
            {open && (
                <Modal
                    className={styles.selectionModal}
                    open={open}
                    onClose={handleClose}
                >
                    <div className={styles.modal}>
                        <ItemSelector setSelection={setSelection} />
                    </div>
                </Modal>
            )}
            {isSelectionCorrect && (
                <> <div className="grid-interior">
                    {selection.flag}
                    </div></>)

                }
            {!isSelectionCorrect && (
                <> <div className="grid-interior">
                <CheckBoxOutlineBlankIcon onClick={handleOpen} className={styles.selectBox} />

            </div></>)

                }                

        </>
    );
};

export default GridInterior;
