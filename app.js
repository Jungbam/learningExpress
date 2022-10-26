const path = require('path')
const fs = require('fs')
const express = require('express')

// app을 express 기반 객체로 만듬. -> express 내에 있는 함수들을 사용이 가능해짐.
const app = express()

// express에 특정 옵션을 줄 수 있음.
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// 참조되는 이미지, 파일 등의 기본 경로를 지정해주는 역할
// 정적인 부분 : .use(express.static(기본 경로가 될 파일명))
app.use(express.static('public'))
// 정적인 부분 : .use(express.urlencoded())
app.use(express.urlencoded({ extended: false }))
/*urlencoded({extended : })에 대한 설명
  true : 객체 형태로 전달된 데이터내에서 또다른 중첩된 객체를 허용한다
  false : 객체 형태로 전달된 데이터내에서 또다른 중첩된 객체를 허용하지 않는다
   ☞ false : node.js에 내장된 queryString
      true : npm qs 라이브러리
즉 true로 설정을 하고자 하면 npm qs 라이브러리를 설치후에 사용하면 됨.*/

// 경로를 만들어줘야함.
app.get('/', function (req, res) {
  // path를 불러와서 path.join을 통해 경로를 할당해주고 그 경로를 통해 해당 파일을 응답으로 보내준다.
  // 보내주는 것 : sendFile()
  // const htmlFielPath = path.join(__dirname, 'views', 'index.html')
  // res.sendFile(htmlFielPath)

  // ejs로 엔진을 바꾸고 나서 render() 메소드 사용
  res.render('index')
})
app.get('/about', function (req, res) {
  res.render('about')
})
// 입력처리를 하기 위해서 .post()!!
app.post('/recommend', function (req, res) {
  // json 파일에 입력받을 배열이 있는지 확인 필요!!
  const restaurant = req.body
  const filePath = path.join(__dirname, 'data', 'restaurants.json')

  const fileData = fs.readFileSync(filePath)
  const storedRestaurants = JSON.parse(fileData)

  storedRestaurants.push(restaurant)
  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants))
  // 리디렉션하기
  res.redirect('/confirm')
})

app.get('/confirm', function (req, res) {
  res.render('confirm')
})
app.get('/recommend', function (req, res) {
  res.render('recommend')
})
app.get('/restaurants', function (req, res) {
  const filePath = path.join(__dirname, 'data', 'restaurants.json')

  const fileData = fs.readFileSync(filePath)
  const storedRestaurants = JSON.parse(fileData)
  // ejs 문법으로 동적인 값 전달하기
  res.render('restaurants', {
    restaurantsNum: storedRestaurants.length,
    restaurants: storedRestaurants,
  })
})

// 특정포트에서 들어오는 네트워크 트래픽을 감지하게 됨.
app.listen(3000)
