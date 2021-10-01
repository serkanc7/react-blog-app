import React from 'react';
import './Home.scss';
import Card from '@/components/Card/Card';

function Home({ posts, deletePost, updatePost, isLoading }) {

    return (
        <div className="home">
            {isLoading ? <div className="loading"><div className="lds-dual-ring" ></div></div> :
                <div className="container cards">
                    {posts.map((post) => {
                        return (
                            <Card key={post.id} post={post} deletePost={deletePost} updatePost={updatePost} />
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default Home;
