import Profile from '../profile';
import Statistics from '../statistics'
import FriendList from '../friendList'
import TransactionHistory from '../transaction'

import userData from '../../data/user.json';
import statisticsData from '../../data/data.json';
import friends from '../../data/friends.json';
import transaction from '../../data/transactions.json'


export const App = () => {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title = 'Upload stats' stats = {statisticsData}/>
      <FriendList friends={friends}/>
      <TransactionHistory transaction={transaction}/>
    </div>
  );
};
