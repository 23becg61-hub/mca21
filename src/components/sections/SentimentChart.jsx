import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export const SentimentChart = ({ sentimentData, chartType = 'pie' }) => {
  const data = [
    { name: 'Positive', value: sentimentData.positive, color: '#10b981' },
    { name: 'Negative', value: sentimentData.negative, color: '#ef4444' }
  ];

  const total = sentimentData.positive + sentimentData.negative;

  if (total === 0) {
    return (
      <div className="flex items-center justify-center h-80 text-muted-foreground">
        <div className="text-center">
          <div className="text-2xl mb-2">📊</div>
          <p>No comments available for sentiment analysis</p>
        </div>
      </div>
    );
  }

  if (chartType === 'bar') {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip 
            formatter={(value, name) => [`${value} comments`, name]}
            labelFormatter={(label) => `${label} Comments`}
          />
          <Legend />
          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={120}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip 
          formatter={(value, name) => [`${value} comments (${Math.round((Number(value) / total) * 100)}%)`, name]}
        />
        <Legend 
          formatter={(value, entry) => (
            <span style={{ color: entry.color }}>
              {value}: {entry.payload.value} comments ({Math.round((entry.payload.value / total) * 100)}%)
            </span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};