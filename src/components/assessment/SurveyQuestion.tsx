// src/components/assessment/SurveyQuestion.tsx
'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { Answer } from '@/types/assessment';
import { questions } from '@/data/questions';

export interface SurveyQuestionProps {
  currentQuestionIndex: number;
  answers: Answer[];
  onAnswerSubmit: (answer: Answer) => void;
}

const SurveyQuestion: React.FC<SurveyQuestionProps> = ({
  currentQuestionIndex,
  onAnswerSubmit,
}) => {
  const question = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / questions.length) * 100;

  const handleOptionSelect = (value: number) => {
    const answer: Answer = {
      questionId: question.id,
      value: value,
      component: question.component
    };
    onAnswerSubmit(answer);
  };

  return (
    <div className="bg-slate-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white">
        <CardContent className="p-6">
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </span>
                <span className="text-sm text-slate-600">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-slate-900">{question.text}</h2>

              <div className="space-y-3">
                {question.options.map((option) => (
                  <motion.div
                    key={option.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      onClick={() => handleOptionSelect(option.value)}
                      className="w-full p-4 text-left rounded-lg border border-slate-200 
                        hover:border-indigo-600 hover:bg-indigo-50 transition-all duration-200
                        group focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-slate-300 
                          group-hover:border-indigo-600 group-hover:bg-indigo-100 
                          flex items-center justify-center text-sm font-medium text-slate-600 
                          group-hover:text-indigo-700">
                          {option.value}
                        </div>
                        <span className="text-slate-700 group-hover:text-slate-900">
                          {option.label}
                        </span>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SurveyQuestion;