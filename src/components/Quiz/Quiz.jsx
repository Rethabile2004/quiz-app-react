import './Quiz.css'

function Quiz() {
  return <div className="container">
    <h1>Quiz App</h1>
    <br />
    <h2>Which device is required for the Internet Connection?</h2>
    <ul>
        <li>Moderm</li>
        <li>Router</li>
        <li>LAN Cable</li>
        <li>Pen Drive</li>
    </ul>
    <button>Next</button>
    <div className="index">
        1 of 5 questions
    </div>
  </div>;
}

export default Quiz;
