// src/components/assessment/SurveyQuestion.tsx
'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { Answer } from '@/types/assessment';
import { questions } from '@/data/questions';

// Define props interface
export interface SurveyQuestionProps {
  currentQuestionIndex: number;
  answers: Answer[];
  onAnswerSubmit: (answer: Answer) => void;
}

const SurveyQuestion: React.FC<SurveyQuestionProps> = ({
  currentQuestionIndex,
  answers,
  onAnswerSubmit,
}) => {
  const [showComparison, setShowComparison] = React.useState(false);
  const question = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    const answer: Answer = {
      questionId: question.id,
      value: Number(value),
      component: question.component
    };
    
    setShowComparison(true);
    onAnswerSubmit(answer);
  };

  const handleNext = () => {
    setShowComparison(false);
  };

  // Get comparison data for the current question
  const comparisonData = React.useMemo(() => {
    const currentAnswer = answers.find(a => a.questionId === question.id);
    return [
      {
        name: 'Your Score',
        score: currentAnswer?.value || 0
      },
      {
        name: 'Industry Average',
        score: 3.5 // This would come from your industry averages
      }
    ];
  }, [answers, question.id]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
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


            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">{question.text}</h2>

              <RadioGroup
                onValueChange={handleAnswer}
                className="space-y-3"
              >
                {question.options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value={option.value.toString()} 
                      id={`option-${option.value}`} 
                    />
                    <Label htmlFor={`option-${option.value}`} className="text-slate-700">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <AnimatePresence>
                {showComparison && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-6 space-y-4"
                  >
                    <h3 className="text-lg font-semibold text-slate-900">How you compare</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={comparisonData}>
                          <XAxis dataKey="name" />
                          <YAxis domain={[0, 5]} />
                          <Tooltip />
                          <Bar dataKey="score" fill="#4f46e5" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    {currentQuestionIndex < questions.length - 1 && (
                      <Button
                        onClick={handleNext}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                      >
                        Next Question
                      </Button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SurveyQuestion;