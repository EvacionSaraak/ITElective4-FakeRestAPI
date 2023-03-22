import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { 
  useState 
} from 'react';
import { 
  Grid,
} from '@mui/material';
import CardDisplay from './components/cardDisplay.js';

function App() {
  const [jsonData, setData] = useState("");
  const fetchJsonData = () => {
    var url = "https://jsonplaceholder.typicode.com/posts";
    var rawData = "empty"
    Axios.get(url).then((res) => {
      rawData = res.data
      setData(rawData)
    });
    console.log(rawData)
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={fetchJsonData}>Retrieve Json Data</button>
            <br></br>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {jsonData && jsonData.map(({ userId, id, title, body }) => (
                    <CardDisplay userId={userId} id={id} title={title} body={body}/>
                ))}
            </Grid>
      </header>
    </div>
  );
}

export default App;
