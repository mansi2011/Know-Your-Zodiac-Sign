import "./styles.css";
import { useState } from "react";

const signDescription = {
  Sagittarius: [
    {
      picture:
        "https://www.thesun.co.uk/wp-content/uploads/2020/07/KH-GRAPHIC-HOROSCOPE-SAGITTARIUS.jpg?w=620",
      positivePoints: "high-reaching ideals,optimistic,adventurous,generous",
      negativePoints:
        "impatient,promises more than can deliver, will say anything no matter how undiplomatic",
      month: "November 22–December 21"
    }
  ],
  Aquarius: [
    {
      picture:
        "https://www.thesun.co.uk/wp-content/uploads/2020/07/KH-GRAPHIC-HOROSCOPE-AQUARIUS.jpg?w=620",
      positivePoints: "free-spirited,charming bunch,stubborn,original",
      negativePoints: "moody,detached,temperamental",
      month: "January 20–February 18"
    }
  ],
  Aries: [
    {
      picture:
        "https://www.thesun.co.uk/wp-content/uploads/2020/07/KH-GRAPHIC-HOROSCOPE-ARIES.jpg?w=620",
      positivePoints:
        "confident,courageous,Famously passionate,determined,highly energetic",
      negativePoints: " fiery,argumentative,impulsive",
      month: "March 21–April 19"
    }
  ],
  Capricon: [
    {
      picture:
        "https://www.thesun.co.uk/wp-content/uploads/2020/07/KH-GRAPHIC-HOROSCOPE-CAPRICORN.jpg?w=620",
      positivePoints: "hardworking,disciplined,goal-oriented,responsible",
      negativePoints: "secretive,sensitive,know-it-all,unforgiving",
      month: "December 22–January 19"
    }
  ],
  Taurus: [
    {
      picture:
        "https://www.thesun.co.uk/wp-content/uploads/2020/07/KH-GRAPHIC-HOROSCOPE-TAURUS.jpg?w=620",
      positivePoints: "Grounded,persistent,reliable,devoted",
      negativePoints: "stubborn, possessive, uncompromising",
      month: "April 20–May 20"
    }
  ],
  Virgo: [
    {
      picture:
        "https://www.thesun.co.uk/wp-content/uploads/2020/07/KH-GRAPHIC-HOROSCOPE-VIRGO.jpg?w=620",
      positivePoints: "hard-workers,highly intelligent,analytical,loyal",
      negativePoints:
        "shyness, worry, overly critical of self and others, all work and no play",
      month: "August 23–September 22"
    }
  ],
  Libra: [
    {
      picture:
        "https://www.thesun.co.uk/wp-content/uploads/2020/07/KH-GRAPHIC-HOROSCOPE-LIBRA.jpg?w=620",
      positivePoints: "Charming,balanced,diplomatic",
      negativePoints: "indecisive,non-committal,self-pity",
      month: "September 23–October 23"
    }
  ],
  Gemini: [
    {
      picture:
        "https://www.thesun.co.uk/wp-content/uploads/2020/07/KH-GRAPHIC-HOROSCOPE-GEMINI.jpg?w=620",
      positivePoints: "intelligent,adaptable,gentle,curious",
      negativePoints: "indecisive,nervous,inconsistent",
      month: "May 21–June 21"
    }
  ],
  Scorpio: [
    {
      picture:
        "https://www.thesun.co.uk/wp-content/uploads/2020/07/KH-GRAPHIC-HOROSCOPE-SCORPIO.jpg?w=620",
      positivePoints:
        "persistent,resourceful, brave, passionate, stubborn, a true friend ",
      negativePoints: "hot-headed,distrusting,secretive,jealous",
      month: " October 24–November 21"
    }
  ],
  Pisces: [
    {
      picture:
        "https://www.thesun.co.uk/wp-content/uploads/2020/07/KH-GRAPHIC-HOROSCOPE-PISCES.jpg?w=620",
      positivePoints:
        "Compassionate, artistic, intuitive, gentle, wise, musical",
      negativePoints:
        "Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr",
      month: "February 19–March 20"
    }
  ],
  Leo: [
    {
      picture:
        "https://www.thesun.co.uk/wp-content/uploads/2020/07/KH-GRAPHIC-HOROSCOPE-LEO.jpg?w=620",
      positivePoints: "enthusiastic,ambitious,warm-hearted, cheerful, humorous",
      negativePoints: "arrogant, stubborn, self-centered, lazy, inflexible",
      month: "July 23–August 22"
    }
  ],
  Cancer: [
    {
      picture:
        "https://www.thesun.co.uk/wp-content/uploads/2020/07/KH-GRAPHIC-HOROSCOPE-CANCER.jpg?w=620",
      positivePoints: "fun,loving,charming,tenacious, highly imaginative",
      negativePoints: "moody, pessimistic, suspicious, manipulative, insecure",
      month: "June 22–July 22"
    }
  ]
};

var zodiacSigns = Object.keys(signDescription);
console.log(zodiacSigns);

export default function App() {
  const [sign, setSign] = useState("Scorpio");

  function clickHandler(item) {
    setSign(item);
  }

  const renderDetails = signDescription[sign].map((signDetails) => {
    return (
      <div className="card">
        <img src={signDetails.picture} />
        <br />
        <div>
          <em style={{ fontWeight: "bold" }}>( {signDetails.month} )</em>
          <h3>
            <span style={{ color: "darkBlue" }}>Strength:</span>{" "}
            {signDetails.positivePoints}
          </h3>
          <h3>
            <span style={{ color: "darkblue" }}>Weakness:</span>{" "}
            {signDetails.negativePoints}
          </h3>
        </div>
      </div>
    );
  });

  return (
    <div className="App">
      <h1 className="title-heading">✡️ What's Your Rashi?</h1>
      <hr className="hr-line" />
      <em className="sub-title-heading">
        Select any sign and know more about them!
      </em>
      <br />
      <br />

      {zodiacSigns.map((item) => {
        return (
          <span>
            <button
              onClick={() => clickHandler(item)}
              key={item}
              className="btn-click"
              style={{ padding: "1.2rem", margin: "1.2rem", cursor: "pointer" }}
            >
              {item}
            </button>
          </span>
        );
      })}

      <div className="result-list">{renderDetails}</div>
    </div>
  );
}
