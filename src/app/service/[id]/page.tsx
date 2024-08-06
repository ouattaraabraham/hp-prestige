import React from 'react';
import { DATA_PAGE_DYNAMIQUE} from '../../Data/constant'
import Header from './Header';
import CardPresantation from './CardPresantation';


function getData(id:any) {
    const item = DATA_PAGE_DYNAMIQUE.find(data => data.id == id);
    if (!item) {
      throw new Error('Item not found');
    }
    return item;
}

const DynamicPage = ({ params }:{params:any} )=> {
  console.log(getData)
    const { id } = params;
  const item = getData(id);
  return (
    <div>
      <Header props={item}/>
      <CardPresantation props={item}/>
    </div>
  );
};

export default DynamicPage;
