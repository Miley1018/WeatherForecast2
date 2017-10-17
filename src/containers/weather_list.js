import React,{Component} from 'react';
import Chart from '../components/chart';
import {connect} from 'react-redux';

class WeatherList extends Component{
    renderWeather(cityData){
        console.log(cityData);
        const temps = cityData.list.map(weather=>weather.main.temp);
        const pressures = cityData.list.map(weather=>weather.main.pressure);
        const humidities = cityData.list.map(weather=>weather.main.humidity);
        const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBGh7BWlPX0MDg633dIo0mO1SOmiudM_gI&q=${cityData.city.name},us`;
        return(
            <tr key={cityData.city.name}>
                <td><iframe 
                width="300"
                height="200"
                frameBorder="0" 
      
                src={url} 
                allowFullScreen
                ></iframe>
                </td>
                <td><Chart data={temps} unit='K' /></td>
                <td><Chart data={pressures} unit='hPa'/></td>
                <td><Chart data={humidities} unit='%'/></td>
            </tr>
        );
    };
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(K)</th>
                        <th>Pressure(hPa)</th>
                        <th>Humidity(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    };
}
function mapStateToProps(state){
    return{
        weather:state.weather
    };
}
export default connect(mapStateToProps)(WeatherList);