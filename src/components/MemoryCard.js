import { useState } from "react";
import astra from './images/astra.png'; 
import breach from './images/breach.png'; 
import brimstone from './images/brimstone.png'; 
import cypher from './images/cypher.png'; 
import chamber from './images/chamber.png'; 
import fade from './images/fade.png'; 
import harbor from './images/harbor.png'; 
import jett from './images/jett.png'; 
import kayo from './images/kayo.png'; 
import killjoy from './images/killjoy.png'; 
import neon from './images/neon.png'; 
import omen from './images/omen.png'; 
import phoenix from './images/phoenix.png'; 
import reyna from './images/reyna.png'; 
import sage from './images/sage.png'; 
import skye from './images/skye.png'; 
import sova from './images/sova.png'; 
import viper from './images/viper.png'; 
import yoru from './images/yoru.png'; 
import raze from './images/raze.png'; 
import '../App.css'; 
const MemoryCard = () => {
    const [cards, setCards] = useState([
        { id: 1, text: "Card 1", image:astra},
        { id: 2, text: "Card 2", image:breach},
        { id: 3, text: "Card 3", image:brimstone},
        { id: 4, text: "Card 4", image:cypher},
        { id: 5, text: "Card 5", image:killjoy},
        { id: 6, text: "Card 6", image:jett},
        { id: 7, text: "Card 7", image:sage},
        { id: 8, text: "Card 8", image:yoru},
        { id: 9, text: "Card 9", image:raze},
        { id: 10, text: "Card 10", image:reyna},
        { id: 11, text: "Card 11", image:viper},
        { id: 12, text: "Card 12", image:fade},
        { id: 13, text: "Card 13", image:skye},
        { id: 14, text: "Card 14", image:neon},
        { id: 15, text: "Card 15", image:kayo},
        { id: 16, text: "Card 16", image:phoenix},
        { id: 17, text: "Card 17", image:harbor},
        { id: 18, text: "Card 18", image:omen},
        { id: 19, text: "Card 19", image:sova},
        { id: 20, text: "Card 20", image:chamber}
      ]);


      const [score, setScore] = useState(0); 
      const [bestScore, setBestScore] = useState(0)
      const [selectedKey, setSelectedKey] = useState(null);
      const [selectedCards, setSelectedCards] = useState([])//passes the selected keys and compare them after
      const handleCardClick = key => {
        setCards(prevCards => {
            //game logic 
          setSelectedKey(key)
          if(selectedKey === key || selectedCards.includes(key)){
            setScore(0)
            setSelectedCards([])
          }else{
            console.log(selectedCards)
            setScore(score + 1)
            setSelectedCards([...selectedCards, key])
            const newScore = score + 1
            if(newScore > bestScore){
                setBestScore(newScore)
            }
          }
         

            // Create a shallow copy of the original array
          let shuffledCards = [...prevCards];
          // Loop through the array, swapping each element with a random one
          for (let i = shuffledCards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
          }
          return shuffledCards;
        }
      
        );
        console.log('Score:',score)
      };

      return (
        <div>
            <div>Score: {score}</div>
            <div>High Score: {bestScore}</div>
            <div className="card-container">
            {cards.map(card => (
            <div key={card.id} onClick={() => handleCardClick(card.id)} className='card'>
              <img src={card.image} alt='imagesss' className="image-card"></img>
            </div>
          ))
          }
            </div>
            {selectedKey && <p>Selected Key: {selectedKey}</p>}
        </div>
      );
}

export default MemoryCard