import React from 'react';
// import {Grid, Col, Row, Image,View, Text} from 'bootstrap';
import Modal from 'react-modal';
// import {TimeRanges }  from 'react-datetime-picker';
import {uiCloseModal2} from '../../actions/ui';
import {useDispatch, useSelector} from 'react-redux';
import {CalendarScreen} from '../calendar/CalendarScreen'




const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };


  Modal.setAppElement('#root');




export const CronometroModal = () => {

    const {modalOpen2 } = useSelector(state => state.ui)
    
    const dispatch = useDispatch();


    
           
       

    const closeModalCronometro = () =>{
        
         dispatch(uiCloseModal2() )
        
    }

    const handleSubmitForm =(e)=>{
        e.preventDefault(); 
        closeModalCronometro();
    
    }

   

    return (
        <Modal
          isOpen={modalOpen2}
        //   onAfterOpen={afterOpenModal}
         onRequestClose={closeModalCronometro}
          style={customStyles}
          closeTimeoutMS={200}
          
          className="modal"
          overlayClassName="modal-fondo"
        >

<h1> Cronometro de Tarea </h1>
<hr />
<form className="container" onSubmit={handleSubmitForm}>

    

    

    
    <div className="form-group">
        <label>Aqui va el tiempo de la tarea a realizar</label>
        
        {/* <Grid>
        <Row>

        <Col style={styles.col_exercise}>
        <Image  resizeMode="contain" style={styles.icon_videoexercise} />
        <Text style={styles.titlecol_exercise}>Done</Text>
        </Col>

        <Col style={styles.col_exercise}>
        <View style={{borderWidth: 2, borderColor: '#f39c12', borderRadius: 50, height: 100, width: 100,alignItems: 'center',
        justifyContent: 'center'}}>
        <Text style={{fontSize: 18, color: '#000'}}>
        00:30
        </Text>
        </View>
        </Col>

        <Col style={styles.col_exercise}>
        <Image  resizeMode="contain" style={styles.icon_videoexercise} />
        <Text style={styles.titlecol_exercise}>Play</Text>
        </Col>

        </Row>

        </Grid> */}
          
    </div>
      
    
    
    <button  className="fas fa-play btn btn-outline-primary btn-block" >
        
        <span> Play</span>
    </button>
    <button  className="fas fa-pause btn btn-outline-primary btn-block" >
        
        <span> Pause</span>
    </button>
    <button  className="fas fa-undo btn btn-outline-primary btn-block" >
        
        <span> Reset</span>
    </button>
   
    <button  className="fas fa-sign-out-alt btn btn-outline-primary btn-block" >
        
        <span > Salir</span>
    </button>

   

</form>


        </Modal>
    )
}

