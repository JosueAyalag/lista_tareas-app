import  { combineReducers} from 'redux'
import { calendarReducer } from './CalendarReducer'
import { uireducer } from './uiReducer'


export const rootReducer = combineReducers({
    ui: uireducer,
    calendar: calendarReducer
    //TODO: CalendarReducer
})