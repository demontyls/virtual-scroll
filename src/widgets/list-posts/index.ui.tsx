import React, { useEffect, useState } from 'react';
import { Card } from '../../entities/post';
import {ListChildComponentProps, VariableSizeList} from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { ICard } from '../../entities/post/ui/card/interface';
import { getPosts } from '../../entities/post/api/get-post';

const ListCard = () => {
  const [entries, setEntries] = useState<ICard[]>([]);
  const [count, setCount] = useState(1);
  
  useEffect(() => {
     loadMoreItems();
  }, []);
  
  const isItemLoaded = ( index: number ) => index < entries.length && entries[index] !== null;
  const Row = (index: ListChildComponentProps) => {
    return <Card key={index.index} data={entries[index.index]} from={'Infinite-scroll'} setCount={setCount} style={index.style}/>
  }
  const loadMoreItems = async () => {
     const data = await getPosts(count);
      setEntries(entries.concat(data));
      setCount(count + 1);
  }
  
  return (
    <div className="virtual-wrapper d-flex justify-content-center">
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={entries.length * 10}
        loadMoreItems={loadMoreItems}
      >
        {({ onItemsRendered, ref }) => (
          <VariableSizeList
            className="List"
            height={124 * 5}
            width={500}
            itemCount={entries.length}
            onItemsRendered={onItemsRendered}
            itemSize={() => 180}
            ref={ref}
            children={Row}
          />
        )}
      </InfiniteLoader>
    </div>
  );
};

export default ListCard;
