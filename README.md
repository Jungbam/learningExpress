Express 공부해서 custom 서버 만들기

1. 기간 : 22.10.26~

2. 깨달음

  - express로 custom 서버를 만들어준 후 open live를 하면 안됨.
  
    왜? express로 custom 서버를 만들어줬는데 open live 확장을 쓰면 정적인 포트가 열림(5500)
    
  - 각 css, js는 각각 독립형 요청을 하게 됨으로 각각의 경로에 대한 해결법이 필요함.
  
  ![image](https://user-images.githubusercontent.com/108196588/197934730-1cf7e3c2-2ec5-4b18-812f-6c1d266d7220.png)
  
  - ejs 문법 : html내에서 동적인 변수 / js문법을 사용 가능하게 함.
  
  ![image](https://user-images.githubusercontent.com/108196588/197978601-92313760-b45e-4bf4-be49-01b2bbe55fc1.png)
  ![image](https://user-images.githubusercontent.com/108196588/197978753-0ae3ffb5-4f00-4327-af21-abc08b4e84ab.png)
  
  - ejs를 사용하는 이유 : 경로를 매번 지정해줄 필요없이 express를 사용해서 get()을 할때에 훨씬 간단하게 경로 지정이 가능해짐.
  
      ejs 경로를 기본적인 경로로 주고 그 안에서 템플릿 엔진이 ejs를 찾도록 하고 get()메소드 안에서는 해당 ejs 파일명을 통해 ejs를 불러오도록 함.
      
  ![image](https://user-images.githubusercontent.com/108196588/197979135-90388a29-524f-43c8-99d4-0b877d9d31d4.png)
  ![image](https://user-images.githubusercontent.com/108196588/197979041-31833cd9-f7aa-4674-8ea0-c0728afae036.png)
  
  - express에서 정적인 이미지, 파일에 접근할 떄에는 express.static('경로')메소드를 통해서 해당 경로로 접근하도록 한다.
  
                동적인 부분을 body에서 파싱할 때에는 기본으로 app.use(express.urlencoded({extended : false})를 한다.
                
                ☞ 해당내용에 대한 추가 설명
                
                ![image](https://user-images.githubusercontent.com/108196588/197980272-5e4017f7-543e-4062-8357-15b591dfc6ea.png)
