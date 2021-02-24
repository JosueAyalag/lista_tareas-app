import React from 'react'
import { uiOpenModalCronometro } from '../../actions/ui';
import {useDispatch} from 'react-redux';

export const PlayTarea = () => {

    const dispatch = useDispatch();


    const handleClickPlay = () => {
         dispatch(uiOpenModalCronometro() );
        
    }


    return (
        <button className=" btn-secondary btn-play" onClick={handleClickPlay}  >
            <i className="fas fa-play"></i>
            <span> comenzar Tarea </span>
        </button>
    )
}
