import './index.css'

const LatestMatch = props => {
  const {matchDetail} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    venue,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = matchDetail

  return (
    <div className="latest-match-bg-container">
      <div className="latest-match-card">
        <div>
          <p className="competing-team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-img"
        />
      </div>

      <div className="latest-match-details-1">
        <h1 className="first-label">First Innings</h1>
        <p className="first-innings">{firstInnings}</p>
        <h1 className="second-label">Second Innings</h1>
        <p className="second-innings">{secondInnings}</p>
        <h1 className="mom-label">Man Of The Match</h1>
        <p className="m-o-m">{manOfTheMatch}</p>
        <h1 className="umpire-label">Umpires</h1>
        <p className="umpires">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
