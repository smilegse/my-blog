import React from 'react';
import {Link} from "react-router-dom";

const BlogList = (props) => {


    return (
        <div>
            <div className="container mx-auto my-16 p-9">
                <div className="grid grid-cols-1 mt-2 md:grid-cols-4 lg:grid-col-6 gap">
                    {
                        props.list.map((item, index)=>{
                            return (
                                <Link key={index.toString()} to={"/details/"+item['id']} className="card w-100 glass m-3">
                                    <figure><img src="https://archive.roar.media/wp-content/uploads/2023/07/18-1536x803.png" alt="cart" /> </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{item["title"]}</h2>
                                        <p>{item['short']}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogList;