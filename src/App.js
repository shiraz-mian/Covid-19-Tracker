import React, { useState, useEffect } from 'react';
import {Cards,Table,CountryPick, LineChart,BarChart} from './components'
import styles from './App.module.css';
import {fetchData, countriesData} from './api';
import { sortData } from './utils';
import logo from './images/covid19img.png';

function App() {
    const [data, setData] = useState({});
    const [fetchedCountriesData, setFetchedCountriesData] = useState([]);
    const [countryData,setCountryData] = useState("global");

    useEffect(() =>{
        const fetchedData = async () => {
            setData(await fetchData())
        }

        fetchedData()
    }, [])
    
    useEffect(() => {
        const fetchApi = async () => {
            const sortedData = sortData(await countriesData())
            setFetchedCountriesData(sortedData);
        }
        fetchApi();
        
    }, [setFetchedCountriesData])
    // console.log(fetchedCountriesData);

    const handleCountryChange = async (country) => {
        setCountryData(country);
        const fetchedData = country==='global' ?await fetchData():await fetchData(country);
        setData(fetchedData)
       // console.log("yooo",fetchedData);
    }
    return (
        <div className={styles.container}>
            <img className={styles.image} src={logo} alt="COVID-19" />
            <Cards data = {data}/>
            <CountryPick countries = {fetchedCountriesData} handleCountryChange = {handleCountryChange} />
            { countryData==='global'?<Table countries={fetchedCountriesData} /> : <BarChart countries={data} countryData = {countryData}/>}
            <LineChart casesTypes={'cases'} />
        </div>
    )
}

export default App
