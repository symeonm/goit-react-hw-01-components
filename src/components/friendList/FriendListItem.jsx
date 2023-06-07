import { Status, Item } from './FriendsListItemStyled';
import propTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Item>
  );
};

FriendListItem.propTypes = {
  isOnline: propTypes.bool.isRequired,
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};

export default FriendListItem;


