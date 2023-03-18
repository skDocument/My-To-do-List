import MyContext from "./Context/MyContext";
import React, {  useId, useState } from "react";

const MyProvider = (props)=> {
    let id = useId()
    const [state , setState] = useState({
        // data : [{id : `${id}opal`,value : 'opal',complete : false}],
        data : [],

    })
    
    return(
        <MyContext.Provider 
            value={{
                data : state.data ,
                setTask : (newTask) =>{
                    setState({
                        ...state , data : [...state.data , newTask]
                    })
                },
                removeTask : (taskId) => {
                   let filtered = state.data.filter(item => item.id != taskId)
                   setState({...state , data : filtered})
                },
                toggleTaskCheck : (taskId) => {
                    let indx = state.data.findIndex(item=>item.id == taskId)
                    let newData = [...state.data]
                    newData.forEach((item,i) => {
                        if(i == indx){
                          item.complete = !item.complete
                        }
                    })
                    setState({...state , data : newData})
                }
                // ,
                // checkKeyCodeEnter : (key,enterInputfocus) => {
                //     if(key == 'Enter'){
                //         alert('en')
                //         enterInputfocus.current.onclick()
                //     }
                // }
            }}
        >
            {props.children}
        </MyContext.Provider>
    )
    

}


export default MyProvider;