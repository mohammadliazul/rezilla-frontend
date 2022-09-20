import React from 'react';
import SectionTitle from '../../Helper/SectionTitle';
import BlogItem from './BlogItem';
import blogImgOne from '../../../assets/images/HomeOne/Blog/blog-img-1.png';
import blogImgTwo from '../../../assets/images/HomeOne/Blog/blog-img-2.png';
import blogImgThree from '../../../assets/images/HomeOne/Blog/blog-img-3.png';
const Blog = () => {
    return (
        <>
            <section className="blog-section-wrapper py-120">
                <SectionTitle
                smallTitle="Latest News"
                bigTitle="Our Latest Blogs"
                />
                <div className="container">
                 <div className="row">
                        <BlogItem img={blogImgOne}/>
                        <BlogItem img={blogImgTwo}/>
                        <BlogItem img={blogImgThree}/>
                 </div>
                </div>
            </section>
        </>
    );
};

export default Blog;