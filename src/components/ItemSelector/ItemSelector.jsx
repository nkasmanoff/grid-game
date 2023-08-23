import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ItemSelector({setSelection}) {

  const handleSetSelection = (event, value) => {
    setSelection(value)
  }

  // fetch all countries from https://restcountries.com/v3.1/all
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCountries(data.map(country => {
          return {
            label: country.name.common,
            value: country.name.common,
            flag: country.flag
          }
        })        
          );
      });
  }, []);
  
  


      


  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={countries}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Select a value..." />}
      onChange={handleSetSelection}

    />
  );
}