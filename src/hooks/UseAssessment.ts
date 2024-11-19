import { useState, useEffect } from 'react';
import { 
  UserData, 
  Answer, 
  AssessmentData, 
  AssessmentHookReturn 
} from '@/./types/assessment';
import { questions } from '@/./data/questions'; // We'll create this next

export const useAssessment = (): AssessmentHookReturn => {
  const [assessmentData, setAssessmentData] = useState<AssessmentData>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('aiAssessmentData');
      if (saved) {
        return JSON.parse(saved);
      }
    }
    return {
      userData: null,
      answers: [],
      currentQuestionIndex: 0,
      isComplete: false
    };
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('aiAssessmentData', JSON.stringify(assessmentData));
    }
  }, [assessmentData]);

  const updateUserData = (userData: UserData) => {
    setAssessmentData(prev => ({
      ...prev,
      userData
    }));
  };

  const addAnswer = (answer: Answer) => {
    setAssessmentData(prev => ({
      ...prev,
      answers: [...prev.answers, answer],
      currentQuestionIndex: prev.currentQuestionIndex + 1,
      isComplete: prev.currentQuestionIndex + 1 === questions.length
    }));
  };

  const resetAssessment = () => {
    setAssessmentData({
      userData: null,
      answers: [],
      currentQuestionIndex: 0,
      isComplete: false
    });
    if (typeof window !== 'undefined') {
      localStorage.removeItem('aiAssessmentData');
    }
  };

  return {
    ...assessmentData,
    updateUserData,
    addAnswer,
    resetAssessment
  };
};