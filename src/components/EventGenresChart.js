import { useState, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);
  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

  const getData = () => {
    return genres.map((genre) => {
      const filteredEvents = events.filter((event) =>
        event.summary.includes(genre)
      );
      return {
        name: genre,
        value: filteredEvents.length,
      };
    });
  };

  useEffect(() => {
    setData(getData());
  }, [events]);

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius * 1.1; // Slightly adjust the position of the labels
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return percent ? (
      <text
        x={x}
        y={y}
        fill="#8884d8"
        className="pie-label"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize={window.innerWidth <= 810 ? '10px' : '12px'}
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  return (
    <ResponsiveContainer className="responsive-container">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={window.innerWidth <= 810 ? 100 : 130}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;
