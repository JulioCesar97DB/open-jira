import { Button, TextField, Box } from '@mui/material'
import React, { ChangeEvent, useContext, useState } from 'react'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui';

export const NewEntry = () => {


    const { addNewEntry } = useContext(EntriesContext);
    const { isAddingEntry, isAdding } = useContext(UIContext);

    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const onSave = () => {
        if (inputValue.length <= 0) {
            setTouched(true);
        } else {
            addNewEntry(inputValue);
            setInputValue('');
            isAdding(false);
            setTouched(false);
        }
    }

    const cancelAction = () => {
        setTouched(false);
        setInputValue('');
        isAdding(false);
    }

    return (
        <Box sx={{ marginBottom: 2, paddingX: 1 }}>

            {
                isAddingEntry ? (
                    <>
                        <TextField
                            fullWidth
                            sx={{ marginTop: 1, marginBottom: 1 }}
                            placeholder='New Entry'
                            autoFocus
                            multiline
                            label='New Entry'
                            helperText={inputValue.length <= 0 && touched && 'New Entry'}
                            error={inputValue.length <= 0 && touched}
                            value={inputValue}
                            onChange={onTextFieldChanged}
                            onBlur={() => setTouched(true)}
                        />

                        <Box display='flex' justifyContent='space-evenly'>
                            <Button variant='text' onClick={() => { cancelAction() }}>
                                Cancel
                            </Button>

                            <Button onClick={onSave} variant='outlined' color='secondary' endIcon={<SaveOutlinedIcon />}>
                                Save
                            </Button>
                        </Box>
                    </>
                )
                    : (
                        <Button
                            startIcon={<AddCircleOutlineOutlinedIcon />}
                            fullWidth
                            variant='outlined'
                            onClick={() => isAdding(true)}
                        >
                            Add a task
                        </Button>
                    )
            }

        </Box>
    )
}
