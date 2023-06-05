const Statistics = ({stats}) => {
  
  return (
    <section class="statistics">
      {stats.title && <h2 class="title">{stats.title}</h2>}

      <ul class="stat-list">
        {stats.map(obj => {
          return (
            <li class="item" key={obj.id}>
              <span class="label">{obj.label}</span>
              <span class="percentage">%{obj.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
