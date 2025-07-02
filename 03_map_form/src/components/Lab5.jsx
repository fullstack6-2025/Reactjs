

const Lab5 = () => {

    const fruitsName = ['사과', '바나나', '오랜지']; 

    // 배열의 맵을 사용해서 엘리멘트를 처리할때 엘리멘트에 고유한 키값을 적용 
    const fruits = fruitsName.map((fruit, index) => {
        return <li key = {index}>{fruit}</li>
    }); 


  return (
    <div>
        <h1> Lab5 - map() 을 사용해서 출력 : 고유키를 생성하며 출력 </h1>
        <hr /> 
        <ul>
            {fruits}
        </ul>
    </div>
  )
}

export default Lab5