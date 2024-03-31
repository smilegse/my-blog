import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout";
import BlogList from "../components/BlogList.jsx";
import {postLatest} from "../APIRequest/APIRequest.js";
import Loader from "../components/Loader.jsx";

const HomePage = () => {

    const [list,setList] = useState(null);

    useEffect(()=> {
        (async()=> {
            let res = await postLatest()
            setList(res);
        })()
    },[])

    return (
        <Layout>
            {list===null ? <Loader/> : <BlogList list={list} />}
        </Layout>
    );
};

export default HomePage;
