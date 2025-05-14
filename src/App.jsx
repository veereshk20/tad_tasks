import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const TADScreening = () => {
  const currentDate = new Date();
  const isFormActive = currentDate >= new Date('2025-05-05') && currentDate <= new Date('2025-05-13');
  return (
    <div className="min-h-screen bg-[#0066cc] text-white p-6 font-sans">
      <div className="flex flex-col items-center text-center">
        <img src="LOGO.png" alt="TAD Logo" className="w-32 mb-4" />
        <h1 className="text-4xl font-bold text-orange-500 mb-2">TAD Club Screening Round</h1>
        <p className="text-lg max-w-2xl">Welcome to the Software Team Recruitment Screening! Explore the tasks below and show us what you’ve got!</p>
      </div>

      <div className="grid gap-6 mt-10 max-w-4xl mx-auto">
        <Card className="bg-white text-black">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-orange-600 mb-2">Assessment I</h2>
            <p className='mb-4'>Create a single github repo containing all the tasks.</p>
            <iframe 
              src="RST_3_Software_Team.pdf" 
              className="w-full h-[600px] border rounded-md" 
              title="Assessment Tasks"
            ></iframe>
          </CardContent>
        </Card>
        <Card className="bg-white text-black text-center">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">Submit Your Work</h2>
            <p className="mb-4">Click below to upload your submission. Submissions open on <strong>5th May</strong> and close on <strong>15th May</strong>.</p>
            {isFormActive ? (
              <Button asChild className="bg-orange-500 hover:bg-orange-600">
                <a href="https://forms.gle/M3N1DreBG4RoA1j2A" target="_blank">Upload Submission</a>
              </Button>
            ) : (
              <Button disabled className="bg-gray-400">Form Inactive</Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TADScreening;
