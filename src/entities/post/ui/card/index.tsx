import React, { FC, memo, useEffect, useRef, useState} from 'react';
import { IProps } from './interface';
import { Link } from 'react-router-dom';
import './style.scss';
import { getLineHeightElem } from '../../functions/getLineHeightElem';
import { isInValidDeckSize } from '../../functions/isInValidDescriptionSize';

const Card:FC<IProps> = ( { data, style, from }) => {
  const { id, title, body} = data;
  const descRef = useRef<HTMLDivElement>(null);
  const [isInValidSize,setIsInValidSize] = useState<boolean | null>(null);
  
  useEffect(()=> {
    const max = getLineHeightElem(descRef) * 3;
    setIsInValidSize(isInValidDeckSize(descRef, max));
  },[]);
  
  return (
    <div className={`card custom-card py-2 px-3 d-flex flex-column ${Boolean(id % 2 ) && 'odd'}`} style={style}>
      <strong>{ id }</strong>
      <div className="name"> { title }</div>
      <div>
        <div ref={descRef} className={` text-secondary ${isInValidSize && 'text-hidde'}`}>{ body }</div>
      </div>
      {isInValidSize &&
        <Link to={`/post/${id}`} className="btn btn-primary btn-sm ms-md-auto ml-auto">
          Перейти
        </Link>
      }
    </div>
  );
};

export default memo(Card);