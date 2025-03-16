"use client";
import React from "react";
import CountUp from "react-countup";

const achievementsList = [
  { metric: "Projects", value: 5, postfix: "+" },
  { metric: "Leetcode Questions Solved", value: 200, postfix: "+" },
  { metric: "Years of Experience", value: 1, postfix: "+" },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement) => (
          <div key={achievement.metric} className="flex flex-col items-center">
            <h2 className="text-4xl font-bold text-white flex items-center">
              <CountUp
                start={0}
                end={achievement.value}
                duration={2.5}
                separator=","
              />
              <span className="ml-1">{achievement.postfix}</span>
            </h2>
            <p className="text-gray-400 text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
