import { Button, TextField, Box } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { padding } from '@mui/system';

export const NewEntry = () => {

    const [isAdding, setIsAdding] = useState(false);

    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const onSave = () => {
        if (inputValue.length <= 0) {
            setTouched(true);
        } else{
            console.log({ inputValue })
        }
    }

    return (
        <Box sx={{ marginBottom: 2, paddingX: 1 }}>

            {
                isAdding ? (
                    <>
                        <TextField
                            fullWidth
                            sx={{ marginTop: 1, marginBottom: 1 }}
                            placeholder='New Entry'
                            autoFocus
                            multiline
                            label='New Entry'
                            helperText={ inputValue.length <= 0 && touched && 'New Entry' }
                            error={ inputValue.length <= 0 && touched }
                            value={ inputValue }
                            onChange={ onTextFieldChanged}
                            onBlur={ () => setTouched(true) }
                        />

                        <Box display='flex' justifyContent='space-evenly'>
                            <Button variant='text' onClick={() => { setIsAdding(false); setTouched(false) } }>
                                Cancel
                            </Button>

                            <Button onClick={ onSave } variant='outlined' color='secondary' endIcon={<SaveOutlinedIcon />}>
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
                        onClick={() => setIsAdding(true)}
                    >
                        Add a task
                    </Button>
                )
            }

        </Box>
    )
}
