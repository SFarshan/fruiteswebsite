import React from 'react'

const FruitsCard = ({fruit}) => {
  console.log(fruit);
  return (
    <div>
        <img src={require(`../assets/${fruit.image}.jpeg`)} alt={`${fruit.image}`}
        className='object-cover w-full h-52 '/>
        <div>
            <span>{fruit.name}</span>
            <span>{fruit.price}</span>
        </div>

    </div>
  )
}

export default FruitsCard;