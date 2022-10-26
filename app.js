const path = require('path')
const express = require('express')

// app을 express 기반 객체로 만듬. -> express 내에 있는 함수들을 사용이 가능해짐.
const app = express()

// 참조되는 이미지, 파일 등의 기본 경로를 지정해주는 역할 .use(express.static(기본 경로가 될 파일명))
app.use(express.static('public'))
// path를 불러와서 path.join을 통해 경로를 할당해주고 그 경로를 통해 해당 파일을 응답으로 보내준다.
// 보내주는 것 : sendFile()

// 경로를 만들어줘야함.
app.get('/', function (req, res) {
  const htmlFielPath = path.join(__dirname, 'views', 'index.html')
  res.sendFile(htmlFielPath)
})
app.get('/about', function (req, res) {
  const htmlFielPath = path.join(__dirname, 'views', 'about.html')
  res.sendFile(htmlFielPath)
})
app.get('/confirm', function (req, res) {
  const htmlFielPath = path.join(__dirname, 'views', 'confirm.html')
  res.sendFile(htmlFielPath)
})
app.get('/recommend', function (req, res) {
  const htmlFielPath = path.join(__dirname, 'views', 'recommend.html')
  res.sendFile(htmlFielPath)
})
app.get('/restaurants', function (req, res) {
  const htmlFielPath = path.join(__dirname, 'views', 'restaurants.html')
  res.sendFile(htmlFielPath)
})

// 특정포트에서 들어오는 네트워크 트래픽을 감지하게 됨.
app.listen(3000)
