import {MdCheckBox, MdCheckBoxOutlineBlank, MdEdit} from 'react-icons/md';
import {IoMdTrash} from "react-icons/io";
import {twMerge} from 'tailwind-merge';
import React from 'react';

function TodoListItem({todo, onRemove, onToggle}) {
  const {id, text, checked} = todo;
  return (
    <div
      className="p-2.5 flex items-center [&:nth-child(even)]:bg-[#f8f9fa] [&+&]: border-t-1 border-[#dee2e6]">
      <div
        onClick={() => onToggle(id)}
        className={twMerge(
          "cursor-pointer flex-1/2 flex items-center",
          checked ? "[svg]:text-xl" : ""
        )}
      >
        {checked ? <MdCheckBox size={20} className="fill-orange-400 text-lg"/> :
          <MdCheckBoxOutlineBlank size={20}/>}
        <span
          className={twMerge(
            "pl-1",
            checked ? "text-[#adb5bd] line-through" : ""
          )}
        >
          {text}
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer text-gray-500 hover:text-gray-300">
        <MdEdit size={20}/>
      </div>
      <div
        className="flex px-1.5 items-center cursor-pointer text-gray-500 hover:text-gray-300"
        onClick={() => onRemove(id)}>
        <IoMdTrash size={20}/>
      </div>
    </div>
  )
}

export default React.memo(TodoListItem);