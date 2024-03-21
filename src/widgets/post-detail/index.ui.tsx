import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ICard } from '../../entities/post/ui/card/interface';
import './style.scss';
import { getPost } from './api/get-post';

const PostDetail = () => {
  const [post, setPost] = useState<ICard | null>(null);
  const id = useParams().id;
  
  useEffect(()=> {
    if (id) {
      getPost(id).then((data) => setPost(data));
    }
  },[]);
  
  return (
    <>
      <div className="post">
        <div className="post__header">
          <Link to="/home" className="btn btn-primary btn-sm">Назад</Link>
        </div>
        <div className="card p-2">
          { id ?
            <div>
              <h4 className="mb-2">{ post?.title }</h4>
              <p>{ post?.body }</p>
            </div>
            :
            <div className="text-center p-3">Пусто</div>
          }
        </div>
      </div>
    </>
  );
};

export default PostDetail;