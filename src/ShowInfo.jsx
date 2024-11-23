import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './ShowInfo.css';
export default function ShowInfo({weather}) {
  let winterUrl="https://images.unsplash.com/photo-1431036101494-66a36de47def?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let summerUrl="https://images.unsplash.com/photo-1553649084-3e42773ff0e3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let rainyUrl="https://images.unsplash.com/photo-1567688993206-43c34131b21f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let normal="https://images.unsplash.com/photo-1702924336479-dff86e72d357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
      <div className="show-info">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
           src={
            weather.humidity>80
            ?rainyUrl
            :weather.temp>15
            ?summerUrl
            :winterUrl
           }
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weather.city} &nbsp; &nbsp;
              {
            weather.humidity>80
            ?<ThunderstormIcon/>
            :weather.temp>15
            ?<WbSunnyIcon/>
            :<AcUnitIcon/>
           }
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
             <p>Temperature {weather.temp}&deg;C</p>
             <p>Humidity {weather.humidity}</p>
             <p>Maximum Temperature {weather.max}</p>
             <p>Minimum Temperature {weather.min}</p>
             <p>Weather described as <i>{weather.description}</i>and feels like {weather.feel}</p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
    );
  }