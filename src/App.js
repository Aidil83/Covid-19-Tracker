import React, { useState } from 'react';
import './App.css';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import { useEffect } from 'react';

function App() {
	const [countries, setCountries] = useState([]);
	const [country, setCountry] = useState('worldwide');

	useEffect(() => {
		const getCountriesData = async () =>
			fetch('https://disease.sh/v3/covid-19/countries')
				.then((response) => response.json())
				.then((data) => {
					const countries = data.map((country) => ({
						name: country.country,
						value: country.countryInfo.iso2,
					}));
					setCountries(countries);
				});
		getCountriesData();
	}, []);

	const onCountryChange = (event) => {
		const countryCode = event.target.value;

		setCountry(countryCode);
	};

	return (
		<div className='app'>
			<div className='app__header'>
				<h1>COVID 19 tracker</h1>
				<FormControl className='app__dropdown'>
					<Select variant='outlined' value={country} onChange={onCountryChange}>
						{/* Loop through all the countries and show the dropdown */}
						<MenuItem value='worldwide'>Worldwide</MenuItem>
						{countries.map((country) => (
							<MenuItem value={country.value}>{country.name}</MenuItem>
						))}
					</Select>
				</FormControl>
			</div>

			{/* Header */}
			{/* Title + Select input dropdown field */}

			{/* InfoBoxes */}
			{/* InfoBoxes */}
			{/* InfoBoxes */}

			{/* Table */}
			{/* Graph */}

			{/* Map */}
		</div>
	);
}

export default App;
