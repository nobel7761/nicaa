'use client';

import { useState } from 'react';
import InitialLoader from '../components/ui/InitialLoader';
import { useAllUsersQuery, useHudaiQuery } from '../redux/api/hudaiTest';

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);
  const { data, isLoading } = useHudaiQuery({ limit: 100, page: 1 });
  const { data: allUsers, isLoading: allUsersLoading } = useAllUsersQuery({
    limit: 100,
    page: 1,
  });
  return (
    <>
      <p>content here</p>
      {isLoading ? <p>Loading...</p> : <p>{data?.hudai.message}</p>}
      {allUsersLoading ? (
        <p>All Users Loading...</p>
      ) : (
        <p>{allUsers?.allUsers?.map((user) => user.name)}</p>
      )}

      {showLoader && <InitialLoader onComplete={() => setShowLoader(false)} />}
    </>
  );
};

export default Index;
