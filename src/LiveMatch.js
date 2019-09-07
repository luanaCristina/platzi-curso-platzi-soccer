import React from "react";
import { getMatch } from "./api";

import "./LiveMatch.css";

const dateTimeFormat = Intl.DateTimeFormat("pt-br", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric"
});
const formatDate = date => dateTimeFormat.format(new Date(date));

const LiveMatch = () => {
  const [loading, setLoading] = React.useState();
  const [match, setMatch] = React.useState();
  const [homeTeamGoals, setHomeTeamGoals] = React.useState(0);
  const [awayTeamGoals, setAwayTeamGoals] = React.useState(0);
  React.useEffect(() => {
    const load = async () => {
      setLoading(true);
      const match = await getMatch(1);
      setMatch(match);
      setLoading(false);
    };
    load();
  }, []);
  console.log(match);
  return (
    <div>
      {loading && <h1>Carregando partida</h1>}
      {!loading && match && (
        <div className="match">
          <div className="match-header">
            <div className="home-team">
              <span className="team-name">{match.homeTeamName}</span>
              <span className="team-score">{homeTeamGoals}</span>
            </div>
            <div className="versus">X</div>
            <div className="away-team">
              <span className="team-score">{awayTeamGoals}</span>
              <span className="team-name">{match.awayTeamName}</span>
            </div>
          </div>
          <div className="match-info">
            <div className="match-date">{formatDate(match.date)}</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default LiveMatch;
