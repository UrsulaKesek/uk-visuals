import React from "react";
import "./Assets.css";
import awletters from "./Images/aw-letters-9a.png";
import awletters1 from "./Images/aw-letters-11-1.png";
import cat from "./Images/aw-cat-a2.jpg";
import cat1 from "./Images/aw-cat-2b.jpg";
import cat2 from "./Images/aw-cat-3.jpg";
import cat3 from "./Images/blue-cat.jpg";
import clubs1 from "./Images/clubs256x256.png";
import clubs2 from "./Images/clubs128x128.png";
import clubs3 from "./Images/clubs64x64.png";
import clubs4 from "./Images/clubs32x32.png";
import Perfume1 from "./Images/Perfume1.jpeg";
import Perfume2 from "./Images/Perfume2.jpeg";
import Perfume3 from "./Images/Perfume3.jpeg";
import Perfume4 from "./Images/Perfume4.jpeg";
import Perfume5 from "./Images/pb11b.png";
import Perfume6 from "./Images/pb75.png";
import Perfume7 from "./Images/pb75x105.png";
import Perfume8 from "./Images/pb75x142.png";
import Robin1 from "./Images/robin-90x81.png";
import Robin2 from "./Images/robin3.png";
import Robin3 from "./Images/robin-180x162.png";
import tightrope from "./Images/tightrope5.jpg";

