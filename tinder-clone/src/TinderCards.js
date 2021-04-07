import React, {useState} from 'react';
import "./TinderCard.css";
import TinderCard from "react-tinder-card";
import * as url from "url";

function TinderCards(){
    //state to get track of people in tinder
    //initialize a veritable in react
    const [people, setPeople] = useState([
        {
            name: 'Elon Mack',
            ulr: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
        },
        {
            name: 'Jeff Bezos',
            ulr: "https://cdn.britannica.com/56/199056-050-CCC44482/Jeff-Bezos-2017.jpg",
        },
    ]);

    const swiped = (direction, nameToDelete) =>{
        console.log("removing" + nameToDelete);
       // setLastDirection(direction);
    };

    const outOfFrame = (name) =>{
        console.log(name + "left the screen");
    };

    return (
        //for every single person we are gonna reinder the people by name
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person)=>(
                    <TinderCard
                        className = "swipe"
                        key = {person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >

                       <div
                           //having a background where to have rendered url
                        style={{backgroundImage: `url(${person.ulr})`}}
                        className={"card"}
                       >
                           <h3>{person.name}</h3>
                       </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
};

export default TinderCards;