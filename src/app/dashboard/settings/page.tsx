import SettingsPage from '@/components/admin/SettingsPage';
import PageContainer from '@/components/layout/page-container';
import React from 'react';

const page = () => {
  return (
    <PageContainer>
      <div className='container mx-auto'>
        <SettingsPage />
      </div>
    </PageContainer>
  );
};

export default page;
