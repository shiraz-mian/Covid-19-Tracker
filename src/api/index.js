import axios from "axios";

const url = 'https://disease.sh/v3/covid-19/all'

export const fetchData = async (country) => {
    let changeUrl = url;
    if(country){
        changeUrl = `https://disease.sh/v3/covid-19/countries/${country}`
    }
    
    try{
        const {data: {cases,recovered,deaths,updated}} = await axios.get(changeUrl);
        //console.log(cases)
        return { cases, recovered,deaths,updated, };

    }
    catch (error) {

    }
}

export const countriesData = async () => {
    try{
        const {data} = await axios.get(`https://disease.sh/v3/covid-19/countries`)
        return data;
    }
    catch(error){
        console.log(error)
    }
}

export const fetchChartData = async () => {
    try{
        const { data } = await axios.get(`https://disease.sh/v3/covid-19/historical/all?lastdays=120`);
        return data;
    }
    catch(error){
        console.log(error);
    }
}
