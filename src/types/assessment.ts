// src/types/assessment.ts

export interface UserData {
    name: string;
    title: string;
    email: string;
    industry: string;
  }
  
  export interface Answer {
    questionId: number;
    value: number;
    component: string;
  }
  
  export interface Question {
    id: number;
    text: string;
    component: string;
    options: {
      value: number;
      label: string;
    }[];
  }
  
  export interface ComponentScores {
    Strategy: number;
    Data: number;
    Infrastructure: number;
    Talent: number;
    Governance: number;
  }
  
  export interface AssessmentData {
    userData: UserData | null;
    answers: Answer[];
    currentQuestionIndex: number;
    isComplete: boolean;
  }
  
  export interface AssessmentHookReturn extends AssessmentData {
    updateUserData: (userData: UserData) => void;
    addAnswer: (answer: Answer) => void;
    resetAssessment: () => void;
  }