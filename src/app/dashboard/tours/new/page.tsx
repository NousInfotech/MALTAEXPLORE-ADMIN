import CreateTourPage from '@/components/admin/CreateTourPage'
import PageContainer from '@/components/layout/page-container'
import React from 'react'

const page = () => {
  return (
    <PageContainer>
        <div className='container mx-auto'>
            <CreateTourPage />
        </div>
    </PageContainer>
  )
}

export default page