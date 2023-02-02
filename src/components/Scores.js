const Scores = ({ score, bestScore }) => {
  return (
    <>
      <div className="scores">
        <div>
          Score: <span className="score-holder">{score}</span>
        </div>
        <div>
          High Score: <span className="score-holder"> {bestScore}</span>
        </div>
      </div>
      <br />
    </>
  );
};
export default Scores;
