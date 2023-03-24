
const APIKEY = "spl7hkRbp2PjQ4y8jzp5et8aoXuBltnmeZMHbzdw"

export const fetchDataImage = async () => {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIKEY}`)
    return response.json()
}


export const fetchDataInfo = async () => {
    const response = await fetch('https://api.spacexdata.com/v3/info')
    return response.json()
}


export const fetchDataHistory = async () => {
    const response = await fetch('https://api.spacexdata.com/v3/history')
    return response.json()
}