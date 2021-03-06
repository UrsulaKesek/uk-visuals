import React from "react";
import "./MockUps.css";
import perfume from "./Images/perfume-project-k.png";
import perfume1 from "./Images/Magenta1q.png";
import perfume2 from "./Images/mobile-shop-front-1iv.png";
import perfume3 from "./Images/mobile-shop-front-viii.png";

const MockUps = () => {
  return (
    <>
      <header className="mockups">
        MOCKUPS: use FULL SCREEN VIEW and keep scrolling!
      </header>
      <section className="desc1">
        <section className="desc1a">
          <h2> Project: Perfume Shop. </h2>
          <hr className="new1"></hr>
          ITEM 1: Mock up for the homepage of the website for MacBookAir.
          Desktop pages. Created using Photoshop.
          <hr className="new1"></hr>
          Original size of shopfront with birds photograph : 5028 x 6048 pixels
          at resolution of 600 px/inch. File-size:15.4 MB.
          <hr className="new1"></hr>
          Original size of shopfront with cats photograph : 5016 x 6132 pixels
          at resolution of 600 px/inch.File-size:15.9MB
        </section>

        <section className="awp">
          The photographs I used for this mock-up are of a shop window display
          at Bonwit Teller, NewYork from 1955. Andy Warhol created the backdrop
          display of wooden plank panels,painted (in a light tone, impossible to
          know what colour it might have been ) and dotted about with hand drawn
          images of cats and birds,with round and square cut-out holes in the
          planks, looking through to perfume packaging behind.See links below
          Birds and Cats.
          <div className="newschoola">
            <a
              className="newschool"
              target="_blank"
              rel="noopener noreferrer"
              href="https://digitalarchives.library.newschool.edu/index.php/Detail/objects/KA0001_000495"
            >
              Birds
            </a>
          </div>
          <div className="newschoola">
            <a
              className="newschool"
              target="_blank"
              rel="noopener noreferrer"
              href="https://digitalarchives.library.newschool.edu/index.php/Detail/objects/KA0001_000496"
            >
              Cats
            </a>
          </div>
        </section>
        <section className="mmu">
          My first mock-up image incorporates two black and white photographs as
          a backdrop to the page window. I found a link for the photographs in
          ID magazine-April 2017,to New School Archives-New York. I downloaded
          the images from the archive and then cropped them to size and
          optimized them for web at PNG-8.The original file sizes are very
          large, so there is a lot of data to play with. I have adapted some
          elements in the photographs.A playing-card Clubs symbol - used in the
          banner across the top, separating links to other pages of the
          web-site, a cat bottom left and a bird bottom right.I think "cats" and
          "birds" was slang for men and women respectively.Cool cats and chicks!
        </section>
      </section>
      <div className="img1">
        <img src={perfume1} alt="perfume-shop" />
      </div>
      <section className="desc2">
        <h2>Mockup 1</h2>
        <hr className="new2"></hr>
        <p>1. Using Photoshop I created an artboard, size 1472 x 860 pixels </p>
        <p>
          2. First layer - whole artboard covered in one colour, a dark magenta
          (hex code: #7c046e).
        </p>
        <p>
          3.I introduced the two photographs (which have been optimised and
          re-sized) as the backdrop,positioning and aligning them.
        </p>
        <p>
          4. Created and arranged several structural rectangles to frame the
          photographs and to hold the shop title "UK perfumes". I have used
          lower-case for "perfumes" in this image.Font-family:Plantagenet
          Cherokee. I chose the text colour to have a good contrast with
          background for readability. I have tried to use good contrast with
          texts throughout.I chose this font because I thought it went well with
          the lettering on the photographs.
        </p>
        <p>
          5. Created and arranged several rectangles and oval shapes over the
          "cut-outs", in the planks, in the photographs.The planks form natural
          vertical guides.
        </p>
        <p>
          6. I used 5 colours from a group I created using the creative-cloud
          colour tool in Photoshop,saving them to my colour library in the psd.
          The colours were colour-blind safe.I added some other colours too,
          which were variations on these 5 colours.
        </p>
        <p>
          7. I found several images of perfume bottles from the internet. I
          chose glass ones which had similar colours:black/gold/white.I cut them
          away from their backgrounds, using the magic selection tool, leaving
          them on a transparent background.Links to some original images are
          included in the next mock-up annotations.(Crystal Gallery and World
          Brand Design)
        </p>
        <p>8. Copied,re-sized and saved the images to a folder.</p>
        <p>
          9. Copied and pasted the perfume bottles over the rectangle and oval
          shapes,using the positioning tool.
        </p>
        <p>
          10.I used the text tool (font-family:Platagenet Cherokee) to create
          labels for the links to other pages.
        </p>
        <p>
          11.Using the selection tool,cut out the clubs symbol from one of the
          photograps.
        </p>
        <p>
          12.Pasted the clubs symbol onto a clipboard to work on,adjusting the
          colours,using the eyedropper tool and brushes.
        </p>
        <p>
          13.Did the same with the cat(bottom-left) and small bird
          (bottom-right)image
        </p>
        <p>
          14.I left the white light showing through the wooden panels in the
          photograph-bottom middle-left,to maintain a link to the quality of the
          original photograph.
        </p>
        <p>
          15.I have copied and adjusted the individual letters from the
          photographs and turned them into a font (see Assets page). I have
          filled in the missing letters using an existing font, Plantagenet
          Cherokee which I have used on this mockup. Other fonts, I could use,
          which I found on Google Fonts,are Black Ops One and Saira Stencil One.
        </p>
        <p>
          16.I used export save for web to optimise the psd. Chose to use PNG-8
          to change the file from 4.82MB to 330.4K. 100% dither/Selective
          palette/256 colours.It is a bit slow to load but I like the quality.
        </p>
      </section>

      <section className="desc3">
        <p>
          Project: Perfume Shop.<hr className="new1"></hr>
          ITEM 2: Mock up of another slice for MacBookAir. Desktop page. Created
          using Photoshop.
        </p>
        <p className="m2mu">
          The 2nd mockup has a basic structure similar to mockup 1. The central
          body of the page holds six product cards showing items available to
          buy, using the same perfume bottle images from mockup 1. There is
          space for a description,product code number, and price on each card,
          and a plus sign button for add to cart. One of the cats,from the
          previous page,shown on an expanded card, could become a pop-out link
          to special offers for one of the perfumes.
        </p>
      </section>

      <div className="img2">
        <img src={perfume} alt="perfume-cards" />
      </div>
      <section className="desc2a">
        <h2>Mockup 2</h2>
        <hr className="new2"></hr>
        <p>1. Using Photoshop created an artboard size 1472 x 860 pixels </p>
        <p>
          2. First layer - whole artboard covered in a gradient to echo the
          colours from the photographs in mockup 1. This was adjusted as other
          elements were added, to create a background space.
        </p>
        <p>
          3. Created and arranged several structural rectangles to frame the
          central "poduct-card" area, spatially,similar to Mockup 1. Used
          capital letters for "perfume".
        </p>
        <p>
          4. Created and arranged 6 product cards,with different coloured
          backgrounds, showing an image of a perfume bottle, text for the
          description,price and product code number on each card.
        </p>
        <p>
          5. I used colours from a group I created using the creative-cloud
          colour tool in Photoshop,saving them to my colour library in the psd.
          The colours were colour-blind safe.
        </p>
        <p>
          6. Found several images of perfume bottles from the internet. I chose
          glass ones which had similar colours:black/gold/white.
        </p>
        <a
          className="pb"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.crystalgallery.com"
        >
          CrystalGallery
        </a>
        <a
          className="pb1"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.worldbranddesign.com/holmes-marchant-luxury"
        >
          WorldBrand
        </a>

        <p>7. Copied,re-sized and saved the images to a folder.</p>
        <p>8. Copied and pasted the perfume bottles onto the product cards.</p>
        <p>9.Re-used the clubs symbol banner from mockup 1, along the top.</p>
        <p>
          10.Incorporated the cat image,intended to be used as a pop-out
          button,on one of the products.
        </p>
        <p>11.Added some small birds.</p>
      </section>
      <section className="desc3">
        <p>
          Project:Perfume Shop.<hr className="new1"></hr>
          ITEMS 3 AND 4: Mockups for a mobile version. Created using Photoshop.
        </p>
        <p className="m3mu">
          Here we have a Homepage and one other for PLANTS.The ingredients for
          making perfumes come from all over the world.The PLANT page holds a
          map of the Indian Ocean and Islands, where several plants for perfumes
          are cultivated.The green square is intended to hold images of the
          various plants in the list.
        </p>
      </section>
      <div className="img3">
        <img src={perfume2} alt="perfume-shop-mobile" />
        <img src={perfume3} alt="perfume-shop-mobile-plants" />
      </div>
      <section className="desc2a">
        <h2>Mockup 3</h2>
        <hr className="new2"></hr>
        <p>1. Using Photoshop created an artboard size 425 x 860 pixels </p>
        <p>
          2. First layer - whole artboard covered in a background
          colour.(#f3361d).
        </p>
        <p>
          3. Created a top banner using the cat image,text and coloured
          rectangles. Arranged the various elements into a coherent whole.
        </p>
        <p>
          4. Defined the bottom section with a contact band and the playing-card
          club symbols (left and right) edge a green band for social media icons
          and copyright.
        </p>
        <p>
          5. I used colours from a group I created using the creative-cloud
          colour tool in Photoshop,saving them to my colour library in the psd.
          The colours were colour-blind safe.
        </p>
        <p>
          6. I used the cat shopfront photograph for the central area. Cropped
          and re-sized to fit.
        </p>
        <p>
          7. Found several images of perfume bottles from the internet. I chose
          glass ones which had similar colours:black/gold/white.
        </p>
        <p>7. Copied,re-sized and saved the images to a folder.</p>
        <p>
          8. Copied and pasted the perfume bottles over the photographic
          section.
        </p>
        <p>
          9. Created a text area for the page-links HOME ABOUT SHOP PLANTS using
          font Plantagenet Cherokee
        </p>
        <p>
          10.I added some coloured,square social media icons inside the bottom
          rectangle.Other ones may be added and I used a different size in the
          next mock-up They are from:
        </p>
        <a
          className="vect"
          target="_blank"
          rel="noopener noreferrer"
          href="https://vecteezy.com"
        >
          vecteezy
        </a>
        <p>NB:I am not using these as part of a sprite.</p>
      </section>
      <section className="desc2a">
        <h2>Mockup 4</h2>
        <hr className="new2"></hr>
        <p>1. Using Photoshop created an artboard size 425 x 860 pixels </p>
        <p>
          2. First layer - whole artboard covered in a background
          colour.(#f3361d).
        </p>
        <p>
          3. Created a top banner using the cat image,text and coloured
          rectangles. Arranged the various elements into a coherent whole.
        </p>
        <p>
          4. Defined the bottom section with a contact band and the playing-card
          club symbols (left and right) edge a green band for social media icons
          and copyright.
        </p>
        <p>
          5. I used colours from a group I created using the creative-cloud
          colour tool in Photoshop,saving them to my colour library in the psd.
          The colours were colour-blind safe.
        </p>
        <p>
          6. Created a text area for the page-links HOME ABOUT SHOP PLANTS using
          font Plantagenet Cherokee
        </p>

        <p>
          7.The central area holds a text-box for a list of plants,a pale blue
          rectangle for a map and a green one which will hold images of the
          plants in the list.I have positioned one image of ylang-ylang.
        </p>
        <p>
          8.Map of the Indian Ocean and Islands is from University of Texas
          Libraries. Downloaded from the internet and re-sized in photoshop.
        </p>
        <a
          className="map"
          href="https://legacy.lib.utexas.edu/maps/islands_oceans_poles/indianoceanarea.jpg"
        >
          Indian Ocean Map
        </a>
        <p>
          9.Photograph of ylang-ylang - stock image from the internet,
          duplicated and re-sized from 736x736 px down to 184x184px optimised
          from jpeg to 8-PNG on photoshop save for web.I have not bought this
          image, so it has 123rf "watermark" on it. Several images will be
          needed for this space.One for each of the plants.
        </p>
        <a
          className="ylang"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.123rf.com"
        >
          ylang-ylang
        </a>

        <p>
          10.I added some larger coloured,square social media icons inside the
          bottom rectangle. They are from:
        </p>
        <a
          className="vect"
          target="_blank"
          rel="noopener noreferrer"
          href="https://vecteezy.com"
        >
          vecteezy
        </a>
        <p> NB:I am not using these as part of a sprite</p>
        <a className="jbtt" href="#top">
          To Top
        </a>
      </section>
    </>
  );
};
export default MockUps;
