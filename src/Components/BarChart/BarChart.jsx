import { BarChart as BChart, Bar, XAxis,YAxis } from 'recharts';

const BarChart = () => {
    const studentData = [
        { name: "Alice", math: 55, science: 60, english: 78 },
        { name: "Bob", math: 76, science: 85, english: 68 },
        { name: "Charlie", math: 70, science: 62, english: 80 },
        { name: "David", math: 65, science: 70, english: 75 },
        { name: "Emma", math: 68, science: 86, english: 72 },
      ];
    return (
        <div>
            <BChart width={1000} height={500} data={studentData}>
                <XAxis dataKey='name'></XAxis>
                {/* <YAxis dataKey='marks'></YAxis> */}
                <Bar dataKey="math" fill='#8884d8'></Bar>
                <Bar dataKey="science" fill='red'></Bar>
                <Bar dataKey="english" fill='yellow'></Bar>
            </BChart>
        </div>
    );
};

export default BarChart;