import React, { useState, useEffect } from 'react';
import { worldChampion } from '../constants';



const WorldChampions = (props: { worldChampions: any, findChampions: any }) => {

    const [worldchampions, setWorldChampions] = useState([]);

    useEffect(() => {
        setWorldChampions(props.worldChampions)
    }, [props.worldChampions])

    return (
        <div>
            <h3>F1 World Champions</h3>
        <table className="table table-bordered text-center">
            <tbody>
                <tr>
                    <th>Season</th>
                    <th>Winner Name</th>
                    <th>Points</th>
                    <th>Wins</th>
                </tr>
                {worldchampions.length > 0 && worldchampions.map((data: worldChampion,index:number) => {
                    return (<tr key={"champion"+index}>
                        <td>
                            <a href="javascript:void(0);" onClick={e => props.findChampions(data.season,data.DriverStandings[0].Driver.givenName + ' ' + data.DriverStandings[0].Driver.familyName)}>{data.season}</a>
                        </td>
                        <td>{data.DriverStandings[0].Driver.givenName + ' ' + data.DriverStandings[0].Driver.familyName}</td>
            
                        <td>{data.DriverStandings[0].points}</td>
                        <td>{data.DriverStandings[0].wins}</td>
                                </tr>)
                })
                }
            </tbody>
        </table>
  </div>
    );
}

export default WorldChampions;