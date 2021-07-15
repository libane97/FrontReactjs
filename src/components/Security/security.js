import React from "react";

const Security = (props) => {
    const token = localStorage.getItem('access_token');
    console.log(token);
    if (token === null){
        props.history.push('/');
    }
     return(
         {token}
     );
}

export default Security;