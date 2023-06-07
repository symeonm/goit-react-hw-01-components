import { Statistic, StatList, Title, ItemStat } from './StatisticsStyled';
import propTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(obj => {
          const randomColor = Math.floor(Math.random() * 16777215).toString(16);
          return (
            <ItemStat key={obj.id} colorBackg={randomColor}>
              <span className="label">{obj.label}</span>
              <span className="percentage">%{obj.percentage}</span>
            </ItemStat>
          );
        })}
      </StatList>
    </Statistic>
  );
};

Statistics.propTypes = {
  title: propTypes.string.isRequired,
  stats: propTypes.array.isRequired
}

export default Statistics;
