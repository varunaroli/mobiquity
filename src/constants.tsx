export interface champsList { 
    raceName: string, 
    season: string, 
    Circuit: { 
        circuitName: string 
    }, 
    Results: [
        { 
            Driver: { 
                givenName: string, 
                familyName: string 
            } 
        }
    ]
}

export interface worldchampsList {
    data: {
        MRData: {
            StandingsTable: {
                StandingsLists: []
            }
        }
    }
}

export interface findYearChamps {
    data: {
        MRData: {
            "RaceTable": {
                "Races": []
            }
        }
    }
}

export interface worldChampion { 
    DriverStandings: [
        { 
            points: string, 
            wins: string, 
            Driver: { 
                givenName: string, 
                familyName: string 
            } 
        }], 
        season: string 
    }