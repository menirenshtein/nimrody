import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

interface IPrivateRoute{
    children: ReactNode,
    isAllowed:boolean
}

const PrivateRoute = ({children, isAllowed}:IPrivateRoute) => {

    const navigate = useNavigate()
    useEffect(() => {
        if(!isAllowed){
            !isAllowed&&  navigate('./error')
      }
    }, [])
    return isAllowed && children 
};

export default PrivateRoute