
import './App.css'
import Button from './components/Button'
import Button2 from './components/Button2'
import Button3 from './components/Button3'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Main2 from './components/Main2'

function App() {
  

  return (
    <>
      <Header />
      <b><i>
       초기 셋팅 완료 
       </i>
       </b>
       <h2> Main 컴포넌트 출력 </h2>
       <hr />
      <Main />
       <h2> Main2  컴포넌트 출력 </h2>
       <hr />
       <Main2 />

      <hr /> <br />
      <h2> Button 컴포넌트 : Props를 사용한 컴포넌트에게 데이터 전송 (부모에서 자식으로 전송) </h2>
      <Button text={"쳇GPT"} />
      <Button text={"깃허브"} />
      <Button text={"네이버"} />
      <Button text={"다음"} />
      <Button text={"구글"} />

      <hr /> <br />
      <h2> Button2 컴포넌트 : 구조분해 할당을 사용해서 처리함.  </h2>
      <Button2 text={"2-쳇GPT"} /> 
      <Button2 text={"2-깃허브"} /> 
      <Button2 text={"2-네이버"} /> 
      <Button2 text={"2-다음"} /> 
      <Button2 text={"2-구글"} /> 

      <hr /> <br />
      <h2> Button3 컴포넌트 : 여러 필드의 값 처리  </h2>

      <Button3 text={"3-쳇GPT"} color={"red"} /> 





      <Footer />
    </>
  )
}

export default App
