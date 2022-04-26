#!/usr/bin/env node
const getWeather = require('weather01')

if(process.argv[2] === '--help') {
  console.log(`
  Usage: weather <cityName>

  Example: weather 北京
  `
  )
} else {
  let city = process.argv[2]
  getWeather(city)
    .then(data => {
      console.log('当前城市:' + data.result.location.city)
      console.log('天气:' + data.result.now.text)
      console.log('温度:' + data.result.now.temp)
      console.log('风力:' + data.result.now.wind_dir + data.result.now.wind_class)

    }).catch(e =>{
      console.log(e)
    })
}
