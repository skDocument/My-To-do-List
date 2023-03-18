import React , {useState ,  useEffect , useId , useRef} from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import List from './List';
import UlList from './UlList';
import MyContext from '../Context/MyContext';

const Content = () => {
    let id = useId()
    const checkTask = (context)=>{
        console.log('ceh');
        let val = document.querySelector('.inpTask').value
        let rand = Math.floor(Math.random()*200)
        if(val.length >0){
            let generateTask = { id : `${id}${val}${rand}` , value : val , complete : false }
            context.setTask(generateTask)

        }
        else
            alert('please add task descriptian')

    }

    const checkKeyCodeEnter = (event, context) =>{
        if(event.key == 'Enter'){
            checkTask(context)
        }
    }

    return (
        <MyContext.Consumer>
            {context =>(
                <div className='content'>
                    <div className='enterTaskWrapper' >
                        <FontAwesomeIcon icon={faPen}   onClick={()=> checkTask(context)} />
                        <input type='text' className='inpTask' placeholder='Add Task...' onKeyUp={(event)=>{checkKeyCodeEnter(event ,context)}} />
                    </div>
                    <UlList />
                </div>
            )}
        </MyContext.Consumer>

    );
};

export default Content;