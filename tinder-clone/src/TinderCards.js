import React, {useEffect, useState} from 'react';
import "./TinderCard.css";
import TinderCard from "react-tinder-card";
import axios from './axios';
import * as url from "url";

function TinderCards(){
    //state to get track of people in tinder
    //initialize a veritable in react
    const [people, setPeople] = useState([]);


    useEffect(()=>{
        async function fetchData(){
            const  req = await axios.get('/tinder/cards');

            setPeople(req.data);
        }
        fetchData();
        //[] do is tinderCards loads once and not run it again
    }, []);

    console.log(people);

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
                        style={{backgroundImage: `url(${person.imgUrl})`}}
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