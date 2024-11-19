// src/components/assessment/Results.tsx
'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, RotateCcw } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from 'recharts';
import { UserData, Answer } from '@/types/assessment';
import { INDUSTRY_AVERAGES, IndustryScores } from '@/data/industry-averages';

export interface ResultsProps {
  userData: UserData;
  answers: Answer[];
  onReset: () => void;
}



const Results: React.FC<ResultsProps> = ({ userData, answers, onReset }) => {
  // Calculate component scores
  const calculateComponentScores = () => {
    const scoresByComponent: { [key: string]: number[] } = {};
    
    answers.forEach(answer => {
      if (!scoresByComponent[answer.component]) {
        scoresByComponent[answer.component] = [];
      }
      scoresByComponent[answer.component].push(answer.value);
    });

    const averageScores: { [key: string]: number } = {};
    Object.entries(scoresByComponent).forEach(([component, scores]) => {
      averageScores[component] = scores.reduce((a, b) => a + b, 0) / scores.length;
    });

    return averageScores;
  };

  // Get industry averages based on user's industry
  const getIndustryAverages = (industry: string): IndustryScores => {
    return INDUSTRY_AVERAGES[industry] || INDUSTRY_AVERAGES['Other'];
  };



  const componentScores = calculateComponentScores();
  const industryAverages = getIndustryAverages(userData.industry);
  console.log("industry scores");
  console.log(industryAverages);
  console.log("component scores");
  console.log(componentScores);

  // Format data for radar chart
  const radarData = Object.keys(componentScores).map(component => ({
    subject: component,
    'Your Score': componentScores[component],
    'Industry Average': industryAverages[component],
  }));

  // Calculate overall score
  const overallScore = Object.values(componentScores).reduce((a, b) => a + b, 0) / Object.values(componentScores).length;

  // Generate recommendations based on scores
  const getRecommendations = (component: string, score: number) => {
    if (score < 2) {
      return `Your ${component} maturity is at an early stage. Focus on establishing basic ${component.toLowerCase()} foundations.`;
    } else if (score < 3.5) {
      return `Your ${component} capabilities are developing. Consider strengthening your ${component.toLowerCase()} practices.`;
    } else {
      return `Strong ${component} performance. Look for opportunities to innovate and lead in ${component.toLowerCase()}.`;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white">
        <CardContent className="p-6">
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-slate-900">
                Your AI Readiness Results
              </h1>
              <p className="text-xl text-slate-600">
                Overall Score: {overallScore.toFixed(1)} / 5
              </p>
              <p className="text-sm text-slate-500">
                {userData.name} • {userData.title} • {userData.industry}
              </p>
            </div>

            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis domain={[0, 5]} />
                  <Radar
                    name="Your Score"
                    dataKey="Your Score"
                    stroke="#4f46e5"
                    fill="#4f46e5"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="Industry Average"
                    dataKey="Industry Average"
                    stroke="#94a3b8"
                    fill="#94a3b8"
                    fillOpacity={0.6}
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Button
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
                onClick={() => window.print()} // Simplified for example
              >
                <Download className="mr-2 h-4 w-4" />
                Download Report
              </Button>
              <Button
                variant="outline"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                onClick={onReset}
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Start Over
              </Button>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">Key Recommendations</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {Object.entries(componentScores).map(([component, score]) => (
                  <Card key={component} className="p-4 bg-slate-50">
                    <h3 className="font-semibold text-slate-900">
                      {component}: {score.toFixed(1)}/5
                    </h3>
                    <p className="text-sm text-slate-600 mt-2">
                      {getRecommendations(component, score)}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Results;