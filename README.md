Express 공부해서 custom 서버 만들기

1. 기간 : 22.10.26~
2. 깨달음
  - express로 custom 서버를 만들어준 후 open live를 하면 안됨.
    왜? express로 custom 서버를 만들어줬는데 open live 확장을 쓰면 정적인 포트가 열림(5500)
  - 각 css, js는 각각 독립형 요청을 하게 됨으로 각각의 경로에 대한 해결법이 필요함.
  ![image](https://user-images.githubusercontent.com/108196588/197934730-1cf7e3c2-2ec5-4b18-812f-6c1d266d7220.png)
