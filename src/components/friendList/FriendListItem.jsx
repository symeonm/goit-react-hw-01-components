import {Item, Status} from './FriendsListItemStyled'

const FriendListItem = ({avatar, name, isOnline}) => {
  
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Item>
  );
};

export default FriendListItem;
