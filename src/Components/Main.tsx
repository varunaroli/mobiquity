import React, { useState, useEffect } from 'react';

import axios from 'axios';
import ChampionsList from './ChampionsList';
import WorldChampions from './WorldChampions'
import { Modal, Button } from 'react-bootstrap';
import { findYearChamps, worldchampsList } from '../constants';


const Main = (props: any) => {

    const [result, setResult] = useState([]);
    const [worldChampions, setWorldChampions] = useState([])
    const [handleShow, setHandleShow] = useState(false)
    const [champion,setChampion] = useState("")

    const findChampions = async (year: string, champ:string) => {
        try {
            let result: findYearChamps = await axios.get('https://ergast.com/api/f1/' + year + '/results/1.json');
            console.log(result)
            setResult(result.data["MRData"]["RaceTable"]["Races"])

            setHandleShow(true)
            setChampion(champ)
            console.log(result)
        }
        catch (err) {

        }

    }

    const listWorldChampions = async () => {
        try {
            let result: worldchampsList = await axios.get('https://ergast.com/api/f1/driverStandings/1.json?limit=100&offset=55');
            setWorldChampions(result.data.MRData.StandingsTable.StandingsLists)
        }
        catch (err) {

        }
    }

    useEffect(() => {
        if (worldChampions.length == 0) {
            listWorldChampions();
        }
    }, [worldChampions])
    return (
        <>
        <div className="container">
            <div className="row">
                <h2 className="text-center heading">Mobiquity React Assessment Test</h2>
            </div>
            {worldChampions.length > 0 && <WorldChampions worldChampions={worldChampions} findChampions={findChampions} />}
            {handleShow &&
                <Modal show={handleShow} size="lg">
                    <Modal.Header>
                        <Modal.Title>Champions List</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {result.length > 0 && <ChampionsList result={result} champion = {champion}/>}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={e=>setHandleShow(false)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            }
            </div>
        </>
    );
}

export default Main;