import React from 'react';
import Header from "../header/header";
import Sidebar from "../sibar/Sidebar";


const Content = (props) => {
    const token = localStorage.getItem('access_token');
    console.log(token);
    if (token === null){
         props.history.push('/');
    }
    return (
        <div className="wrapper">
            <Header />
            <Sidebar />
        </div>
    );
}



export default Content;
