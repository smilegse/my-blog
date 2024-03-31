import React, {useEffect, useState} from 'react';
import {postCategories} from "../APIRequest/APIRequest";
import Navbar from "./Navbar.jsx";
import Loader from "../components/Loader.jsx";

const Layout = (props) => {

    const [categories,setCategories] = useState([]);

    useEffect(()=> {
        (async()=> {
            let res = await postCategories();
            setCategories(res);
        })()
    },[])

    return (
        <div>

            {categories===null? (<Loader/>):(<Navbar categories={categories}/>)}

            {props.children}
        </div>
    );
};

export default Layout;