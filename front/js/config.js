// const for the api url
const apiUrl = "http://localhost:3000/api/products/"

// loading config datas
async function loadConfig() { // return value contains in config.json file
    let config = await fetch("../../config.json")
    config = config.json()
    return config
}
