export interface IndustryScores {
    [key: string]: number;
  }
  
export interface IndustryAverages {
    [industry: string]: IndustryScores;
  }

export const INDUSTRY_AVERAGES: IndustryAverages = {
    'Technology': {
      Strategy: 4.2,
      Data: 4.5,
      Infrastructure: 4.3,
      Talent: 4.0,
      Governance: 3.8
    },
    'Financial Services': {
      Strategy: 3.8,
      Data: 4.0,
      Infrastructure: 3.5,
      Talent: 3.7,
      Governance: 4.2
    },
    'Other': {
      Strategy: 1,
      Data: 1,
      Infrastructure: 1,
      Talent: 1,
      Governance: 1
    },
    'Something': {
      Strategy: 3.8,
      Data: 4.0,
      Infrastructure: 3.5,
      Talent: 3.7,
      Governance: 4.2
    },
    'FSomething': {
      Strategy: 3.8,
      Data: 4.0,
      Infrastructure: 3.5,
      Talent: 3.7,
      Governance: 4.2
    },
    'Otheradsfdf': {
      Strategy: 3.8,
      Data: 4.0,
      Infrastructure: 3.5,
      Talent: 3.7,
      Governance: 4.2
    },
    // ... other industries
  };