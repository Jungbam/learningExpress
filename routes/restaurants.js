const express = require('express')
const router = express.Router()
const resData = require('../util/restaurant-data')
const uuid = require('uuid')

// 입력처리를 하기 위해서 .post()!!
router.post('/recommend', function (req, res) {
  // json 파일에 입력받을 배열이 있는지 확인 필요!!
  const restaurant = req.body
  restaurant.id = uuid.v4()
  const restaurants = resData.getStoredRestaurants()

  restaurants.push(restaurant)
  resData.storedRestaurants(restaurants)

  res.redirect('/confirm')
})

router.get('/confirm', function (req, res) {
  res.render('confirm')
})
router.get('/recommend', function (req, res) {
  res.render('recommend')
})
router.get('/restaurants', function (req, res) {
  const storedRestaurants = resData.getStoredRestaurants()
  // ejs 문법으로 동적인 값 전달하기
  res.render('restaurants', {
    restaurantsNum: storedRestaurants.length,
    restaurants: storedRestaurants,
  })
})

// get() 안에 동적인 url값을 할당하기 => 동적인 페이지 변환
// URL에 :을 추가하면 동적경로 생성
router.get('/restaurants/:id', function (req, res) {
  // url에서 : 뒤에 적은 값들이 들어감.
  const storedRestaurants = resData.getStoredRestaurants()
  const restaurant = req.params.id
  /* for( const restaurant of storedRestaurants){
    if(restaurant.id === restaurant){
      return res.render('restaurant-detail', {restaurant})
    }
  }
   */
  const result = storedRestaurants.filter((el) => {
    return el.id == restaurant
  })
  if (result.length !== 0) {
    res.render('restaurant-detail', { restaurant: result[0] })
  } else {
    res.status(404).render('404', { what: '음식점' })
  }
})

module.exports = router
