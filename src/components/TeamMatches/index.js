import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    matchesData: [],
    matchDetails: '',
    isLoading: false,
    bgColor: '',
  }

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const latestMatchDetails = data.latest_match_details
    const updatedLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    const recentMatches = data.recent_matches
    const updatedRecentMatches = recentMatches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))
    this.setState({
      teamBannerUrl: data.team_banner_url,
      matchesData: updatedRecentMatches,
      matchDetails: updatedLatestMatchDetails,
      isLoading: false,
      bgColor: id,
    })
  }

  getTeamMatchesPage = () => {
    const {teamBannerUrl, matchesData, matchDetails, bgColor} = this.state

    return (
      <div className={`match-bg-container ${bgColor}`}>
        <img src={teamBannerUrl} alt="team banner" className="banner-img" />
        <h1 className="team-matches-heading">Latest Matches</h1>
        <LatestMatch matchDetail={matchDetails} key={matchDetails.id} />
        <ul className="match-card-list">
          {matchesData.map(each => (
            <MatchCard matchItem={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.getTeamMatchesPage()
        )}
      </div>
    )
  }
}

export default TeamMatches
