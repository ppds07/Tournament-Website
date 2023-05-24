import { useState, useEffect } from "react"
import axios from "axios"
import "../styling/console.css"

export default function Console(){
    const [data, setData] = useState([])

    const fetchTeams = async () => {
        try {
            var response = await axios.post("/viewTeams")
            setData(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const updatePayment = async (id, value) => {
        if(window.confirm(`Are you sure want to ${value} the payment?`)){
            try {
                var response1 = await axios.post("/confirmPayment", {_id: id, status: value})
                var response2 = await axios.post("/viewTeams")
                setData(response2.data.data)
                alert(response1.data.success)
            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        fetchTeams()
    }, [])

    return(
        <div className="console-body">
            {data.map((value, index) => {
                if(value.applied)
                return(
                    <>
                    <div className="team" key={index}>
                        <h2>{value.team_name}</h2>
                        <table className="team-table">
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Mobile No</th>
                                <th>Game Tag</th>
                                <th>Discord</th>
                                <th>Rank</th>
                            </tr>
                            <tr>
                                <td>Player 1</td>
                                <td>{value.player1_name}</td>
                                <td>{value.player1_mob}</td>
                                <td>{value.player1_gameid}</td>
                                <td>{value.player1_discord}</td>
                                <td>{value.player1_rank}</td>
                            </tr>
                            <tr>
                                <td>Player 2</td>
                                <td>{value.player2_name}</td>
                                <td>{value.player2_mob}</td>
                                <td>{value.player2_gameid}</td>
                                <td>{value.player2_discord}</td>
                                <td>{value.player2_rank}</td>
                            </tr>
                            <tr>
                                <td>Player 3</td>
                                <td>{value.player3_name}</td>
                                <td>{value.player3_mob}</td>
                                <td>{value.player3_gameid}</td>
                                <td>{value.player3_discord}</td>
                                <td>{value.player3_rank}</td>
                            </tr>
                            <tr>
                                <td>Player 4</td>
                                <td>{value.player4_name}</td>
                                <td>{value.player4_mob}</td>
                                <td>{value.player4_gameid}</td>
                                <td>{value.player4_discord}</td>
                                <td>{value.player4_rank}</td>
                            </tr>
                            <tr>
                                <td>Player 5</td>
                                <td>{value.player5_name}</td>
                                <td>{value.player5_mob}</td>
                                <td>{value.player5_gameid}</td>
                                <td>{value.player5_discord}</td>
                                <td>{value.player5_rank}</td>
                            </tr>
                            <tr>
                                <td>Player 6</td>
                                <td>{value.player6_name}</td>
                                <td>{value.player6_mob}</td>
                                <td>{value.player6_gameid}</td>
                                <td>{value.player6_discord}</td>
                                <td>{value.player6_rank}</td>
                            </tr>
                        </table>
                        <p>Name: {value.name}, Email: {value.email}</p>
                        <p>Payment ID: {value.payment_id}</p>
                        <p>Payment Status: {value.payment_status}</p>
                        <input type="button" value="Confirm Payment" onClick={() => {updatePayment(value._id, "confirmed")}}/>
                        <input type="button" value="Failed Payment" onClick={() => {updatePayment(value._id, "failed")}}/>
                    </div>
                    <br/>
                    </>
                )
            })}
        </div>
    )
}