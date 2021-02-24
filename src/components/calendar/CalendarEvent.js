import React from 'react'
import { CronometroModal } from './CronometroModal';
import {PlayTarea} from '../ui/PlayTarea';

export const CalendarEvent = ({event}) => {


    const {title } = event;

    return (
        <div className="contenido">
            <strong>{title} </strong>
           
            
            
        </div>
    )
}
