

const Lab6 = () => {

    const fruitsName = ['사과', '바나나', '오랜지']; 

  return (
    <div>
        <h1> Lab6 - JSX 블락에서 map() 사용 </h1>
        <hr />
        <ul>
           { fruitsName.map((fruit,index)=>{
            return <li key={index}>{fruit}</li>
           })}
        </ul>
    
    </div>
  )
}

export default Lab6