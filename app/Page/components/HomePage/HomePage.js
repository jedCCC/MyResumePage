import React from 'react'

const HomePage =()=>(
  <div id="HOME" className="page page--active">
    <div className="page__header homepage__header">
      <img className="homepage__avatar" src="./assets/avatar.png" alt="Avatar" />
      <div className="homepage__title">
        <h2 className="homepage__name">Jed Zhang</h2>
        <div className="homepage__position">Full-Stack-Developer</div>
        <div className="homepage__socialMedias">
          <i className="fab fa-twitter homepage__socialMediaItem"></i>
          <i className="fab fa-facebook-f homepage__socialMediaItem"></i>
          <i className="fab fa-instagram homepage__socialMediaItem"></i>
        </div>
      </div>
    </div>
    <div className="page__content homepage__content">
      <div>
        <h3 className="homepage__aboutMeHeader">
          About
          <span className="homepage__aboutMeHeaderHighlight">Me</span>
        </h3>
        <div className="homepage__aboutMeContent">
          A proactive and self-motivated DCO Engineer accustomed to working with years of full stack developing experience
        </div>
      </div>
      <table className="homepage__contact">
        <tbody>
        <tr>
          <td>Location</td>
          <td>Sydney, Australia</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>2 Mary Street, Burwood, Sydney</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>
            <a href="jed.zhang92@gmail.com">
              jed.zhang92@gmail.com
            </a>
          </td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>+61 402 695 007</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default HomePage;