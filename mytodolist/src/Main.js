import React from 'react';
import MyContext from './Context/MyContext';
import Content from './Layouts/Content';
import Footer from './Layouts/Footer';
import Header from './Layouts/Header';

const Main = () => {
    return (
        <MyContext.Consumer>
            {context => (
                <div className='containner'>
                    <Header />
                    <Content />
                    <Footer data={context.data}/>
                </div>
            )}
        </MyContext.Consumer>


    );
};

export default Main;