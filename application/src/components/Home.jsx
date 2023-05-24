import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import anime from 'animejs/lib/anime.es.js';
import Typed from 'typed.js'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styling/Home.css'
import cancel from "../images/cancel.svg"

import rog from "../images/rog.png"
import marsMeat from "../images/mars meat.png"

function Title ({loading}){
    const viewApply = () => {
        anime({
            targets: '.apply-button',
            opacity: 1,
            easing: 'linear',
            duration: 1000
        })
    }

    useEffect(() => {
        if(!loading){
            anime({
                targets: '.title-1',
                translateX: 1920, // -> from '28px' to '100%',
                easing: 'easeInOutQuad',
                duration: 1500
            });
            anime({
                targets: '.title-2',
                translateX: 1920, // -> from '28px' to '100%',
                easing: 'easeInOutQuad',
                delay: 500,
                duration: 2000,
            });
            setTimeout(() => {
                const typed = new Typed("#typed-text", {
                    strings: ['FIRST EVER LAN EVENT IN HUBBALLI - DHARWAD'],
                    typeSpeed: 20,
                    showCursor: false,
                    onComplete: viewApply
                  });
            }, 3000)
        }
    }, [loading])

    return(
        <div className="title">
            <div className="title-1">VALORANT</div>
            <div className="title-2">LAN&#8209;CHAMPIONSHIP</div>
            <span id="typed-text"></span>
        </div>
    )
}

function ApplyButton ({user, setLoading, setViewStatus}) {
    const navigate = useNavigate()
    const handleClick = () => {
        if(Object.keys(user).length === 0){
            alert("Please login to apply")
        }
        else{    
            if(!user.status)
                setViewStatus(true)
            else if(user.status === "single"){
                setLoading(true)
                navigate("/applySingle")
            }
            else if(user.status === "team"){
                setLoading(true)
                navigate("/apply")
            }
        }
    }

    return(
        <div className="apply-container">
            <div className="apply-button" onClick={() => {handleClick()}}>
                {user.applied ? <span>View Application</span> : <span>APPLY</span>}
            </div>
        </div>
    )
}

function Venue() {
    const [venue, showVenue] = useState(false)

    const handleClick = async () => {
        showVenue(true)
        return Promise.resolve()
    }

    const animate = () => {
        anime({
            targets: '.venue-details-hidden',
            opacity: 1,
            easing: 'linear',
            duration: 1000
        })
    }

    return(
        <div className="venue" onClick={() => {handleClick().then(() => {animate()})}} data-aos="flip-up" data-aos-duration="1000" data-aos-once >
            <div className="venue-title">Venue</div>
            <div className="venue-details">
            {venue ? 
                <span className="venue-details-hidden">
                    <span><b>Prelim's:</b> &nbsp; 10<sup>th</sup> &amp; 11<sup>th</sup> June, Online mode </span><br /><br />
                    <span><b>Playoff's:</b> &nbsp; 17<sup>th</sup> &amp; 18<sup>th</sup> June, Offline mode</span><br />
                    <span>Cafe Di'oro by CASA, Hubballi</span><br /><br />
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.319430244637!2d75.1244269!3d15.3591772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d72ee03ed287%3A0xd364ddec802810fa!2sCafe%20Di&#39;oro%20by%20CASA!5e0!3m2!1sen!2sin!4v1683618676878!5m2!1sen!2sin" className="gmaps-link" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="google-maps"></iframe>
                </span>:
                <span style={{fontWeight: "500", fontSize: '30px'}}>Click to view</span>
            }
            </div>
        </div>
    )
}

function Details() {
    const [details, showDetails] = useState(false)

    const handleClick = async () => {
        showDetails(true)
        return Promise.resolve()
    }

    const animate = () => {
        anime({
            targets: '.details-details-hidden',
            opacity: 1,
            easing: 'linear',
            duration: 1000
        })
    }

    return(
        <div className="details" onClick={() => {handleClick().then(() => {animate()})}} data-aos="flip-up" data-aos-duration="1000" data-aos-once >
            <div className="details-title">Details</div>
            <div className="details-details">
            {details ? 
                <span className="details-details-hidden">
                    <ul>
                        <li>Tournament will be conducted in hybrid mode i.e,
                            <ul style={{listStyleType: "circle"}}>
                                <li>Prelims will be conducted in Online mode to select top 16 teams</li>
                                <li>Top 16 teams will be having Playoffs and Finals as an On-site Event</li>
                            </ul>
                        </li>
                        <li>Interested Participants without a team can also register, they can form a team by:
                            <ul style={{listStyleType: "circle"}}>
                                <li>Searching for fellow players in our discord's #looking-for-group channel</li>
                                <li>Auto Balanced matchmaking will be done to get you in a team</li>
                            </ul>
                        </li>
                        <li>Registration Fee is (Non - Refundable)
                            <ul style={{listStyleType: "circle"}}>
                                <li>Rs. 1000 per Team</li>
                                <li>Rs. 200 per Player</li>
                            </ul>
                        </li>
                        <li>Prize Pool is
                            <ul style={{listStyleType: "circle"}}>
                                <li>Rs. 10,000 for Winners</li>
                                <li>Rs. 5,000 for Runner-ups</li>
                            </ul>
                        </li>
                        <li>Veto based map selection is done among the current 7 map pool to select 1 map (in elims and playoffs) and best of 3 (in finals)</li>
                        <li>Further details regarding match schedule will be provided by mail and discord</li>
                    </ul>
                </span>:
                <span className="click-me" style={{fontWeight: "500", fontSize: '30px'}}>Click to view</span>
            }
            </div>
        </div>
    )
}

