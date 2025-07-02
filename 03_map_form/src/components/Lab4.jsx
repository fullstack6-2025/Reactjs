

const Lab4 = () => {

    const fruitsName = ['사과', '바나나', '오랜지']; 

    const fruits = fruitsName.map( (fruit) => {
        return <li>{fruit}</li>
    } ); 

    //const fruits = [<li>apple</li>, <li>Banana</li>, <li>Orange</li>]


  return (
    <div>
        <h1> Lab4 - map() 함수(메소드)를 이용해서 처리 </h1>
        <hr /> 
        <ul>
            {fruits}
        </ul>
    </div>
  )
}

export default Lab4