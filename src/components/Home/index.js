import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class Home extends Component {
  state = {teamsData: [], isLoading: true}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const dataArray = data.teams
    const updatedData = dataArray.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsData: updatedData, isLoading: false})
  }

  render() {
    const {teamsData, isLoading} = this.state

    return (
      <div>
        <div className="heading-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-img"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        <ul className="teams-list">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            teamsData.map(eachTeam => (
              <TeamCard teamItem={eachTeam} key={eachTeam.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default Home
