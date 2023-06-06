import { Statistic, StatList, Title, Item } from './StatisticsStyled';

const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(obj => {
          const randomColor = Math.floor(Math.random() * 16777215).toString(16);
          return (
            <Item key={obj.id} colorBackg={randomColor}>
              <span className="label">{obj.label}</span>
              <span className="percentage">%{obj.percentage}</span>
            </Item>
          );
        })}
      </StatList>
    </Statistic>
  );
};

export default Statistics;
