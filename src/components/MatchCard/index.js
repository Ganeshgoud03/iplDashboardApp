import './index.css'

const MatchCard = props => {
  const {matchItem} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchItem
  const matchStatusClass = matchStatus === 'Won' ? 'win-class' : 'lost-class'
  return (
    <li className="match-card-bg-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-img"
      />
      <p className="match-card-competing-team">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={matchStatusClass}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
