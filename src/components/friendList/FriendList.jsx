import FriendListItem from './FriendListItem';
import { FriendsList } from './FriendListStyled';


const FriendList = ({ friends }) => {
  return (
      <FriendsList>
        {friends.map(obj => {
          return (
            <FriendListItem
              key={obj.id}
              avatar={obj.avatar}
              name={obj.name}
              isOnline={obj.isOnline}
            />
          );
        })}
      </FriendsList>
  );
};
export default FriendList;


