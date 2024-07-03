import React from 'react';
import vg from  "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";


const Home = () => {
  return (
    <>
    <div className="home" id='home'>
    <main>
        <h1>TechStar</h1>
        <p>Solutions to all your problem</p>
    </main>
  </div>
  <div className='home2'>
    <img src={vg} alt="Graphic" />

    <div>
      <p>
      Their mission is to help grow ideas into world-changing 
      businesses by fostering collaboration and innovation. 
      They actively cultivate startup culture beyond Silicon Valley,
       creating a more sustainable and inclusive world.
      </p>
    </div>
  </div>

  <div className="home3" id='about'> 
    <div>
      <h1>Who We Are?</h1>
      <p>
      TechStar is a specialized software and technology services provider 
      with a focus on business process efficiency, improving customer 
      experience, and embedding technology at scale for accelerated results1. 
      They offer complete solutions, service, and training for process industries, 
      aligning themselves with quality manufacturers to provide innovative
       measurement technology and subject matter expertise
      Certainly! Techstars, a pre-seed investor founded in Boulder,
       Colorado in 2006, provides capital, mentorship, 
      and support for early-stage entrepreneurs.
      </p>
    </div>
  </div>

  <div className="home4" id="brands">
    <div>
      <h1>Brands</h1>

      <article>
        <div style={{
          animationDelay:"0.3s",
        }}>
          <AiFillGoogleCircle/>
          <p>Google</p>
          <p></p>
        </div>

        <div style={{
          animationDelay:"0.5s",
        }}>
          <AiFillAmazonCircle/>
          <p>Amazon</p>
          <p></p>
        </div>

        <div style={{
          animationDelay:"0.7s",
        }}>
          <AiFillYoutube/>
          <p>Youtube</p>
          <p></p>
        </div>

        <div style={{
          animationDelay:"1 s",
        }}>
          <AiFillInstagram/>
          <p>Instagram</p>
          <p></p>
        </div>
      </article>
    </div>
  </div>
    </>
  ); 
};

export default Home