function Rules() {
    const [rules, showRules] = useState(false)

    const handleClick = async () => {
        showRules(true)
        return Promise.resolve()
    }

    const animate = () => {
        anime({
            targets: '.rules-rules-hidden',
            opacity: 1,
            easing: 'linear',
            duration: 1000
        })
    }

    return(
        <div className="rules" onClick={() => {handleClick().then(() => {animate()})}} data-aos="flip-up" data-aos-duration="1000" data-aos-once >
            <div className="rules-title">Rules</div>
            <div className="rules-rules">
            {rules ? 
                <span className="rules-rules-hidden">
                    <ul>
                        <li>Game will be played on "Mumbai Server" and "Latest Patch Note"</li>
                        <li>Cheating of any kind is strictly prohibited</li>
                        <li>Physical and Verbal Abuse will not be entertained</li>
                        <li>Consumable Restrictions:<br />
                            &emsp;Allowed: Water bottles, soft drinks, chewing gum<br />
                            &emsp;Not Allowed: Hot drinks, eatables, Tobacco, spitting.
                        </li>
                        <li>Player will be penalised if he/she causes any damage to the organisations property</li>
                        <li>All the team members should be present at the venue sharp at the mentioned reporting time</li>
                        <li>If a player has represented a team, he/she won’t be able to play for any other team(s).</li>
                        <li>Technical & Tactical Timeout will be provided, In-case of any failure of equipment notify us immediately</li>
                        <li>For further details/rules refer our <a href='/rules' target="_blank" >complete PDF</a></li>
                    </ul>
                </span>:
                <span className="click-me" style={{fontWeight: "500", fontSize: '30px'}}>Click to view</span>
            }
            </div>
        </div>
    )
}

function Sponsers(){
    return(
        <div className="sponsers-container">
            <div className="sponsers-title">SPONSERED BY</div>
            <div className="sponsers">
                <div className="main-sponser" data-aos="zoom-in" data-aos-duration="1000" data-aos-once>
                    <p>Powered BY</p><br />
                    <img src={rog} alt="Not supported" />
                </div>
                <div className="co-sponser" data-aos="zoom-in" data-aos-duration="1000" data-aos-once>
                    <p>Co-Sponsered BY</p><br />
                    <div className="co-sponser-container">
                        <img src={marsMeat} alt="Not supported" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function SelectStatus({ user, setUser, setViewStatus, setLoading }){
    const navigate = useNavigate()
    const setStatus = (status) => {
        setViewStatus(false)
        setLoading(true)
        if(status === "single")
            navigate("/applySingle")
        else if(status === "team")
            navigate("/apply")
    }

    return <div className="select-status-container">
        <div className="select-status">
            <img src={cancel} alt="Not Supported" className="status-hide" onClick={() => {setViewStatus(false)}} />
            <div className="status-button" onClick={() => {setStatus("single")}}>I dont have a Team</div>
            <div className="status-button" onClick={() => {setStatus("team")}}>I have a Team</div>
        </div>
    </div>
}

export default function Home ({user, setUser, setLoading, loading}){
    const [viewStatus, setViewStatus] = useState(false)

    useEffect(() => {
        AOS.init()
    }, [])

    return(
        <div className="homepage">
            {viewStatus && <SelectStatus user={user} setUser={setUser} setViewStatus={setViewStatus} setLoading={setLoading} />}
            <Title loading={loading} />
            <ApplyButton user={user} setLoading={setLoading} setViewStatus={setViewStatus} />
            <Venue />
            <Details />
            <Rules />
            <Sponsers />
        </div>
    )
}