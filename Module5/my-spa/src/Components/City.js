import { Col, Card, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useWeather } from "../api";

export default function City({ city }) {
    let { loading, weather, error } = useWeather(city);

    // let { location, current } = useWeather(city);
    // console.log(location);
    // console.log('loading = ' + loading);
    // console.log('error = ' + error);
    // console.log('weather = ' + weather);
    

    const navigate = useNavigate();

    const weatherIcons = {
        "Clear": "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_2-512.png",
        "Overcast": "https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-512.png",
        "Partly cloudy": "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_2-256.png",
        "Sunny": "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-256.png",
        "Rain": "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_6-256.png"
    };

    const getWeatherImage = () => {
        if (!weather || !weather.current) return null;
        return weatherIcons[weather.current.condition.text] || weatherIcons["Clear"];
        // return "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-512.png" // Sunny
        // return "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_2-512.png"; // Cloudy
        // return "https://picsum.photos/id/10/200/100";
    };

    return (
        <Col md={6} lg={3} key={city}>
            {!loading && !error ? (
            <Card className="  full-width-card">
                <Card.Img
                    variant="top"
                    // src="https://picsum.photos/id/10/200/100"
                    src={getWeatherImage()}
                    alt="Icon"
                />

                <div className="d-flex justify-content-between p-3 text-bg-secondary">
                    <h5 className="">{weather?.location.name}</h5>
                    <div className="subheading">{weather?.location.localtime}</div>
                </div>

                <Card.Body>
                    <div className="fw-lighter">Country:</div>
                    <p>{weather?.location.country}</p>

                    <div className="fw-lighter">Region:</div>
                    <p>{weather?.location.region}</p>

                    <div className="d-flex">
                        <div className="me-4">
                            <div className="fw-lighter">Lat:</div>
                            <p>{weather?.location.lat}</p>
                        </div>
                        <div>
                            <div className="fw-lighter">Lon:</div>
                            <p>{weather?.location.lon}</p>
                        </div>
                    </div>

                    <div className="fw-lighter">Timezone:</div>
                    <p>{weather?.location.tz_id}</p>

                    <Button
                        mt="auto"
                        variant="warning"
                        onClick={() =>
                            navigate({ pathname: "/location", search: `?city=${city}` })
                        }
                        >
                        Weather Information
                    </Button>
                </Card.Body>

            </Card>
            ) : null }
        </Col>
    );
}