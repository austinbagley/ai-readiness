import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Readiness Assessment',
  description: 'Evaluate your organization\'s AI maturity and get personalized recommendations',
};

export default function AssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
    //<div className="container mx-auto px-4 py-8">
  );
}