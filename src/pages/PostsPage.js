import { useEffect, useState } from 'react';
import { myFetch } from '../utils';

const baseUrl = process.env.REACT_APP_BACKEND_URL;
if (!baseUrl) throw new Error('base url nerastas');

function PostsPage() {
  const [postsArray, setPostsArray] = useState([]);

  const getPostsAndSet = async (values) => {
    const resp = await myFetch(`${baseUrl}/articles`, 'GET', values);
    console.log('resp===', resp);
    setPostsArray(resp);
  };
  useEffect(() => {
    getPostsAndSet();
  }, []);

  // async function getPosts() {
  //   const resp = await fetch('http://localhost:3009/articles');
  //   console.log('resp===', resp);
  //   const dataInJs = await resp.json();
  //   setPostsArray(dataInJs);
  // }

  return (
    <div>
      <h1>Posts Page</h1>
      <div className='card' style={{ width: 18 + 'rem' }}>
        <div className='card-body'>
          <h5 className='card-title'>Card title</h5>
          <p className='card-content'>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </p>
          <p className='date'>2022-01-01</p>
        </div>
      </div>
    </div>
  );
}

export default PostsPage;
