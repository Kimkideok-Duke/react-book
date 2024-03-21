import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogOutForm = () => {
    const nave = useNavigate();
    const logOut = ()=>{
        axios.get("/logout").then((res)=> nave("/"));
    }

    useEffect(()=>{
        logOut();
    },[]);

    return (
        <div>
            
        </div>
    );
};

export default LogOutForm;