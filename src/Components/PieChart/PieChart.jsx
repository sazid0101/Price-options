import { PieChart as PChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const PieChart = () => {
    const pieChartData = [
        { name: "Math", value: 85 },
        { name: "Science", value: 90 },
        { name: "English", value: 78 },
        { name: "History", value: 88 },
        { name: "Geography", value: 75 },
      ];
      const pieChartData2 = [
        { name: "Basic Plan", value2: 150 },
        { name: "Standard Plan", value2: 200 },
        { name: "Premium Plan", value2: 120 },
        { name: "Student Plan", value2: 180 },
        { name: "VIP Plan", value2: 80 },
      ];
    return (
        <div>
            <PChart width={400} height={400}>
                <Pie  data={pieChartData} dataKey='value' cx="50%" cy="50%" innerRadius={30} outerRadius={60} fill='green'></Pie>
                <Pie  data={pieChartData2} dataKey="value2" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
            </PChart>
        </div>
    );
};

export default PieChart;