import React, { useEffect, useState } from 'react';
import MyContext from '../Context/MyContext';

const Footer = ({data}) => {

    let [taskState , setTaskState] = useState({
       taski :  {task : 0,complete : 0,open :0}
    })

    useEffect(()=>{
        let task = data.length
        let complete = [...data].filter(item => {return item.complete === true})
        let open = [...data].filter(item => item.complete === false)
        let taski = {task ,complete : complete.length,open : open.length}
        setTaskState({...taskState , taski})
    },[data])
    
    return (
        <div className='footer'>
            <span>{taskState.taski.task}        task</span>
            <span>{taskState.taski.complete}    complete</span>
            <span>{taskState.taski.open}        open</span>
        </div>
    );
};

export default Footer;