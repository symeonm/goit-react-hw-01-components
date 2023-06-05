import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  
  return (
    <ul class="friend-list">
      {friends.map((obj) => {
        // console.log(obj.id)
        return <FriendListItem key={obj.id} avatar={obj.avatar} name={obj.name} isOnline={obj.isOnline}/>;
      })}
    </ul>
  );
};
export default FriendList;
