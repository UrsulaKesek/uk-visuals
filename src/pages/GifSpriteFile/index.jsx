import React from "react";
import Birds from "./Images/bird-anim-v.gif";
import "./GifSprite.css";
const GifSpriteFile = () => {
  return (
    <>
      <div class="bird">
        <img src={Birds} alt="robin-tweet-animation" />

        <div class="gif">
          <h2>The gif animation plays 3 times.</h2>
          <p>1.I have used the robin png in two different sizes.</p>
          <p>
            2.Tweet is rendered using font-family Saira Stencil in 72pt and 30pt
            font-sizes .I have used a strong contrasting color for the text
            against a #68ae33 background.{" "}
          </p>
          <p>3.As the birds hop about, so does the "tweet"</p>
          <p>
            4.I have varied the delay on each frame to adjust the transition
            speed through the animation.
          </p>
          <p>
            5.The use of image and text together echos the original work in the
            photos from Bonwit's Teller.
          </p>
        </div>
      </div>
    </>
  );
};
export default GifSpriteFile;
