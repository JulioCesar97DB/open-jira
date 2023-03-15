import { Box, List, Paper } from '@mui/material'
import React, { DragEvent, FC, useContext, useMemo } from 'react'
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './EntryCard';
import { EntriesContext } from '../../context/entries';

interface Props {
    status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {

    const { entries } = useContext(EntriesContext);

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])

    const allowDrop = ( event: DragEvent<HTMLDivElement> ) => {
        event.preventDefault();
    }

    const onDropEntry = ( event: DragEvent<HTMLDivElement> ) => {
        
        const id = event.dataTransfer.getData('text');
        console.log(id);
    }

    return (
        // TODO: aqui haremos drop
        <div onDrop={ onDropEntry } onDragOver={ allowDrop }>
            <Box>
                <Paper sx={{ height: 'calc(100vh - 180px)', backgroundColor: 'transparent', margin: 0.6 }}>
                    <List sx={{ opacity: 1 }}>
                        {
                            entriesByStatus.map(entry => (
                                <EntryCard key={entry._id} entry={entry} />
                            ))
                        }
                    </List>
                </Paper>
            </Box>
        </div>
    )
}
