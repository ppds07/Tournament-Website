import React, { useEffect, useState } from "react";
import axios from 'axios'
import '../styling/TournamentForm.css'
import paymentQr from '../images/payment-qr.png'
import cancel from "../images/cancel.svg"

function Form({user, setUser, con1, setCon1, con2, setCon2, con3, setCon3}){
    return(
        <div className="form-body" data-aos="zoom-in" data-aos-duration="1000" data-aos-once >
            <span className="form-team-title">What is your team name?</span>
            <input className="form-team-name" value={user.team_name} onChange={(e) => {
                            setUser({...user, team_name: e.target.value})
                        }} placeholder="What is your Team Name?" />
            <br /><br />
            <div className="form-main">
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player1_name">Captain Name:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player1_name} id="player1_name" onChange={(e) => {
                            setUser({...user, player1_name: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player1_mob">Captain Mobile Number:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player1_mob} id="player1_mob" onChange={(e) => {
                            setUser({...user, player1_mob: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player1_gameid">Captain Valorant ID:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player1_gameid} id="player1_gameid" onChange={(e) => {
                            setUser({...user, player1_gameid: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player1_discord">Captain Discord ID:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player1_discord} id="player1_discord" onChange={(e) => {
                            setUser({...user, player1_discord: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player1_rank">Captain Valorant Rank:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player1_rank} id="player1_rank" onChange={(e) => {
                            setUser({...user, player1_rank: e.target.value})
                        }} />
                    </div>
                </div>

                <br />

                <div className="form-row">
                    <div className="form-col1">
                        <label for="player2_name">Player 2 Name:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player2_name} id="player2_name" onChange={(e) => {
                            setUser({...user, player2_name: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player2_mob">Player 2 Mobile Number:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player2_mob} id="player2_mob" onChange={(e) => {
                            setUser({...user, player2_mob: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player2_gameid">Player 2 Valorant ID:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player2_gameid} id="player2_gameid" onChange={(e) => {
                            setUser({...user, player2_gameid: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player2_discord">Player 2 Discord ID:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player2_discord} id="player2_discord" onChange={(e) => {
                            setUser({...user, player2_discord: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player2_rank">Player 2 Valorant Rank:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player2_rank} id="player2_rank" onChange={(e) => {
                            setUser({...user, player2_rank: e.target.value})
                        }} />
                    </div>
                </div>

                <br />

                <div className="form-row">
                    <div className="form-col1">
                        <label for="player3_name">Player 3 Name:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player3_name} id="player3_name" onChange={(e) => {
                            setUser({...user, player3_name: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player3_mob">Player 3 Mobile Number:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player3_mob} id="player3_mob" onChange={(e) => {
                            setUser({...user, player3_mob: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player3_gameid">Player 3 Valorant ID:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player3_gameid} id="player3_gameid" onChange={(e) => {
                            setUser({...user, player3_gameid: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player3_discord">Player 3 Discord ID:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player3_discord} id="player3_discord" onChange={(e) => {
                            setUser({...user, player3_discord: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player3_rank">Player 3 Valorant Rank:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player3_rank} id="player3_rank" onChange={(e) => {
                            setUser({...user, player3_rank: e.target.value})
                        }} />
                    </div>
                </div>

                <br />

                <div className="form-row">
                    <div className="form-col1">
                        <label for="player4_name">Player 4 Name:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player4_name} id="player4_name" onChange={(e) => {
                            setUser({...user, player4_name: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player4_mob">Player 4 Mobile Number:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player4_mob} id="player4_mob" onChange={(e) => {
                            setUser({...user, player4_mob: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player4_gameid">Player 4 Valorant ID:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player4_gameid} id="player4_gameid" onChange={(e) => {
                            setUser({...user, player4_gameid: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player4_discord">Player 4 Discord ID:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player4_discord} id="player4_discord" onChange={(e) => {
                            setUser({...user, player4_discord: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player4_rank">Player 4 Valorant Rank:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player4_rank} id="player4_rank" onChange={(e) => {
                            setUser({...user, player4_rank: e.target.value})
                        }} />
                    </div>
                </div>

                <br />

                <div className="form-row">
                    <div className="form-col1">
                        <label for="player5_name">Player 5 Name:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player5_name} id="player5_name" onChange={(e) => {
                            setUser({...user, player5_name: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player5_mob">Player 5 Mobile Number:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player5_mob} id="player5_mob" onChange={(e) => {
                            setUser({...user, player5_mob: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player5_gameid">Player 5 Valorant ID:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player5_gameid} id="player5_gameid" onChange={(e) => {
                            setUser({...user, player5_gameid: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player5_discord">Player 5 Discord ID:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player5_discord} id="player5_discord" onChange={(e) => {
                            setUser({...user, player5_discord: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player5_rank">Player 5 Valorant Rank:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player5_rank} id="player5_rank" onChange={(e) => {
                            setUser({...user, player5_rank: e.target.value})
                        }} />
                    </div>
                </div>

                <br />

                <div className="form-row">
                    <div className="form-col1">
                        &nbsp;&nbsp;&nbsp;(Optional Substitute)
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player6_name">Substitute Name:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player6_name} id="player6_name" onChange={(e) => {
                            setUser({...user, player6_name: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player6_mob">Substitute Mobile Number:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player6_mob} id="player6_mob" onChange={(e) => {
                            setUser({...user, player6_mob: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player6_gameid">Substitute Valorant ID:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player6_gameid} id="player6_gameid" onChange={(e) => {
                            setUser({...user, player6_gameid: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player6_discord">Substitute Discord ID:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player6_discord} id="player6_discord" onChange={(e) => {
                            setUser({...user, player6_discord: e.target.value})
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col1">
                        <label for="player6_rank">Substitute Valorant Rank:</label>
                    </div>
                    <div className="form-col2">
                        <input type="text" value={user.player6_rank} id="player6_rank" onChange={(e) => {
                            setUser({...user, player6_rank: e.target.value})
                        }} />
                    </div>
                </div>
            </div>
            <div className="form-agreement">
                <p><input type="checkbox" onChange={() => {setCon1(!con1)}} /> I have read and understood all the Terms and Conditions and confirm that me and my team will strictly adhere to it<br/>
                <input type="checkbox" onChange={() => {setCon2(!con2)}} /> If my team doesn't show up on time at the event, we can be disqualfied<br />
                <input type="checkbox" onChange={() => {setCon3(!con3)}} /> I confirm that all the above details provided by me are correct <br />&nbsp;&nbsp;&nbsp;&nbsp;(Player details can be modified till 3 days before the event)</p>
            </div>
        </div>
    )
}

function Buttons({setLoading, user, setUser, con1, con2, con3, pscreen, setPscreen}){
    const updateUser = async () => {
        setLoading(true)
		try {
			var jsonData = await axios.post('/update', {...user, applied: true, status: "team"})
			setUser(jsonData.data)
		} catch (error) {
			alert("Error occured: ", error)
		} finally {
			setLoading(false)
		}
    }

    const validateInputs = async () => {
        if( 
            user.team_name.length === 0 ||
            user.player1_name.length === 0 ||
            user.player1_mob.length === 0 ||
            user.player1_gameid.length === 0 ||
            user.player1_discord.length === 0 ||
            user.player1_rank.length === 0 ||
            user.player2_name.length === 0 ||
            user.player2_mob.length === 0 ||
            user.player2_gameid.length === 0 ||
            user.player2_discord.length === 0 ||
            user.player2_rank.length === 0 ||
            user.player3_name.length === 0 ||
            user.player3_mob.length === 0 ||
            user.player3_gameid.length === 0 ||
            user.player3_discord.length === 0 ||
            user.player3_rank.length === 0 ||
            user.player4_name.length === 0 ||
            user.player4_mob.length === 0 ||
            user.player4_gameid.length === 0 ||
            user.player4_discord.length === 0 ||
            user.player4_rank.length === 0 ||
            user.player5_name.length === 0 ||
            user.player5_mob.length === 0 ||
            user.player5_gameid.length === 0 ||
            user.player5_discord.length === 0 ||
            user.player5_rank.length === 0
        )
            alert("Please Fill-in all the required fields")
        else{
            if(!con1 || !con2 || !con3)
                alert("Please Agree to the Conditions")
            else{
                updateUser()
            }
        }
    }

    const resetInputs = () => {
        if(window.confirm("Are you sure want to reset the form?"))
            setUser({
                ...user,
                team_name: "",
                player1_name: "",
                player1_mob: "",
                player1_gameid: "",
                player1_discord: "",
                player1_rank: "",
                player2_name: "",
                player2_mob: "",
                player2_gameid: "",
                player2_discord: "",
                player2_rank: "",
                player3_name: "",
                player3_mob: "",
                player3_gameid: "",
                player3_discord: "",
                player3_rank: "",
                player4_name: "",
                player4_mob: "",
                player4_gameid: "",
                player4_discord: "",
                player4_rank: "",
                player5_name: "",
                player5_mob: "",
                player5_gameid: "",
                player5_discord: "",
                player5_rank: "",
                player6_name: "",
                player6_mob: "",
                player6_gameid: "",
                player6_discord: "",
                player6_rank: "",
            })
    }

    return(
        <div className="button-frame">
            <div className="button-frame-reset">
                <span className="button-reset" onClick={() => {resetInputs()}}>Reset</span>
            </div>
            <div className="button-frame-apply">
                {user.applied ?
                <span className="button-apply" onClick={() => {validateInputs()}} >Update</span>:
                <span className="button-apply" onClick={() => {validateInputs()}} >Apply</span>}
            </div>
            <div className="button-frame-payment">
                {user.applied && <span className="button-payment" onClick={() => {setPscreen(!pscreen)}}>Payment</span>}
            </div>
        </div>
    )
}

function Payment({ pscreen, setPscreen, user, setUser, setLoading }) {
    const [pid, setPid] = useState("")

    const submitPayment = async () => {
        if(pid === "")
            alert("Please enter a Valid Transaction ID")
        else{
            setLoading(true)
            try {
                var jsonData = await axios.post('/addPayment', {
                    _id: user._id,
                    pid: pid
                })
                setUser(jsonData.data)
            } catch (error) {
                alert("Error occured: ", error)
            } finally {
                setLoading(false)
            }
        }
    }

    const displayInput = () => {
        if(user.payment_status !== "confirmed")
            return <>
                    <input type="text" className="payment-screen-pid" placeholder="Enter your Transaction ID" onChange={
                        (e) => {setPid(e.target.value)}
                    } /><br /><br />
                    <div className="payment-screen-verify" onClick={() => {submitPayment()}}>Verify</div>
                    <br /><br />
                </>
    }

    const displayStatus = () => {
        if(user.payment_status === "paid")
            return <p>Your payment is being verified....</p>
        else if(user.payment_status === "confirmed")
            return <p style={{color: "green"}}>Your payment has been confirmed
                <br />Join our <a href="https://discord.gg/VyQtnwkhe2" target="_blank" rel="noreferrer" >Discord</a> and claim the participant role to recieve further updates
            </p>
        else if(user.payment_status === "failed")
            return <p style={{color: "red"}}>Your payment has failed !! Contact us for more info</p>
    }

    return(
        <div className="payment-screen-container">
            <div className="payment-screen" data-aos="fade-in">
                <div className="payment-screen-details">
                    <p style={{fontSize: "2.2vh"}}>Instructions:</p>
                    <ul>
                        <li>Scan the QR code below using any UPI app and make payment of 1000 INR</li>
                        <li>Enter the UPI Transaction ID below and click on Verify (Please don't send the App Transaction ID's)
                            <br />(OR)<br />
                            Send the payment screenshot by whatsapp to <a href="https://wa.me/+918105017189" target="_blank" rel="noreferrer" >+91 8105017189</a>
                        </li>
                        <li>Our team will verify your payment within a day and respond to your email with the status / Also you can come back to this page to check your payment status</li>
                        <li>Please note that amount once paid is not refundable</li>
                    </ul>    
                </div>
                <img src={paymentQr} className="payment-screen-qr" alt="Not supported" /><br /><br />
                    {displayInput()}
                <div className="payment-screen-status">
                    {displayStatus()}
                </div>
                <img src={cancel} className="payment-cancel" alt="Not supported" onClick={() => {setPscreen(!pscreen)}} />
            </div>
        </div>
    )
}

export default function TournamentForm ({user, setUser, setLoading}){
    const [con1, setCon1] = useState(false)
    const [con2, setCon2] = useState(false)
    const [con3, setCon3] = useState(false)
    const [pscreen, setPscreen] = useState(false)
    
    useEffect(() => {
        setLoading(false)
    }, [])

    return(
        <div className="form">
            {pscreen && <Payment pscreen={pscreen} setPscreen={setPscreen} user={user} setUser={setUser} setLoading={setLoading} />}
            <Form user={user} setUser={setUser} con1={con1} setCon1={setCon1} con2={con2} setCon2={setCon2} con3={con3} setCon3={setCon3} />
            <Buttons setLoading={setLoading} user={user} setUser={setUser} con1={con1} con2={con2} con3={con3} pscreen={pscreen} setPscreen={setPscreen} />
        </div>
    )
}