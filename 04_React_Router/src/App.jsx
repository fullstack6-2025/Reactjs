
// React Router  : Link 요청에 대해서 해당 페이지를 처리해주는 기능 
/*
  SPA : Single Page Application : Link <== 컴포넌트, 페이지(컴포넌트의 묶음) 일 부분를 호출 
    React, Vue, Anguler   <== Client Side Randerring , JSON으로 서버에서 값을 받아온다. , API Server  
  MPA : Multi Page Application  : a    <== 전체 페이지를 호출
    JSP, Thymeleaf  <== Server Side Randerring (WAS : 톰켓) 

  Router 설치 : npm install react-router-dom           <=== 5.x , 6,x , 7.x (현재)
    설치 이후 확인 : package.json => dependencies 에서 확인 

  Router 셋팅 :  react-router-dom 
    BrowserRouter : 리엑트의 모든 컴포넌트를 처리하는 곳에서 감싸줘야 함 , 
                    ex) main.jsx, index.jsx 
    Routes : 라우트들을 그룹핑하는 컴포넌트
    Route : 경로에 따라 보여줄 컴포넌트를 정의
    Link   : 페이지 새로고침 없이 이동할 수 있는 링크
    useNavigate() 훅 : 이벤트가 발생할때 특정 페이지 이동 (location.href = "/") <== 전체 페이지 
      - 원하는 컴포넌트, 페이지만 호출 
    
*/
import { Link } from "react-router-dom"
import Router from "./route/Router"
import { useNavigate } from "react-router-dom"

function App() {
     // useNavigate() 훅 사용  
     const navigate = useNavigate(); 

  return (
    <>
       <h1>React Router</h1> 
       <hr />
       <nav>
          <ul> 
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to= "/about"> About </Link></li>
            <li> <Link to ="/footer"> Footer </Link></li>
            <li> <Link to ="/company"> Company </Link></li>
            <li> <Link to ="/gallary"> Gallery </Link></li>
            <li> ==========useNavigate() 훅 사용 : 이벤트에 대해서 이동==========</li>
            <li> 
              <button onClick = {()=>{navigate("/")}}> 홈으로 이동 </button>
            </li>
            <li> 
              <button onClick = {()=>{navigate("/about")}}> About 이동 </button>
            </li>
            <li> 
              <button onClick = {()=>{navigate("/gallary")}}> Gallery 이동 </button>
            </li>
            
          </ul>
       </nav>

      <Router></Router>




    </>
  )
}

export default App
