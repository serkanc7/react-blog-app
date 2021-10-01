import React from 'react';
import './Home.scss';
import Card from '@/components/Card/Card';

function Home({ posts, deletePost, updatePost }) {

    return (
        <div className="home">
            <div className="container cards">
                {posts.map((post) => {
                    return (
                        <Card key={post.id} post={post} deletePost={deletePost} updatePost={updatePost} />
                    )
                })}
            </div>
        </div>
    )
}

export default Home;
