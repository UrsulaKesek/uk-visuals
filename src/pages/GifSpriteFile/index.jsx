import React from "react";
import Birds from "./Images/bird-anim-vi.gif";
import "./GifSprite.css";

const GifSpriteFile = () => {
  return (
    <>
    <section className="birds">
        <div>
          <img className="rob" src={Birds} alt="robin-tweet-animation" />
        </div>
        <div className="gif">
          <h2> There is a 3 second delay before the animation starts and it plays 3 times.</h2>
          <p>
            1.Using Photoshop I chose an artboard size 300px x 600px.This is one
            of the top performing Ad sizes as suggested on the website for
            adsense. A smaller version would be needed for mobile sizing.
          </p>
          <p>
            2.I have used the robin png in two sizes: 692px x 620px and 90px x
            81px.
          </p>
          <p>
            3.Tweet is rendered using font-family Black Ops One in 72pt and 30pt
            font-sizes .I have used a strong contrasting color #6b231a for the
            text against a #68ae33 background.
          </p>
          <p>4.As the birds hop about, so does the "Tweet"</p>
          <p>
            5.I have varied the delay on each frame to adjust the transition
            speed through the animation.
          </p>
          <p>
            6.The use of image and text together,including letters from the
            Bonwit's alphabet, echos the original look in the photos. Different
            short messages could be loaded into this space.
          </p>
        </div>
    </section>
    </>
  );
};
export default GifSpriteFile;
