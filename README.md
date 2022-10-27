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
![image](https://user-images.githubusercontent.com/108196588/197980719-ae3aed4b-b873-430e-9036-c1749719c40b.png)
                
                  
  - ejs에서 삼항연산자를 사용하려다가 에러를 만남.
  ![image](https://user-images.githubusercontent.com/108196588/198182758-60ab31f3-2bbd-45a6-b07b-006e54793d97.png)
  
    ★ 무엇이 문제인가 ? 삼항연산자는 표현식을 반환해야하는데 나는 거기에 for문을 작성한것.
    
       표현식 vs 값 vs 문을 처음으로 알았다.. 분리된 개념이라는 것을!
       
       공부할때 참조 사이트 :  https://intrepidgeeks.com/tutorial/javascript-expression-expression
       
    ☞ 결론 : 배열컴퍼넌트를 생성했을 때 .map()을 사용하여 배열을 반환했기 때문에 표현식인 배열은 반환이 가능했던 것이고 문을 사용한 나의 코드는 삼항연산자로 반환이 안된다는 것!
    
              그러니까 for ~ else 문을 사용해야한다!

