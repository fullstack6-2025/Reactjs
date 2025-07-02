import React from 'react'

const Lab3 = () => {
    // for 문을 사용 해서 배열의 값을 출력, 리엑트에 JSX 블락에서는 if, for문을 사용 불가능  
    // JSX 블락에서는 if 문 대신에 삼항연산자 , && , for 문 대신에 배열에 내장된 map() 메소드(함수) 
    const fruitsName = ['사과', '바나나', '오랜지']; 

    // 배열만 선언 
    const fruits=[]; 

    for (let i = 0 ; i < fruitsName.length; i++){
        fruits.push(<li> {fruitsName[i]}</li>); 
    }



  return (
    <div>
        <h1> Lab3 -  for 문을 사용 해서 출력 </h1>
        <hr /> 
        <ul>
            {fruits}
        </ul>

    </div>
  )
}

export default Lab3