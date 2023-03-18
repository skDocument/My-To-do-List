import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyContext from '../Context/MyContext';


const List = ({data}) => {
    return (
        <MyContext.Consumer>
            {context => (
                <li>
                    <label class="container" for={`${data.id}taskcheck`}>
                        <span style={data.complete === true ?{textDecoration :'line-through', textDecorationColor : 'crimson' , color : 'crimson'} : {textDecoration : 'none'}}>{data.value}</span>
                        <input type="checkbox" id={`${data.id}taskcheck`} onChange={()=>context.toggleTaskCheck(data.id)} />
                        <span class="checkmark"></span>
                    </label>      
                    <div><FontAwesomeIcon icon={faTrash} onClick={()=> context.removeTask(data.id)}/></div>
                </li>
            )}
        </MyContext.Consumer>

    );
};

export default List;