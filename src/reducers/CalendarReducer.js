
import  moment  from "moment";
import { types } from "../types/types";

const initialState ={

    events: [{
            id: new Date().getDate(),
            title: 'cumpleaños del jefe',
            start: moment().toDate(),
            end: moment().add(2, 'hours',).toDate(),
            bgcolor: '#fafafa'
        
    }],
    activeEvent: null

};

export const calendarReducer = (state = initialState, action) => {


    switch (action.type) {
        case types.eventSetActive:
            return{
                ...state,
                activeEvent: action.payload
            }

            case types.eventAddNew:
                return{ // case para la accion agregar
                    ...state,
                    events: [
                        ...state.events,
                        action.payload
                    ]
                }


            case  types.eventClearActiveEvent:
                return{
                    ...state,
                    activeEvent: null
                }

                 case types.eventUpdated:
                     return { // case para la accion update 
                         ...state,
                         events: state.events.map(
                             e => (e.id === action.payload.id )? action.payload: e
                         )
                     }

                     case types.eventDeleted:
                     return {
                         ...state,
                         events: state.events.filter( // ocupamos un filter y este case es para la accion delete
                             e => (e.id !== state.activeEvent.id ) 
                         ),
                         activeEvent: null
                     }
    
        default:
            return state;
    }



}