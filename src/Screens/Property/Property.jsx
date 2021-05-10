import React, {useState} from 'react'
import './Property.css'

export default function Property() {

  const [pictureToggle, setPictureToggle] = useState(false)

  return (
    <div className="property-container">
      <div className="text-box">
        <p className="header-text">Our 45 acres include a beautiful park-like setting with rolling terrain, forested areas with a variety of towering trees and seven types of wetlands including the tip of Meadow Lake. Our unique wetlands are a sanctuary to a large variety of wildlife.  Some guests enjoy the adventure of taking a kayak trip up through the wetlands to Meadow Lake.  Others enjoy a quiet walk along one of our nature trails.</p>
      </div>
      <div className="image-box-one">
        <img src="http://www.homesteadretreats.com/Property_files/Media/7%20Meadow%20Lake/7%20Meadow%20Lake.jpg?disposition=download" alt="Meadow Lake" className="property-image-one"/>
        <p className="descriptions">Canoeing on Meadow Lake</p>
        <img src="http://www.homesteadretreats.com/Property_files/Media/2%20Rolling%20Hills/2%20Rolling%20Hills.jpg?disposition=download" alt="Meadow Lake" className="property-image-two"/>
        <p className="descriptions">Rolling Pastureland</p>
        <img src="http://www.homesteadretreats.com/Property_files/Media/MEadowLake/MEadowLake.jpg?disposition=download" alt="" className="property-image-three"/>
        <p className="descriptions">Meadow Lake</p>
      </div>
      <div className="image-box-four">
        <img src="http://www.homesteadretreats.com/Property_files/Media/canal%20arial/canal%20arial.jpg?disposition=download" alt="" className="property-image-four"/>
        <p className="descriptions">Canal to Lake</p>
        <img src="http://www.homesteadretreats.com/Property_files/Media/IMG_2166/IMG_2166.jpg?disposition=download" alt="" className="property-image-five"/>
        <p className="descriptions">Main Hall</p>
        <img src="http://www.homesteadretreats.com/Property_files/Media/P1000504/P1000504.jpg?disposition=download" alt="" className="property-image-six"/>
        <p className="descriptions">Overhead View</p>
      </div>

      <div className="image-box-two">
        <img src="http://www.homesteadretreats.com/Property_files/Media/4%20Meadow/4%20Meadow.jpg?disposition=download" alt="" className="property-image-seven"/>
        <p className="descriptions">Our Meadow</p>
        <img src="http://www.homesteadretreats.com/Property_files/Media/1%20Property%20Tour/1%20Property%20Tour.jpg?disposition=download" alt="" className="property-image-eight"/>
        <p className="descriptions">Birds Eye View</p>
        <img src="http://www.homesteadretreats.com/Property_files/Media/5%20Ponds/5%20Ponds.jpg?disposition=download" alt="" className="property-image-nine"/>
        <p className="descriptions">Old Saw Mill Pond</p>
      </div>
      <div className="image-box-five">
        <img src="http://www.homesteadretreats.com/Property_files/Media/4%20Sawmill%20Equip/4%20Sawmill%20Equip.jpg?disposition=download" alt="" className="property-image-ten"/>
        <p className="descriptions">Old Sawmill Equip</p>
        <img src="http://www.homesteadretreats.com/Property_files/Media/Canal%20Girls/Canal%20Girls.jpg?disposition=download" alt="" className="property-image-eleven"/>
        <p className="descriptions">Canoeing the Canal</p>
        <img src="http://www.homesteadretreats.com/Property_files/Media/Enchanted%20Trail/Enchanted%20Trail.jpg?disposition=download" alt="" className="property-image-twelve"/>
        <p className="descriptions">Nature Trail</p>
      </div>
      <div className="image-box-three">
        <img src="http://www.homesteadretreats.com/Property_files/Media/IMG_1123/IMG_1123.jpg?disposition=download" alt="" className="property-image-thirteen"/>
        <p className="descriptions">Snowy Tree Tops</p>
        <img src="http://www.homesteadretreats.com/Property_files/Media/6%20Towering%20Trees/6%20Towering%20Trees.jpg?disposition=download" alt="" className="property-image-fourteen"/>
        <p className="descriptions">Towering Trees</p>
        <img src="http://www.homesteadretreats.com/Property_files/Media/IMG_2148/IMG_2148.jpg?disposition=download" alt="" className="property-image-fifteen"/>
        <p className="descriptions">Play Field</p>
      </div>
      <div>
      <button onClick={() => {
          pictureToggle ?
            setPictureToggle(false) :
          setPictureToggle(true)

        }} className="view-more">View More</button>
        {
          pictureToggle && 
        <div>
        <div className="image-box-five-more">
        <img src="http://www.homesteadretreats.com/Property_files/Media/4%20Sawmill%20Equip/4%20Sawmill%20Equip.jpg?disposition=download" alt="" className="property-image-ten"/>
        <p className="descriptions-more">Old Sawmill Equip</p>
        <img src="http://www.homesteadretreats.com/Property_files/Media/Canal%20Girls/Canal%20Girls.jpg?disposition=download" alt="" className="property-image-eleven"/>
        <p className="descriptions-more">Canoeing the Canal</p>
        <img src="http://www.homesteadretreats.com/Property_files/Media/Enchanted%20Trail/Enchanted%20Trail.jpg?disposition=download" alt="" className="property-image-twelve"/>
        <p className="descriptions-more">Nature Trail</p>
      </div>
      <div className="image-box-three-more">
        <img src="http://www.homesteadretreats.com/Property_files/Media/IMG_1123/IMG_1123.jpg?disposition=download" alt="" className="property-image-thirteen"/>
        <p className="descriptions-more">Snowy Tree Tops</p>
        <img src="http://www.homesteadretreats.com/Property_files/Media/6%20Towering%20Trees/6%20Towering%20Trees.jpg?disposition=download" alt="" className="property-image-fourteen"/>
        <p className="descriptions-more">Towering Trees</p>
        <img src="http://www.homesteadretreats.com/Property_files/Media/IMG_2148/IMG_2148.jpg?disposition=download" alt="" className="property-image-fifteen"/>
        <p className="descriptions-more">Play Field</p>
      </div>
        </div>
        }
      </div>
    </div>
  )
}
