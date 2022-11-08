const express = require('express')

const router = express.Router()

// 경로를 만들어줘야함.
router.get('/', function (req, res) {
  // path를 불러와서 path.join을 통해 경로를 할당해주고 그 경로를 통해 해당 파일을 응답으로 보내준다.
  // 보내주는 것 : sendFile()
  // const htmlFielPath = path.join(__dirname, 'views', 'index.html')
  // res.sendFile(htmlFielPath)

  // ejs로 엔진을 바꾸고 나서 render() 메소드 사용
  res.render('index')
})
router.get('/about', function (req, res) {
  res.render('about')
})

module.exports = router
