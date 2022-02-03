import React from 'react';
import ParticlesBg from 'particles-bg';
import Footer from '../../components/Footer';
import Scrollup from '../../components/Scrollup';
import BlogItem from './BlogItem';
import Header from '../../components/Header';

const Blog = () => {
  return (

    <section id="blog" className="text-gray-700 body-font bg-transparent relative">
      <Header />
      <>
        <ParticlesBg type="ball" bg={true} />
        <br />
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              Blog
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              블로그
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-3 -mb-5">
              PnP 사람들의 Blog를 소개합니다.
            </p>
          </div>

          <div className="flex flex-wrap -mx-4">
            <BlogItem />
          </div>
        </div>
      </>
      <Footer />
      <Scrollup />
    </section>
  );
};

export default Blog;
