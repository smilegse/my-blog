import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout";
import {useParams} from "react-router-dom";
import {postByCategoryId} from "../APIRequest/APIRequest.js";
import Loader from "../components/Loader.jsx";
import BlogList from "../components/BlogList.jsx";

const ByCategoryPage = () => {

    let {categoryID} = useParams();

    const [list,setList] = useState(null);

    useEffect(()=> {
        (async()=> {
            let res = await postByCategoryId(categoryID)
            setList(res);
        })()
    },[categoryID])

    return (
        <Layout>
            {list===null ? <Loader/> : <BlogList list={list} />}
        </Layout>
    );
};

export default ByCategoryPage;