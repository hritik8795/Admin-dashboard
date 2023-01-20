
import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: ' A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/line-chart-width-xaxis-padding-sujqi';

  render() {
    return (
      <div className="widgetSm">
      <br/>
      <span className ="widgetSmTitle"><h3>User Activity</h3></span>
      <br></br>
      <span className ="widgetSmTitle">This Month</span>
      <br/>
      <span className='widgetSmTitle'><b>16,543</b></span>
      <br/>
      <br/>
      <ResponsiveContainer width="90%" height="70%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 20, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div> 
    );
  }
}




// ------------------------------
// import React from "react"
// import "./widgetSm.css";
// import { Visibility } from "@material-ui/icons";
// import {PieChart,Pie,Cell} from "recharts";

// const App =()=>{
//   const data =[
//     {name:"Facebook",value:2000000},
//     {name:"Instagram",value:1500000000},
//     {name:"twitter",value:1000000000},
//     {name:"telegram",value:100000000},

//   ]
// }

// export default function WidgetSm() {
//   return (
//     <div className="widgetSm">
//     <div className ="widgetSmTitle">Social media users</div>
//     <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
//         <Pie
//           data={data}
//           cx={120}
//           cy={200}
//           innerRadius={60}
//           outerRadius={80}
//           fill="#8884d8"
//           paddingAngle={5}
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//         <Pie
//           data={data}
//           cx={420}
//           cy={200}
//           startAngle={180}
//           endAngle={0}
//           innerRadius={60}
//           outerRadius={80}
//           fill="#8884d8"
//           paddingAngle={5}
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//       </PieChart>
//     </div>
//   );
// }
//  // <div className="widgetSm">
//     //   <span className="widgetSmTitle">New Join Members</span>
//     //   <ul className="widgetSmList">
//     //     <li className="widgetSmListItem">
//     //       <img
//     //         src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
//     //         alt=""
//     //         className="widgetSmImg"
//     //       />
//     //       <div className="widgetSmUser">
//     //         <span className="widgetSmUsername">Anna Keller</span>
//     //         <span className="widgetSmUserTitle">Software Engineer</span>
//     //       </div>
//     //       <button className="widgetSmButton">
//     //         <Visibility className="widgetSmIcon" />
//     //         Display
//     //       </button>
//     //     </li>
//     //     <li className="widgetSmListItem">
//     //       <img
//     //         src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
//     //         alt=""
//     //         className="widgetSmImg"
//     //       />
//     //       <div className="widgetSmUser">
//     //         <span className="widgetSmUsername">Anna Keller</span>
//     //         <span className="widgetSmUserTitle">Software Engineer</span>
//     //       </div>
//     //       <button className="widgetSmButton">
//     //         <Visibility className="widgetSmIcon" />
//     //         Display
//     //       </button>
//     //     </li>
//     //     <li className="widgetSmListItem">
//     //       <img
//     //         src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
//     //         alt=""
//     //         className="widgetSmImg"
//     //       />
//     //       <div className="widgetSmUser">
//     //         <span className="widgetSmUsername">Anna Keller</span>
//     //         <span className="widgetSmUserTitle">Software Engineer</span>
//     //       </div>
//     //       <button className="widgetSmButton">
//     //         <Visibility className="widgetSmIcon" />
//     //         Display
//     //       </button>
//     //     </li>
//     //     <li className="widgetSmListItem">
//     //       <img
//     //         src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
//     //         alt=""
//     //         className="widgetSmImg"
//     //       />
//     //       <div className="widgetSmUser">
//     //         <span className="widgetSmUsername">Anna Keller</span>
//     //         <span className="widgetSmUserTitle">Software Engineer</span>
//     //       </div>
//     //       <button className="widgetSmButton">
//     //         <Visibility className="widgetSmIcon" />
//     //         Display
//     //       </button>
//     //     </li>
//     //     <li className="widgetSmListItem">
//     //       <img
//     //         src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
//     //         alt=""
//     //         className="widgetSmImg"
//     //       />
//     //       <div className="widgetSmUser">
//     //         <span className="widgetSmUsername">Anna Keller</span>
//     //         <span className="widgetSmUserTitle">Software Engineer</span>
//     //       </div>
//     //       <button className="widgetSmButton">
//     //         <Visibility className="widgetSmIcon" />
//     //         Display
//     //       </button>
//     //     </li>
//     //   </ul>
//     // </div>



// import React, { PureComponent } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

//   render() {
//     return (
//       <div className="widgetSm">
//       <span className ="widgetSmTitle"><h3>Order Stats</h3></span>
//       <ResponsiveContainer width="90%" height="90%">
//         <LineChart
//           width={500}
//           height={400}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//           <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//         </LineChart>
//       </ResponsiveContainer>
//       </div>
     
//     );
//   }
// }