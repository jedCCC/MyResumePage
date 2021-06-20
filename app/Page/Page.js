import React from 'react';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';
import ServicePage from './components/ServicePage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';

const Page = () => (
  <div className="pages">
    <HomePage/>
    <ResumePage/>
    <ServicePage/>
    <BlogPage/>
    <ContactPage/>
  </div>
);

export default Page;