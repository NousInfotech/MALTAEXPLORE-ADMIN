
import PayoutsPage from '@/components/admin/PayoutsPage';
import PageContainer from '@/components/layout/page-container';
import React from 'react';

const page = () => {
  return (
    <PageContainer>
      <div className='container mx-auto'>
        <PayoutsPage />
      </div>
    </PageContainer>
  );
};

export default page;
