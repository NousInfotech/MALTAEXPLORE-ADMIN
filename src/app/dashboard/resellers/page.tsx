
import ResellersPage from '@/components/admin/ResellersPage'
import PageContainer from '@/components/layout/page-container'

import React from 'react'

const page = () => {
  return (
    <PageContainer>
        <div className='container mx-auto'>
            <ResellersPage />
        </div>
    </PageContainer>
  )
}

export default page