import React,  {useState} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';


import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import {CalendarEvent} from './CalendarEvent';
import {CalendarModal} from './CalendarModal';
import { uiOpenModal } from '../../actions/ui';
import { CronometroModal} from './CronometroModal';
import {PlayTarea} from '../ui/PlayTarea';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import { eventClearActiveEvent, eventSetActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';
import {EditEventFab} from '../ui/EditEventFab';


moment.locale('es');



const localizer =momentLocalizer(moment);

// const events =[{
//     title: 'cumpleaños del jefe',
//     start: moment().toDate(),
//     end: moment().add(2, 'hours',).toDate(),
//     bgcolor: '#fafafa'
// }]

export const CalendarScreen = () => { 

    //reaccionar a acciones de calendar


    const dispatch = useDispatch();
    const {events, activeEvent} = useSelector(state => state.calendar )

    //estado de una variable para cuando cambie actualize
    const [lastView, setLastview] = useState(localStorage.getItem('lastView' || 'month'));




    // //const onOneClick = (e) =>{ // evento de doble clik sobre evento para abrir modal CON OPCION DE COMENTAR ESTA LINEA
    //     // console.log(e);
    //   dispatch(uiOpenModal()); //esta accion dispara el modal
    // }


    const onSelectEvent = (e) =>{ // evento de seleccionar con un click 
        dispatch(eventSetActive(e)   );
        // dispatch(uiOpenModal()  );
    }

    const onViewChange = (e) =>{ // funcion para saber en donde estoy ejem: month, day, week, agenda, en localstorage
        setLastview(e);
        localStorage.setItem('lastView',e);
    }


    // al dar click en cualquier lado saldra de la opcion borrar, editar
    const onSelectSlot  = (e) =>{
        dispatch(eventClearActiveEvent()    );
    }



    // funcion que se dispara con argumentos
    const eventsStyleGetter = (event, start, end, isSelected ) =>{ 

        const style = {
         backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }


        return{
            style
        }

    
};


   

    return (
        <div className="calendar-screen">
           <Navbar />


            <Calendar
            localizer={localizer}
            events={events}
            startAccesor="start"
            endAccesor="end"
            messages={messages}
            eventPropGetter={eventsStyleGetter}
           // onDoubleClickEvent={onOneClick} // evento de doble click con OPCION DE COMENTAR ESTA LINEA
            onSelectEvent={onSelectEvent}// disparar un evento con un click
            onSelectSlot={onSelectSlot}
            selectable={true}
            onView={onViewChange}
            view={lastView}
            components={{
                event: CalendarEvent    
            }}
            />


            <AddNewFab />
            {
                (activeEvent) && <DeleteEventFab />
            } 

            {
                (activeEvent) && <EditEventFab  />
            }
            {
                (activeEvent) &&  <PlayTarea />
            }
            
             
            <CalendarModal   />
            <CronometroModal />



        </div>
    )
}
