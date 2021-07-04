import React from 'react';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';
import ServicePage from './components/ServicePage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';



// declarative code
const Page = ({
  page,
})=>(
  <div className="pages">
    {page === 'HOME' && (<HomePage/>)}
    {page === 'RESUME'&&(<ResumePage/>)}
    {page === 'SERVICES'&&(<ServicePage/>)}
    {page === 'CONTACT'&&(<ContactPage/>)}
    {page === 'BLOG'&&(<BlogPage/>)}
  </div>
);

export default Page;