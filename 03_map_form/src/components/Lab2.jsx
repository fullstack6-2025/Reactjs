import React from 'react'

const Lab2 = () => {
    // 태그를 배열에 넣고 배열을 출력 
    // Java 는 배열에 동일한 자료형, JavaScript 는 배열에 여러 자료형을 넣을 수 있다. 
    // 배열 : [ 값, 값, 값]    ,    값 : 정수, 실수, 불리언, 객체, 
    const fruits = [<li>apple</li>, <li>Banana</li>, <li>Orange</li>]

  return (
    <div>
        <h1> Lab2 - 배열에 엘리먼트를 넣어서 출력 : 배열자체를 출력  </h1>
        <hr /> 
        <ul>
            {fruits}
        </ul>


    </div>
  )
}

export default Lab2