import { types } from "../types/types";


const initialState = {
    modalOpen: false,
    modalOpen2:false,
}





export const uireducer = (state = initialState, action) =>{

    switch (action.type) {
        case types.uiOpenModal:
            return{
                ...state,
                modalOpen: true
            }
           
            

            case types.uiCloseModal:
            return{
                ...state,
                modalOpen: false
            }


            case types.uiOpenModalCronometro:
                return{
                    ...state,
                    modalOpen2: true
                }


            case types.uiCloseModal2:
            return{
                ...state,
                modalOpen2: false
            }
            
    
        default:
            return state;
    }




}