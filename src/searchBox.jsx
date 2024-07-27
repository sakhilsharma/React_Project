import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error ,setError] = useState(false);
    let APIkey = 'e46e58a57f756c661ae4d0c462a6862e';
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`
    async function fetchData() {
       try{ let data = await (await fetch(`${URL}`)).json();
        console.log(data);
        let result = {
            city : city,
            temp : data.main.temp,
            tempMin: data.main.temp_min,
            tempMax : data.main.temp_max,
            humidity: data.main.humidity,
            feelsLike: data.main.feels_like,
            weather: data.weather[0].description,

        };
        console.log(city);
        return result;
    }
    catch(err){
        throw err;
    }
    }
    let handleChange = (event) => {
        setCity(event.target.value)
    }
    async function handleSubmit(evt) {
        try {evt.preventDefault();
        let newinfo = await fetchData();
        console.log(newinfo);
        updateInfo(newinfo);
        
        setCity("");
        }
        catch(err){
            setError(true);
        }

    }
    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city}
                    onChange={handleChange} />
                <br />
                <br />
                <Button variant="contained" type='submit' endIcon={<ManageSearchIcon />}>Search
                </Button>
                {error && <p style={{color:"red",fontWeight:"bold"}}>NO Such Place Exist</p>}
            </form>
            
        </div >
    )
}