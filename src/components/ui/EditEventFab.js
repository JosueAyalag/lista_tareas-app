import React from 'react';
import { uiOpenModal } from '../../actions/ui';
import { useDispatch } from 'react-redux';




export const EditEventFab = () => {


    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(uiOpenModal());
    }
   
    return (
        <button className="btn btn-success fab-edit " onClick={handleDelete} >
            <i className="fas fa-edit"></i>
            <span> Editar Tarea </span>
        </button>
    )
}
