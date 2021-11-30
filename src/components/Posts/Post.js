import React from "react";

const Post = ({ data }) => {
    return (
        <div>
            <h1>{data.fields.title} - {data.fields.bookAuthor}</h1>
            <h2>Review by {data.fields.reviewAuthor}</h2>
            <p>{data.fields.bookReview.content[0].content[0].value}</p>
            <h3>Genre: {data.fields.genre}</h3>
            <h3>Rating: {data.fields.bookRating}</h3>
        </div>
    )
};

export default Post;