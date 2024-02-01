import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Infobox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}) {
    let rain = "https://images.unsplash.com/photo-1618557703025-7ec58c83581a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"; 
    let hot = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fhot-weather&psig=AOvVaw2jWt9_9PCfCLPWysCI399J&ust=1704862320012000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCKiL1ZrBz4MDFQAAAAAdAAAAABAE";
    let cold = "https://unsplash.com/photos/snow-covered-road-between-bare-trees-under-cloudy-sky-during-daytime-odkyr3ipgjQ";

       
    return (
        <div className='InfoBox'>
            <div id='cardbox'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80
                             ? rain
                             : info.temp > 15
                             ? hot
                             : cold
                            }
                    
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {
                            info.humidity > 80
                             ? <ThunderstormIcon/>
                             : info.temp > 15
                             ? <WbSunnyIcon/>
                             : <AcUnitIcon/>
                            }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>temperature={info.temp}&deg;C</p>
                            <p>humidity={info.humidity}</p>
                            <p>tempMin={info.tempMin}&deg;C</p>
                            <p>tempMax={info.tempMax}&deg;C</p>
                            <p>the weather can be described as <b>{info.weather}</b> feels_like={info.feels_like}&deg;C</p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    );
}