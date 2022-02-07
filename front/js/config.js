// loading config datas
async function loadConfig() { // return value contains in config.json file
    let config = await fetch("../../config.json");
    return config.json();
}
