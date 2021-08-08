import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { champsList } from '../constants'


const ChampionsList = (props: { result: any, champion: string }) => {

    const [champions, setChampions] = useState([]);

    useEffect(() => {
        setChampions(props.result)
    }, [props.result])

    return (
        <table className="table table-bordered text-center">
            <tbody>
                <tr>
                <th>Winner Name</th>
                    <th>Race Name</th>
                    <th>Season</th>
                    <th>Circuit Name</th>
                   
                </tr>
                {champions.length > 0 && champions.map((data: champsList,index:number) => {
                    return (<tr key={"champion"+index} className={data.Results[0].Driver.givenName + ' ' + data.Results[0].Driver.familyName == props.champion ? 'championrow':''}>
                              <td className={data.Results[0].Driver.givenName + ' ' + data.Results[0].Driver.familyName == props.champion ? 'champion':''}>
                            {data.Results[0].Driver.givenName + ' ' + data.Results[0].Driver.familyName}
                        </td>
                        <td>{data.raceName}</td>
                        <td>{data.season}</td>
                        <td>{data.Circuit.circuitName}</td>
                 
                    </tr>)
                })

                }
            </tbody>
        </table>
    );
}

export default ChampionsList;