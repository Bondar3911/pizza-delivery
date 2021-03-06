import React from 'react'

function Categories({id, onClickCategory}){

  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
  return (
    <div className="categories">
      <ul>
          {
            categories.map((categoryName, index) =>(
            <li key={index} onClick={() => onClickCategory(index)} className={id === index ? 'active' :''}>{categoryName}</li>
            ))
          }
        
      </ul>
    </div>
  );
}

export default Categories;
