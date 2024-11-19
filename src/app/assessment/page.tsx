'use client';

import { useAssessment } from '@/hooks/UseAssessment';
import InitialForm from '@/components/assessment/InitialForm';
import SurveyQuestion from '@/components/assessment/SurveyQuestion';
import Results from '@/components/assessment/Results';
import { UserData } from '@/types/assessment';

export default function AssessmentPage() {
  const {
    userData,
    answers,
    currentQuestionIndex,
    isComplete,
    updateUserData,
    addAnswer,
    resetAssessment
  } = useAssessment();

  const handleInitialSubmit = (formData: UserData) => {
    updateUserData(formData);
  };

  const renderStage = () => {
    if (!userData) {
      return <InitialForm onSubmit={handleInitialSubmit} />;
    }

    if (!isComplete) {
      return (
        <SurveyQuestion
          currentQuestionIndex={currentQuestionIndex}
          answers={answers}
          onAnswerSubmit={addAnswer}
        />
      );
    }

    return (
      <Results
        userData={userData}
        answers={answers}
        onReset={resetAssessment}
      />
    );
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {renderStage()}
    </main>
  );
}