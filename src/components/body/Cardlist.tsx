import  { useState } from 'react';

const CardList = () => {
  const [position, setPosition] = useState(0);

  const moveLeft = () => {
    console.log(position)
    setPosition((prevPos) => prevPos - 1);
  };

  const moveRight = () => {
    setPosition((prevPos) => prevPos + 1);
  };

  return (
    <div className="flex items-center">
      <button onClick={moveLeft}>&lt;</button>
      <div className="flex flex-row overflow-hidden space-x-4">
        <div className="w-32 h-32 bg-gray-200">Card 1</div>
        <div className="w-32 h-32 bg-gray-200">Card 2</div>
        <div className="w-32 h-32 bg-gray-200">Card 3</div>
		<div className="w-32 h-32 bg-gray-200">Card 1</div>
        <div className="w-32 h-32 bg-gray-200">Card 2</div>
        <div className="w-32 h-32 bg-gray-200">Card 3</div>
		<div className="w-32 h-32 bg-gray-200">Card 1</div>
        <div className="w-32 h-32 bg-gray-200">Card 2</div>
        <div className="w-32 h-32 bg-gray-200">Card 3</div>
		<div className="w-32 h-32 bg-gray-200">Card 1</div>
        <div className="w-32 h-32 bg-gray-200">Card 2</div>
        <div className="w-32 h-32 bg-gray-200">Card 3</div>
		<div className="w-32 h-32 bg-gray-200">Card 1</div>
        <div className="w-32 h-32 bg-gray-200">Card 2</div>
        <div className="w-32 h-32 bg-gray-200">Card 3</div>
		<div className="w-32 h-32 bg-gray-200">Card 1</div>
        <div className="w-32 h-32 bg-gray-200">Card 2</div>
        <div className="w-32 h-32 bg-gray-200">Card 3</div>
		<div className="w-32 h-32 bg-gray-200">Card 1</div>
        <div className="w-32 h-32 bg-gray-200">Card 2</div>
        <div className="w-32 h-32 bg-gray-200">Card 3</div>
		<div className="w-32 h-32 bg-gray-200">Card 1</div>
        <div className="w-32 h-32 bg-gray-200">Card 2</div>
        <div className="w-32 h-32 bg-gray-200">Card 3</div>
		<div className="w-32 h-32 bg-gray-200">Card 1</div>
        <div className="w-32 h-32 bg-gray-200">Card 2</div>
        <div className="w-32 h-32 bg-gray-200">Card 3</div>
		<div className="w-32 h-32 bg-gray-200">Card 1</div>
        <div className="w-32 h-32 bg-gray-200">Card 2</div>
        <div className="w-32 h-32 bg-gray-200">Card 3</div>
        {/* Add more cards here */}
      </div>
      <button onClick={moveRight}>&gt;</button>
    </div>
  );
};

export default CardList;
