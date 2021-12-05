import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import './Post.css';

const Post = ({ data }) => {
    return (
        <div className="post-wrapper"> 
            <div className="post-main">
                <div className='cover-image-wrapper'>
                    <img src={data.fields.bookCover.fields.file.url} alt="" />
                </div>
                <div className='post-main-content'>
                    <h2>{data.fields.title} - {data.fields.bookAuthor}</h2>
                    <div className='phone-image'>
                        <img src={data.fields.bookCover.fields.file.url} alt="" />
                    </div>
                    <h3>Review by {data.fields.reviewAuthor}</h3>
                    <p>{documentToReactComponents(data.fields.bookReview)}</p>
                </div>
            </div>
            <div className="post-footer">
                <h3>Rating: {data.fields.bookRating}</h3>
                <h3>Genre: {data.fields.genre}</h3>
            </div>
        </div>
    )
};

export default Post;