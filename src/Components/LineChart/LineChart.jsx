import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';

const LineChart = () => {

    const studentData = [
        { id: 1, name: "Alice", math: 55, science: 90, english: 78 },
        { id: 2, name: "Bob", math: 76, science: 85, english: 88 },
        { id: 3, name: "Charlie", math: 60, science: 62, english: 90 },
        { id: 4, name: "David", math: 65, science: 70, english: 75 },
        { id: 5, name: "Emma", math: 88, science: 86, english: 72 },
        { id: 6, name: "Frank", math: 70, science: 75, english: 65 },
        { id: 7, name: "Grace", math: 35, science: 48, english: 51 },
        { id: 8, name: "Hannah", math: 82, science: 80, english: 87 },
        { id: 9, name: "Ian", math: 78, science: 79, english: 84 },
        { id: 10, name: "Jack", math: 65, science: 79, english: 40 },
      ];
    return (
        <div>
            <LChart width={1270} height={500} data={studentData} className='bg-black ml-10 mr-10'>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={"math"} stroke='red'></Line>
                <Line dataKey={"science"} stroke='green'></Line>
                <Line dataKey={"english"} stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;