import { Box, List, Paper } from '@mui/material'
import React, { DragEvent, FC, useContext, useMemo } from 'react'
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './EntryCard';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';
import styles from './EntryList.module.css'

interface Props {
    status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {

    const { entries } = useContext(EntriesContext);
    const { isDragging, taskDragging } = useContext(UIContext)

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])

    const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }

    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {

        const id = event.dataTransfer.getData('text');
        console.log(id);
    }

    return (
        // TODO: aqui haremos drop
        <div onDrop={onDropEntry} onDragOver={allowDrop} className={ isDragging ? styles.dragging : '' }>
            <Box>
                <Paper sx={{ height: 'calc(100vh - 180px)', backgroundColor: 'transparent', margin: 0.6 }}>

                    <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
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
