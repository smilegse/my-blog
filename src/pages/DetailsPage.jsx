import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout";
import {useParams} from "react-router-dom";
import {postDetailsById} from "../APIRequest/APIRequest.js";
import Loader from "../components/Loader.jsx";
import BlogDetails from "../components/BlogDetails.jsx";

const DetailsPage = () => {
    let {postId} = useParams();
    const [list,setList] = useState(null);

    useEffect(()=> {
        (async()=> {
            alert(postId);
            let res = await postDetailsById(postId)
            console.log(res)
            setList(res);
        })()
    },[postId])


    return (
        <Layout>
            {list === null ? <Loader/> : <BlogDetails list={list}/>}
        </Layout>
    );
};

export default DetailsPage;