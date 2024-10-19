'use client';

import { AlertCircle, Terminal } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/shadcn/Accordion';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '../components/shadcn/Alert';
import { Button } from '../components/shadcn/Button';
import { useHudaiQuery } from '../redux/api/hudaiTest';

const Index = () => {
  const { data, isLoading } = useHudaiQuery({ limit: 100, page: 1 });
  return (
    <div className="">
      <p>content here</p>
      {isLoading ? <p>Loading...</p> : <p>{data?.hudai.message}</p>}

      <div className="my-4">
        <p className="border-b border-red-500 mb-4">Button Component</p>
        <Button
          variant="outline"
          onClick={() => {
            console.log('clicked');
          }}
        >
          Button
        </Button>
      </div>

      <div className="my-4">
        <p className="border-b border-red-500 mb-4">Accordion</p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="my-4">
        <p className="border-b border-red-500 mb-4">Alert Component</p>
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
      </div>

      {/* <InitialLoader /> */}
    </div>
  );
};

export default Index;
