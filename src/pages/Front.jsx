import React from 'react'
import { useNavigate } from 'react-router-dom';
import './front.scss'
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
        <a onClick={navigatenotes} style={{color:"white"}}>Start</a>
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

        <h3>Card Two</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="box">
      <div class="content">
        <h2>03</h2>
        <h3>Card Three</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Front