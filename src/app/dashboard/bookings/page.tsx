import BookingsPage from '@/components/admin/BookingsPage'
import PageContainer from '@/components/layout/page-container'
import React from 'react'

const page = () => {
  return (
    <PageContainer>
        <div className="container mx-auto">
            <BookingsPage />
        </div>
    </PageContainer>
  )
}

export default page