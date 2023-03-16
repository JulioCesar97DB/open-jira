import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React, { DragEvent, FC, useContext } from 'react'
import { Entry } from '../../interfaces';
import { UIContext } from '../../context/ui';

interface Props {
    entry: Entry;
}

export const EntryCard:FC<Props>= ({ entry }) => {

    const { taskDragging } = useContext(UIContext)

    const onDragStart = ( event: DragEvent<HTMLDivElement>) => {
        event.dataTransfer.setData('text', entry._id)
        taskDragging(true);
        //todo: modify the state to identify that Im doing frag
    }

    const onDragEnd = () => {
        //todo cancelar on drag
        taskDragging(false);
    }

    return (
        <Card sx={{ margin: 0.6 }} draggable onDragStart={ onDragStart } onDragEnd={ onDragEnd }>
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line '}}>{entry.description}</Typography>
                </CardContent>

                <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2}}>
                    <Typography variant='body2'>30 minutes ago</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
