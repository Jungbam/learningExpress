const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '..', 'data', 'restaurants.json')

const getStoredRestaurants = () => {
  const fileData = fs.readFileSync(filePath)
  const storedRestaurants = JSON.parse(fileData)

  return storedRestaurants
}

const storedRestaurants = (storableRestaurants) => {
  fs.writeFileSync(filePath, JSON.stringify(storableRestaurants))
}

module.exports = {
  getStoredRestaurants,
  storedRestaurants,
}
