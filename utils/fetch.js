import axios from 'axios';
import React from 'react';

export const fethAPI = async (url,method,data,auth = true,contentType) =>{
    const res = await fetch(
        url,{
            credentials : 'include',
            method,
            body : data,
            headers : contentType,
            cache : 'no-store'
        }
    )
    const json = await res.json();

    return json;
}
