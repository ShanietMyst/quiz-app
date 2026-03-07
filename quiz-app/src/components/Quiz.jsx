import ScoreBoard from "./ScoreBoard";

function Quiz({questionData,current,total,selected,handleAnswer,nextQuestion}){

return(

<div className="quiz">

<h2>Question {current+1} / {total}</h2>

<h3>{questionData.question}</h3>

<form>

{questionData.options.map((option,index)=>(
<div key={index}>

<label>
<input
type="radio"
name="answer"
value={option}
checked={selected === option}
onChange={handleAnswer}
/>

{option}

</label>

</div>
))}

</form>

<button onClick={nextQuestion}>
Next Question
</button>

<ScoreBoard/>

</div>

);

}

export default Quiz;