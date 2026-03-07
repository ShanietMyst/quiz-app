function Dashboard({startQuiz}){

return(
<div className="dashboard">

<h1>Welcome to the Quiz</h1>
<p>Test your knowledge!</p>

<button onClick={startQuiz}>
Start Quiz
</button>

</div>
);

}

export default Dashboard;