import { Profile, Avatar, Name, Tag, Location, Stats } from "./ProfileStyled";

const User = (userData) => {
  const { username, tag, location, avatar, stats } = userData;
  return (
    <Profile>
      <div className="description">
        <Avatar
          src={avatar}
          alt="User avatar"
          className="avatar"
        />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </div>

      <Stats>
        <li>
          <span className="label">Followers </span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views </span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes </span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </Stats>
    </Profile>
  );
};

export default User;
