import React from 'react'
import { useQuery } from 'react-query';

import Posts from './Posts'
import { getPosts } from '../../api/posts';

function IndexPosts() {
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  });

  return (
    <>
      <div>IndexPosts</div>
      <Posts postsQuery={postsQuery} />
    </>
  )
}

export default IndexPosts