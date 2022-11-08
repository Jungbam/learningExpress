const path = require('path')
const express = require('express')

const defaultRoutes = require('./routes/default')
const restaurantsRoutes = require('./routes/restaurants')

// app을 express 기반 객체로 만듬. -> express 내에 있는 함수들을 사용이 가능해짐.
const app = express()

// express에 특정 옵션을 줄 수 있음.
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// 참조되는 이미지, 파일 등의 기본 경로를 지정해주는 역할
// 정적인 부분 : .use(express.static(기본 경로가 될 파일명))
app.use(express.static('public'))
// 동적인 부분 : .use(express.urlencoded())
app.use(express.urlencoded({ extended: false }))
/*urlencoded({extended : })에 대한 설명
  true : 객체 형태로 전달된 데이터내에서 또다른 중첩된 객체를 허용한다
  false : 객체 형태로 전달된 데이터내에서 또다른 중첩된 객체를 허용하지 않는다
   ☞ false : node.js에 내장된 queryString
      true : npm qs 라이브러리
즉 true로 설정을 하고자 하면 npm qs 라이브러리를 설치후에 사용하면 됨.*/

app.use('/', defaultRoutes)
app.use('/', restaurantsRoutes)

// 위에 코드에서 실행되지 않고 남은 모든 경로를 처리
app.use(function (req, res) {
  res.status(404).render('404', { what: '페이지' })
})

// 서버 문제를 처리할 미들웨어
app.use(function (error, req, res, next) {
  res.status(500).render('500')
})

// 특정포트에서 들어오는 네트워크 트래픽을 감지하게 됨.
app.listen(3000)
