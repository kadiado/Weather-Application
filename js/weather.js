const APIkey = '2heG4azzmsxk2y5tGHq0wpiUS0sS5atM'

const baseUrl = 'https://dataservice.accuweather.com/'

const getCityUrl = cityName => 
  `${baseUrl}locations/v1/cities/search?apikey=${APIkey}&q=${cityName}`

const getWeatherUrl = (cityKey) => `${baseUrl}currentconditions/v1/${cityKey}?apikey=${APIkey}&language=pt-br`

  
const FetchData = async url => {
 try{
    const response = await fetch(url)

    if(!response.ok) {
       throw new Error('Não foi possível obter os dados');
    }

    return response.json()
    
  } catch ({name, message}) { //destruct propriedades catch
    alert(`${name} ${message}`)
  }
}

const getCityData = cityName => FetchData(getCityUrl(cityName))

const getCityWeather = cityKey => FetchData(getWeatherUrl(cityKey))


// getCityWeather('São Paulo')
//   .then(console.log)


/* const getCityWeather = async cityName => {  
  try {
    
    if(!response.ok) {
      throw new Error('Não foi possivel obter os dados')
    }
    
    const [cityWeatherData] = await response.json()
    console.log(cityWeatherData);
    return cityWeatherData

  } catch ({name, message}) {
    alert(`${name} ${message}`)
  }
}  */

