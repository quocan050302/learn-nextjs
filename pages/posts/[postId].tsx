import { useRouter } from 'next/router';
import React from 'react';

type PostDetailPageProps = {};

const PostDetailPage = (props: PostDetailPageProps) => {
  const router = useRouter();

  return (
    <div>
      <h1>Post Detail Page</h1>

      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
};

export default PostDetailPage;
