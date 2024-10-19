'use client';

import InitialLoader from '../components/ui/InitialLoader';
import { useHudaiQuery } from '../redux/api/hudaiTest';

const Index = () => {
  const { data, isLoading } = useHudaiQuery({ limit: 100, page: 1 });
  return (
    <>
      <p>content here</p>
      {isLoading ? <p>Loading...</p> : <p>{data?.hudai.message}</p>}

      <InitialLoader />
    </>
  );
};

export default Index;
