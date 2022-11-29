import React from 'react'
import { useNavigate } from 'react-router-dom';
import './front.scss'
import { UserCard } from 'react-ui-cards'
function Front() {
    const navigate = useNavigate();
    const navigateplacement = () => {
        navigate('/placement');
      };
      const navigatenotification = () => {
        navigate('/notifications');
      };
      const navigatesyllabus = () => {
        navigate('/syllabus');
      };
      const navigatenotes = () => {
        navigate('/notes');
      };
      const navigateacares = () => {
        navigate('/academicResoucre');
      };
      const navigateutube = () => {
        navigate('/youtuberes');
      };
      const navigatedsa = () => {
        navigate('/dsares');
      };
      const navigaterdmp = () => {
        navigate('/roadmap');
      };
  return (
    <div>
         <div class="container">
  <div class="card">
    <div class="box">
      <div class="content">
        <h3>Notes</h3>
        <p>keep your notes safe & orgsnized</p>
        <a onClick={navigatenotes} >Start</a>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
        <h3>Syllabus</h3>
        <p>To claim out of syllabus question , Know your syllabus first</p>
        <a onClick={navigatesyllabus}>know here</a>
      </div>
    </div>
  </div>

 
  <div class="card">
    <div class="box">
      <div class="content">
        <h1>If you are dtermined to learn no one can stop you</h1>
        <h3>Academics Resources</h3>
        <p>If you are not willing to learn ,no can help you .</p>
        <a onClick={navigateacares}>Read More</a>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="box">
      <div class="content">

        <h3>Placement</h3>
        <p>If opportunity doesn't knock, build a door.</p>
        <a style={{backgroundColor:"#F67280"}}onClick={navigateplacement}>Explore</a>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="box">
      <div class="content">
      
        <h3>Videos</h3>
        <p> Audio visuals i.e using two or more senses to learn information greatly improves retention and recall.</p>
        <a  style={{backgroundColor:"#FFA500"}}onClick={navigateutube}>watch here</a>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">

        <h3>DSA</h3>
        <p>Get your Data structures correct first & the rest of program will write itself </p>
        <a style={{backgroundColor:"#FFDF00"}}onClick={navigatedsa}>code here</a>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">

        <h3>Roadmap</h3>
        <p>All you need is a plan,a roadmap and courage to press on to your destination.</p>
        <a style={{ backgroundColor:"#B0BF1A"}}onClick={navigaterdmp}>Explore</a>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="box">
      <div class="content">

        <h3>Notification</h3>
        <p>Your job notifications are piling up .</p>
        <a  style={{backgroundColor:"#3090C7"}}onClick={navigatenotification}>Check now</a>
      </div>
    </div>
  </div>


</div>
    </div>
  )
}

export default Front