import React from 'react';

const BlogItem = (props) => {
    const {img}=props;
    return (
     <>
        <div className='col-12 col-md-6 col-lg-4 mb-25'>
            <div className='blog-single-item'>
                <div className="blog-item-img">
                    <img src={img} alt="rezilla react theme" />
                </div>
                <div className="blog-item-content">
                    <ul className='blog-post-meta'>
                        <li className='post-by'><i className="bi bi-person"></i><a href="/#"> By Admin</a></li>
                        <li className='post-comment'><i className="bi bi-chat-text"></i><a href="/#">Saas</a></li>
                        <li className='post-date'><i className="bi bi-calendar3"></i><a href="/#"> 06 Mar 2022</a></li>
                    </ul>
                    <h6 className='theme-h6'><a href="/">The Belgian Exoduss of as World war one</a></h6>
                </div>
            </div>
        </div>   
    </>
    );
};

export default BlogItem;