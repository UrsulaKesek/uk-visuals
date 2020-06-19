import React from 'react'
import "./Assets.css";
import awletters from "./Images/aw-letters-9a.png";
import awletters1 from "./Images/aw-letters-11-1.png";
import  cat from "./Images/aw-cat-a2.jpg";
import  cat1 from "./Images/aw-cat-2b.jpg";
import  cat2 from "./Images/aw-cat-3.jpg";
import  cat3 from "./Images/blue-cat.jpg";
import clubs1 from './Images/clubs256x256.png';
import clubs2 from './Images/clubs128x128.png';
import clubs3 from './Images/clubs64x64.png';
import clubs4 from './Images/clubs32x32.png';
import Perfume1 from './Images/Perfume1.jpeg';
import Perfume2 from './Images/Perfume2.jpeg';
import Perfume3 from './Images/Perfume3.jpeg';
import Perfume4 from './Images/Perfume4.jpeg';


const AssetsFile =()=>
 {
    return (
        <div>
      <header>
        ASSETS: use Full Screen View and keep scrolling!
      </header>
      <div className="pic1">
        <p> IMAGE 1.size:450 x 552 px resolution 72ppi.
            IMAGE.2 size:700 x 866 px resolution 72ppi.
        <hr className="new1"></hr>

          Playing with the letters from the Bonwit's Photographs.
          There are 15 out of 26. I filled in the missing 11 with 
          font Saira Stencil One to create a hybrid.
          It's not a perfect match of course.
          Another font I could use is Black Ops One.
          The psd file is editable and one could spend a long time playing.
          The coloured rectangles are to check some contrasts.
        </p>
      <img src={awletters1} alt="hybrid-font" />
      <img src={awletters} alt="hybrid-font" />
      </div>
      <div className="pic2">
      <h1> Image 3:Evolution of the blue cat.</h1>
      <div className="pic2a">
      <p>1. I opened the original Bonwit's (cats) photograph in Photoshop.</p>
      <p>2.Using the selection tool I cut out the cat 
      from the photograph at a size of 1005 x 2121 px.Save image.</p>
      <p>3.Duplicate the image and re-size that to 500 x 1055px.Still quite big.Save Image.</p>
      <p>4.Duplicate and re-size again to 250 x 525px.Save Image.</p>
      <p>5.Posterize the image and save.</p>
      <p>6.Duplicate image and use eraser tool,brushes and paint bucket to get to stage 3.Save Image.</p>
      <p>7.Duplicate and re-size image to portrait size 420 x 420 px.Save Image.</p>
      </div>
      </div>
      <div className="pic2">
      <img src={cat} alt="cat-drawing"/>
      <img src={cat1} alt="cat-drawing"/>
      <img src={cat2} alt="cat-drawing"/>
      </div>
      <div className="pic2">
      <img src={cat3} alt="blue-cat-drawing"/>
      </div>
      <div className="pic2">
      <h1> Image 4:Perfume Bottles.</h1>
      <div className="pic2a">
      <p>1. I collected several perfume bottle images from the internet.</p>
      <p>2. I chose ones with similar colours:black gold white.</p>
      <p>3.I separated the bottles from the background using the magic selection tool,
        and then saved them with transparent backgrounds.</p>
      <p>4.Tidied the edges with the eraser tool.</p>
      <p>5.Duplicated,re-sized and saved to make several copies.</p>
      <p>6.Positioned them around the Homepages of both mobile and desktop mockups.</p>
      </div>
      </div>
      <div className="pic3">
      <img src={Perfume3} alt="perfume-bottle-3"/>
      <p>Original size:299 x 169 px 10Kb</p>
      </div>

      <div className="pic3">
      <img src={Perfume1} alt="perfume-bottle-1"/>
      <p>Original size:450 x 450 px 60Kb</p>
      <img src={Perfume4} alt="perfume-bottle-4"/>
      <p>Original size:400 x 534 px 149Kb</p>
      </div>
      <div className="pic3">
      <img src={Perfume2} alt="perfume-bottle-2"/>
      <p>Original size:900 x 900 px 37Kb</p>
      </div>

      <div className="pic4">
      <h2 className="clubs"> Image 5:Playing-card Clubs symbol</h2>
      <div className="clubs">
      <img src={clubs4} alt="perfume-bottle-3"/>
      <p>size 32 x 32 px</p>
      <img src={clubs3} alt="perfume-bottle-1"/>
      <p>size 64 x 64 px</p>
      <img src={clubs2} alt="perfume-bottle-4"/>
      <p>size 128 x 128 px</p>
      <img src={clubs1} alt="perfume-bottle-2"/>
      <p>size 256 x 256 px</p>
</div>
      </div>
      <div className="pic4">
        <p> Image 5:A similar process to the way the cat image was produced was utilised here. </p>
      </div>

        </div>
    )
}
export default AssetsFile;