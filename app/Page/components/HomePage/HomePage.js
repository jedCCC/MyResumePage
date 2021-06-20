import React from 'react'

const HomePage =()=>(
  <div id="HOME" class="page page--active">
    <div class="page__header homepage__header">
      <image class="homepage__avatar" src="./assets/avatar.png" alt="Avatar" />
      <div class="homepage__title">
        <h2 class="homepage__name">Tifa Lockhart</h2>
        <div class="homepage__position">Final Fantasy VII</div>
        <div class="homepage__socialMedias">
          <i class="fab fa-twitter homepage__socialMediaItem"></i>
          <i class="fab fa-facebook-f homepage__socialMediaItem"></i>
          <i class="fab fa-instagram homepage__socialMediaItem"></i>
        </div>
      </div>
    </div>
    <div class="page__content homepage__content">
      <div>
        <h3 class="homepage__aboutMeHeader">
          About
          <span class="homepage__aboutMeHeaderHighlight">Me</span>
        </h3>
        <div class="homepage__aboutMeContent">
          Bright and optimistic, Tifa always cheers up the others when they're down. But don't let her looks fool you, she can decimate almost any enemy with her fists...
        </div>
      </div>
      <table class="homepage__contact">
        <tr>
          <td>Age</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Residence</td>
          <td>Gaia</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>Level 3 / 57 Coronation Drive, Brisbane</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>
            <a href="mailto:info@jiangren.com.au">
              info@jiangren.com.au
            </a>
          </td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>+0123 123 456 789</td>
        </tr>
      </table>
    </div>
  </div>
);

export default HomePage;