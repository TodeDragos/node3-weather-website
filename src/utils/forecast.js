const request = require('request');

function forecast (longitude, latitude, callback)
{
    const url = `https://api.darksky.net/forecast/ec5f8bf831d5d44ead41c739482efe32/${longitude},${latitude}?units=si`;

    request({ url, json:true }, (error, { body }) => {
        if (error)
            callback('Unable to connect to weather service!', undefined);
        else if (body.error)
            callback('Unable to find location!', undefined);
        else
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. The high today is ${body.daily.data[0].temperatureMax} with a low of ${body.daily.data[0].temperatureMin}. There is a ${body.currently.precipProbability} change of rain`)
    })
}

module.exports = forecast;