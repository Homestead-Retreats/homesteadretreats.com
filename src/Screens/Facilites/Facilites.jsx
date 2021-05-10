import React from 'react'
import './Facilites.css'

export default function Facilites() {
  return (
    <div className="facilites-container">
      <div className="facilites-block-one">
        <img src="http://www.homesteadretreats.com/Facilities_and_Food_files/shapeimage_4.jpg" alt="homestead-gathering"  className="facilites-one"/>
        <img src="http://www.homesteadretreats.com/Facilities_and_Food_files/IMG_3006-leveled.jpg" alt="homestead-lake" className="facilites-two"/>
      </div>
      <div className="facilites-block-two">
        <img src="http://www.homesteadretreats.com/Facilities_and_Food_files/IMG_2960-leveled.jpg" alt="homestead-director" className="facilites-three" />
      </div>
      <div className="facilites-block-three">
        <img src="http://www.homesteadretreats.com/Facilities_and_Food_files/shapeimage_3.jpg" alt="homestead-director" className="facilites-four" />
        <img src="http://www.homesteadretreats.com/Facilities_and_Food_files/IMG_0102-filtered.jpg" alt="homestead-gathering" className="facilites-five" />
      </div>
      <div className="facilites-head">
        <h3 className="facilites-h3">
          Clean Facilities and Great Food or U-Cook
        </h3>
      </div>
        {/* <div className="facilites-line-break">
          <img src="http://www.homesteadretreats.com/About_Us_files/backgroundimage_1.png" alt="line-break" className="line-break-facilites"/>
        </div> */}
      <div className="facilites-paragraphs-top">
        <p className="facilites-first-p">You'll feel at home in our clean and comfortable facilities. We are able to accommodate up to sixty people overnight. All groups have exclusive use of our facilities. Our Main Hall includes sleeping quarters for 17, a meeting room with air conditioning and a nice gas fireplace, and dining room. The FellowshipHall includes a recreation room along with additional sleeping quarters. We also have three apartments that are available to groups for a small additional fee. See floor plans for further detail.</p>
      </div>
      <div className="facilites-paragraphs-middle">
        <p className="facilites-second-p">We know that one of the most important parts of a great camp, retreat or conference is the food. Ask around and you will discover that we have a reputation for quality meals with generous portion, served with our own Homestead hospitality. We pride ourselves in preparing delicious, homemade meals. We serve many churches and Christian ministries every year and we receive many unsolicited comments. The three comments that are consistently mentioned in the thank you cards are our clean facilities, service, and delicious food.</p>
      </div>
      <div className="facilites-paragraphs-bottom">
        <p className="facilites-third-p">“Once again you have blessed us abundantly with your hospitality and service this week. The food always tasted delicious, and the home cooked meals gave us lots of energy to study and learn. We appreciate you sharing the story of the Homestead. It was ( and is ) such a neat example of faith and provision. Your servant attitude is humbling, and we hope to follow	 your examples as we head out around the world. Thanks so much for hosting us.” Sincerely in His love, Missions to Unreached peoples</p>
      </div>
    </div>
  )
}
