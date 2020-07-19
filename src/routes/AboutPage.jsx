import React from "react";
import TimeLine from "../components/TimeLine";

function AboutPage() {
  return (
    <div className="about">
      <div className="content-container">
        <div className="about-short-description">
          <div className="photo">
            <img src="./profile_photo.jpg" alt="profile"></img>
          </div>
          <div className="short-info">
            <p>Hi,</p> My name is Yuliia and I am really happy you are here.
            <p>
              I am a student with a creative soul, who has a huge dream to
              succeed in graphic design industry. And here you’ll find
              everything you need to know about me and my steps I made to gain
              what I want. My portfolio, my thoughts and some inspiration you
              will find here.
            </p>
            So, prepare your tea, sweets and be ready to learn something about
            me.
          </div>
        </div>
      </div>

      <div className="about-description">
        <div className="content-container">
          <div>
            <div>
              <p>
                As you already know, I’m Yuliia, and I’m very passionate about
                my dream.
              </p>
              <p>
                My lifelong journey started in Ukraine. When I was growing up,
                my dreams were only about art, I didn’t want to have an ordinary
                job, that’s not for me, I was sure. That’s why I started to
                study drawing, painting, sculpting and everything what can make
                my soul happy, I was a child with a soul of explorer of
                different ways in art creating.{" "}
              </p>
              <p>
                So, what is next?... a new world full of challenges opened a
                door in front of me. I moved to Poland for studying and was
                really happy about new country, new place of living and new
                people around me. That also gave me a chance to study 1 year
                exchange program in France. Now, I am back in Poland to continue
                my studying, trying to find my way of living and start to
                develop in my lifelong dream.
              </p>
              <p>
                This page is everything about my artworks, my experience and
                everything I achieved.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-container">
        <TimeLine />
        <p>
             Don’t forget to check my{" "}
          <a href="./portfolio">
            <b>portfolio</b>
          </a>
          , and if you want to know something you didn’t find on my website,
          please contact me and I’ll reply you with a pleasure. My interests My
          hobbies
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
