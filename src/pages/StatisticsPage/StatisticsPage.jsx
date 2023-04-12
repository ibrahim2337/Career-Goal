import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Label } from "recharts";

const StatisticsPage = () => {
  const data = [
    { name: "Assignment 1", value: 60 },
    { name: "Assignment 2", value: 59 },
    { name: "Assignment 3", value: 60 },
    { name: "Assignment 4", value: 60 },
    { name: "Assignment 5", value: 57 },
    { name: "Assignment 6", value: 60 },
    { name: "Assignment 7", value: 60 },
    { name: "Assignment 8", value: 60 },
  ];

  return (
      <div className="mt-20">
          <div className="my-10">
              <ResponsiveContainer width="100%" height={400}>
                  <PieChart width={400} height={400}>
                      <Pie
                          dataKey="value"
                          isAnimationActive={true}
                          data={data}
                          cx="50%"
                          cy="50%"
                          outerRadius={150}
                          innerRadius={100}
                          fill="#3B82F6"
                          label
                      >
                          <Label
                              value="Assignment Marks"
                              position="center"
                              fill="#3B82F6"
                              fontSize={20}
                              fontWeight={700}
                          />
                      </Pie>
                      <Tooltip />
                  </PieChart>
              </ResponsiveContainer>

              <h2 className="text-center mt-10 text-3xl font-bold text-[#3B82F6]">
                  All assignment marks
              </h2>
          </div>
      </div>
  );
};

export default StatisticsPage;
