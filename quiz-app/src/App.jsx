import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Quiz from "./components/Quiz";
import Result from "./components/Result";


function App() {

const questions = [
{
question: "What is React?",
options: ["Library","Programming Language","Database","Operating System"],
answer: "Library"
},
{
question: "Who developed React?",
options: ["Google","Facebook","Microsoft","Apple"],
answer: "Facebook"
},
{
question: "What language is used in React?",
options: ["Python","JavaScript","Java","C++"],
answer: "JavaScript"
},
{
question: "React is mainly used for?",
options: ["Backend","UI","Database","Networking"],
answer: "UI"
},
{
question: "What hook manages state?",
options: ["useFetch","useState","useData","useHook"],
answer: "useState"
}
];

const [start,setStart] = useState(false);
const [current,setCurrent] = useState(0);
const [score,setScore] = useState(0);
const [selected,setSelected] = useState("");
const [finished,setFinished] = useState(false);

const startQuiz = () =>{
setStart(true);
};

const handleAnswer = (e)=>{
setSelected(e.target.value);
};

const nextQuestion = () =>{

if(selected === questions[current].answer){
setScore(score+1);
}

setSelected("");

if(current + 1 < questions.length){
setCurrent(current + 1);
}else{
setFinished(true);
}
};

const restartQuiz = ()=>{
setStart(false);
setCurrent(0);
setScore(0);
setSelected("");
setFinished(false);
};

return (
<div>

<Navbar score={score}/>

{!start && <Dashboard startQuiz={startQuiz}/>}

{start && !finished &&
<Quiz
questionData={questions[current]}
current={current}
total={questions.length}
selected={selected}
handleAnswer={handleAnswer}
nextQuestion={nextQuestion}
/>
}

{finished &&
<Result
score={score}
total={questions.length}
restartQuiz={restartQuiz}
/>
}

</div>
);
}

export default App;