import ToursListPage from '@/components/admin/ToursListPage';
import PageContainer from '@/components/layout/page-container';
import React from 'react';

const page = () => {
  return (
    <PageContainer>
      <div className='container mx-auto'>
        <ToursListPage />
      </div>
    </PageContainer>
  );
};

export default page;
