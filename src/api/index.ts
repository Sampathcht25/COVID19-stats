import axios from 'axios';
/**
 * Fetch covid19 upto date stats
 * **/
 const apiURL = 'https://covid19.mathdro.id/api';
 //Confirmed: https://covid19.mathdro.id/api/countries/USA/confirmed
//Recovered: https://covid19.mathdro.id/api/countries/USA/recovered
// Deaths: https://covid19.mathdro.id/api/countries/USA/deaths



export const fetchCountryData = async(URL_param:any) => {
    let updateURL = apiURL;
    let result;
    
    if(URL_param !== undefined){
        updateURL = `${apiURL}/countries/${URL_param}`;
    };

    await axios.get(updateURL).then((response) => {
        result =  response.data;
    }, (error) => {
        console.log(error);
    });
    
    return result;

    // try {
    //     const {data: {confirmed, recovered, deaths,lastUpdate}} = await axios.get(updateURL);
    //     return {confirmed, recovered, deaths,lastUpdate};
    // } catch (err) {
    //     console.log(err);
    // }
};


export const fetchDailyData = async () => {
    let result:any;

    await axios.get(`${apiURL}/daily`).then((response) => {
        result = response.data;
    }, (error) => {
        console.log(error);
    });
    console.log(result, "fetchDailyData");
    const updateResult = result.map((data:any) => ({
        confirmed: data.confirmed.total,
        deaths: data.deaths.total,
        date: data.reportDate
    }))
    return updateResult;
};

export const fetchCountriesData = async() => {
    try {
        const result:any = await axios.get(`${apiURL}/countries`);
        return result.data.countries.map((val:any) => val.name);
    } catch(error){
        console.log(error)
    }
}


export const fetchCountryReport = async() => {
    try {
        const result = await axios.get('https://disease.sh/v3/covid-19/countries');
        return result.data;
    } catch(error) {
        console.log(error);
    }
}