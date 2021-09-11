import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPick.module.css';
const CountryPick = ({countries,handleCountryChange}) => {
   // console.log(handleCountriesChange);

    return (
        <FormControl className = {styles.formControl}>
            <NativeSelect defaultValue = "" onChange = {(e) => handleCountryChange(e.target.value)}>
                <option value = "global">World</option>
                {
                    countries.map(({country}) => <option value = {country}>{country}</option>)
                }
            </NativeSelect>
        </FormControl> 
    )
}

export default CountryPick
