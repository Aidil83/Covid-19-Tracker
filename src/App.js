import React, { useState } from 'react';
import './App.css';
import { FormControl, MenuItem, Select } from '@material-ui/core';

function App() {
	const [countries, setCountries] = useState(['USA', 'UK', 'INDIA']);
	return (
		<div className='app'>
			<div className='app__header'>
				<h1>COVID 19 tracker</h1>
				<FormControl className='app__dropdown'>
					<Select variant='outlined' value='abc'>
						{/* Loop through all the countries and show the dropdown */}

						{countries.map((country) => (
							<MenuItem value='country'>{country}</MenuItem>
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
