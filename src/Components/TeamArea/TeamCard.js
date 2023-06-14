function TeamCard(props) {
  return (
      <div className="team-card">
        <div className="team-card-text-name">{props.name}</div>
        <div className="team-card-text-positon">
            {props.position}
        </div>
        <div className="team-card-image">
          <img
            
            src={props.image}
            alt={props.name}
          />
        </div>
      </div>
  );
}

export default TeamCard;
