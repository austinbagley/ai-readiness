// src/data/questions.ts

import { Question } from '@/./types/assessment';

export const questions: Question[] = [
  {
    id: 1,
    text: "How well defined is your AI strategy?",
    component: "Strategy",
    options: [
      { value: 1, label: "No formal strategy" },
      { value: 2, label: "Basic planning stage" },
      { value: 3, label: "Strategy defined but not implemented" },
      { value: 4, label: "Strategy partially implemented" },
      { value: 5, label: "Comprehensive strategy fully implemented" }
    ]
  },
  {
    id: 2,
    text: "How aligned is your AI strategy with business objectives?",
    component: "Strategy",
    options: [
      { value: 1, label: "No alignment" },
      { value: 2, label: "Limited alignment" },
      { value: 3, label: "Partial alignment" },
      { value: 4, label: "Strong alignment" },
      { value: 5, label: "Perfect alignment with clear KPIs" }
    ]
  },
  {
    id: 3,
    text: "How would you rate your organization's data quality?",
    component: "Data",
    options: [
      { value: 1, label: "Poor quality, siloed data" },
      { value: 2, label: "Basic data collection" },
      { value: 3, label: "Structured data available" },
      { value: 4, label: "High-quality, integrated data" },
      { value: 5, label: "Advanced data management" }
    ]
  },
  {
    id: 4,
    text: "How mature is your data governance framework?",
    component: "Data",
    options: [
      { value: 1, label: "No framework" },
      { value: 2, label: "Basic policies" },
      { value: 3, label: "Established framework" },
      { value: 4, label: "Advanced governance" },
      { value: 5, label: "Industry-leading practices" }
    ]
  },
  {
    id: 5,
    text: "How robust is your AI infrastructure?",
    component: "Infrastructure",
    options: [
      { value: 1, label: "No AI infrastructure" },
      { value: 2, label: "Basic computing resources" },
      { value: 3, label: "Dedicated AI resources" },
      { value: 4, label: "Advanced AI platform" },
      { value: 5, label: "State-of-the-art infrastructure" }
    ]
  },
  {
    id: 6,
    text: "How well integrated are your AI systems?",
    component: "Infrastructure",
    options: [
      { value: 1, label: "No integration" },
      { value: 2, label: "Basic integration" },
      { value: 3, label: "Partial integration" },
      { value: 4, label: "Well-integrated" },
      { value: 5, label: "Fully integrated ecosystem" }
    ]
  },
  {
    id: 7,
    text: "How would you rate your AI talent pool?",
    component: "Talent",
    options: [
      { value: 1, label: "No AI expertise" },
      { value: 2, label: "Limited expertise" },
      { value: 3, label: "Growing team" },
      { value: 4, label: "Strong team" },
      { value: 5, label: "Industry-leading talent" }
    ]
  },
  {
    id: 8,
    text: "How mature is your AI training program?",
    component: "Talent",
    options: [
      { value: 1, label: "No training program" },
      { value: 2, label: "Basic training" },
      { value: 3, label: "Structured program" },
      { value: 4, label: "Advanced program" },
      { value: 5, label: "Comprehensive program" }
    ]
  },
  {
    id: 9,
    text: "How robust are your AI governance policies?",
    component: "Governance",
    options: [
      { value: 1, label: "No policies" },
      { value: 2, label: "Basic guidelines" },
      { value: 3, label: "Established policies" },
      { value: 4, label: "Comprehensive framework" },
      { value: 5, label: "Industry-leading governance" }
    ]
  },
  {
    id: 10,
    text: "How well do you manage AI risks and compliance?",
    component: "Governance",
    options: [
      { value: 1, label: "No risk management" },
      { value: 2, label: "Basic risk awareness" },
      { value: 3, label: "Risk framework in place" },
      { value: 4, label: "Advanced risk management" },
      { value: 5, label: "Comprehensive risk & compliance" }
    ]
  }
];

export const industryAverages: Record<string, Record<string, number>> = {
  Technology: {
    Strategy: 3.8,
    Data: 4.2,
    Infrastructure: 3.9,
    Talent: 3.7,
    Governance: 3.5
  },
  "Financial Services": {
    Strategy: 3.6,
    Data: 3.9,
    Infrastructure: 3.7,
    Talent: 3.4,
    Governance: 4.0
  },
  // ... add more industries as needed
};