const AssetsFile = () => {
  return (
    <section>
      <header className="assets">ASSETS: use FULL SCREEN VIEW and keep scrolling! There are 6 sections.</header>
      <section className="pic1">
        <p>
          IMAGE 1.size:450 x 552 px resolution 72ppi. IMAGE.1a size:700 x 866 px
          resolution 72ppi.
          <hr className="new1"></hr>
          I started playing with the letters from the Bonwit's Photographs.
          A B E F G I L M N O R S T V W There are 15 letters
          out of an alphabet of 26. I filled in the missing 11 with font Saira Stencil One, to
          create a hybrid. It's not a perfect match of course. Another font I
          could use is Black Ops One. The psd file is editable and 1 could
          spend a long time playing with this. The coloured rectangles are to check some possible
          contrasting colours. The Bonwit's letters in the 1st image have been cleaned up
          and extraneous marks removed using the eraser tool and small brushes as well as
           the eye-dropper to change pixel colours.
        </p>
        <div className="img1">
        <img src={awletters1} alt="hybrid-font" />
        </div>
        <div className="img1a">
        <img src={awletters} alt="hybrid-font" />
        </div>
      </section>
      <section className="pic2">
        <h1> Image 2:Evolution of the blue cat.</h1>
        <div className="pic2a">
          <p>
            1. I opened the original Bonwit's (cats) photograph in Photoshop.
          </p>
          <p>
            2.Using the selection tool I cut out the cat from the photograph at
            a size of 1005 x 2121 px.Saved image.
          </p>
          <p>
            3. I duplicate the image and re-sized that to 500 x 1055px.Still quite
            big.Saved the image.
          </p>
          <p>4.Duplicated and re-sized again to 250 x 525px.Saved Image.</p>
          <p>5.Posterized the image and saved.</p>
          <p>
            6.Duplicated image and used eraser tool,brushes and paint bucket to
            get to stage 3 and
            saved Image.
          </p>
          <p>
            7. I did not know when I converted the cat that I would only use part of it.
            Duplicated and re-sized image to portrait size 420 x 420 px.Saved
            Image.
          </p>
        </div>
      </section>
      <section className="picta">
        <img src={cat} alt="cat-drawing" />
        <img src={cat1} alt="cat-drawing" />
        <img src={cat2} alt="cat-drawing" />
      </section>
      <section className="picta">
        <img src={cat3} alt="blue-cat-drawing" />
      </section>
      <section className="pic2">
        <h1> Image 3:Perfume Bottles.</h1>
        <section className="pic2">
          <p>1. I collected several perfume bottle images from the internet.</p>
          <p>2. I chose ones with similar colours:black gold white.</p>
          <p>
            3.I separated the bottles from the background using the magic
            selection tool, and then saved them with transparent backgrounds.
          </p>
          <p>4.Tidied the edges with the eraser tool.</p>
          <p>
            5.Duplicated,re-sized and saved to make several different sized
            copies.
          </p>
          <p>
            6.Positioned them around the Homepages of both mobile and desktop
            mockups.
          </p>
        </section>
      </section>
      <section className="pic3">
        <img src={Perfume3} alt="perfume-bottle-3" />
        <p>Original size:299 x 169 px 10Kb</p>
      </section>
      <section className="pic3">
        <img src={Perfume1} alt="perfume-bottle-1" />
        <p>Original size:450 x 450 px 60Kb</p>
        <img src={Perfume4} alt="perfume-bottle-4" />
        <p>Original size:400 x 534 px 149Kb</p>
      </section>
      <section className="pic3">
        <img src={Perfume2} alt="perfume-bottle-2" />
        <p>Original size:900 x 900 px 37Kb</p>
      </section>
      <section className="pic3">
        <img src={Perfume5} alt="perfume-bottle-5" />
        <p> Optimised size:75 x 161 px 37Kb</p>
      </section>
      <section className="pic3">
        <img src={Perfume6} alt="perfume-bottle-6" />
        <p> Optimised size:75 x 88px 8Kb</p>
      </section>
      <section className="pic3">
        <img src={Perfume7} alt="perfume-bottle-7" />
        <p> Optimised size:100 x 145 px 12Kb</p>
      </section>
      <section className="pic3">
        <img src={Perfume8} alt="perfume-bottle-8" />
        <p> Optimised size:75 x 142 px 8Kb</p>
      </section>
      <section className="pic4">
        <h2 className="clubs"> Image 4:Playing-card Clubs symbol</h2>
        <div className="clubs">
          <img src={clubs4} alt="club-symbol-small" />
          <p>size 32 x 32 px</p>
          <img src={clubs3} alt="club-symbol-medium" />
          <p>size 64 x 64 px</p>
          <img src={clubs2} alt="club-symbol-large-4" />
          <p>size 128 x 128 px</p>
          <img src={clubs1} alt="club-symbol-x-large" />
          <p>size 256 x 256 px</p>
        </div>
      </section>
      <section className="pic4">
        <p>
          {" "}
          Image 4:A similar process to the way the cat image was produced was
          utilised here for the club symbol and I used a 48x48 px version for the favicon.
        </p>
      </section>
      <section className="pic5">
        <p>IMAGE:5 Walking a tightrope.</p>
        <p>
          This seems relevant here as I have been walking a tight rope between
          the grungy black and white photographic images from the 1950's, with
          hand drawn elements and the modern hi-tech way of producing images on
          a computer. Trying to keep the integrity of the original images as
          well as adapting them with so many possibilities and utilising the
          Black ops font.It's hard to know when to stop tweaking. This image
          might or might not be utilised. I've been having a lot of fun!.
        </p>
      </section>
      <section className="pic6">
        <img src={tightrope} alt="girl-with-flags-on-a-tightrope" />
      </section>
      <div className="pic6">
        <p className="pic7">IMAGE:6 Birds.</p>
        <p></p>
      </div>
      <div className="pic7">
        <img src={Robin1} alt="small-bird" />
        <p>Small bird Size: 90 x 81 px 7Kb</p>
      </div>
      <div className="pic7">
        <img src={Robin3} alt="small-bird" />
        <p>
          A slightly larger small bird,used in mockup2. Size:180 x 162 px 14Kb
        </p>
      </div>
      <div>
        <img src={Robin2} alt="small-bird" />
      </div>

      <section className="pic7 p">
        <p>
          Edited part of the photograph with birds. This image shows where I
          have coloured the bird.
        </p>
        <p>1.I used the pen tool to draw around the bird shape.</p>
        <p>2.There are separate shapes for the feet,fantail and eye.</p>
        <p>
          3.I used the magic stencil tool to separate out the bird from the
          background.
        </p>
        <p>4.copied the grouped layers of the bird to a separate clipboard.</p>
        <p>5.Used the eraser to tidy out the background.</p>
        <p>
          6.I added a red ellipse for the red-breast and used the bucket tool
          for the brown body colour.
        </p>
        <p>7.I optimised and exported for web using PNG-8.</p>
        <p>8.I duplicated and resized the png to four different sizes.</p>
        <p>You can see here how large the original photpgraphic section is.</p>
        <a className="jbtt" href ="#top">To Top</a>
      </section>
    </section>
  );
};
export default AssetsFile;
