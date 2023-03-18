import React, { useEffect, useState } from 'react';
import faker, { Faker } from '@faker-js/faker';
import wall from '../Adds/wall.jpg'

const Header = () => {
    let [date , setDate] = useState({
        week : null,
        month : null
    })

    useEffect(()=>{
        let time = new Date()
        time = time.toDateString();
        let arr = [...time]
        let week = arr.slice(0,4)
        let day = arr.slice(8,10)
        let month = arr.slice(4,7)
        let t = week.concat(day)
        setDate({...date , week : t.join('') , month : month.join('')})
    } ,[])

    
    return (
        <div className='header' >
            <div className='headerCover'>
                <img src={wall} />
            </div>
            <div className='headerDate'>{date.week}</div>
            <div className='headerMonth'>{date.month}</div>
        </div>
    );
};

export default Header;