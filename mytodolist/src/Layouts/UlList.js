import React from 'react';
import MyContext from '../Context/MyContext';
import List from './List';


const UlList = () => {
    return (

        <MyContext.Consumer>
            {context => (
                <ul className='taskbox'>
                    {
                        context.data.length >0  
                        ?
                        context.data.map(li => {
                            return(<List key={li.id} data={li} />)
                        })
                        :
                        (
                            <div className='emptyAlert'>
                                <h3>You're all caught up!</h3>
                            </div>
                        ) 
                    }
                </ul>
            )}


        </MyContext.Consumer>

    );
};

export default UlList;