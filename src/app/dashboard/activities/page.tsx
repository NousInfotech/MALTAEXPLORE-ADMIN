import RecentActivityPage from '@/components/admin/RecentActivityPage'
import PageContainer from '@/components/layout/page-container'
import React from 'react'

const page = () => {
  return (
    <PageContainer>
        <div className="container mx-auto">
            <RecentActivityPage />
        </div>
    </PageContainer>
  )
}

export default page