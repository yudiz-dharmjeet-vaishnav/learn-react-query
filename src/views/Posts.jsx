import React from 'react'
import { useQuery } from 'react-query';
import { getPosts } from '../api/posts';

function Posts() {
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  });

  console.log('postsQuery', postsQuery)
  
  return (
    <div>posts</div>
  )
}

export default Posts