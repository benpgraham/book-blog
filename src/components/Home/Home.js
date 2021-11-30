import React from "react";
import { useState, useEffect } from "react";
import { getPosts } from "../../contentful/utilities";
import Post from '../Posts/Post';

const Home = () => {

    const [blogPosts, setBlogPosts] = useState([]);

    const getData = async () => {
      const data = await getPosts();
      setBlogPosts(data);
    }
  
    useEffect( () => {
      getData();
    }, []);
  
    console.log(blogPosts);

    if(!blogPosts) {
        return (
            <h1>Loading</h1>
        );
    }

    return (
        <div className="posts">
            {blogPosts.map((review, index) => <Post key={index} data={review}/>)}
        </div>
    )
};

export default Home;