import {MdCheckBox, MdCheckBoxOutlineBlank, MdEdit} from 'react-icons/md';
import {IoMdTrash} from "react-icons/io";
import {twMerge} from 'tailwind-merge';
import React, {useState} from 'react';

function TodoListItem({todo, onRemove, onToggle, onUpdate}) {
  const {id, text, checked} = todo;

  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState('');

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
        {editing ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onUpdate(id, newText);
              setEditing(false);
            }}
            className="flex items-center"
          >
            <input
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="px-2 py-1 border border-gray-300 rounded"
            />
            <button type="submit" className="ml-2 text-gray-500 hover:text-gray-300">
              Save
            </button>
          </form>
        ) : (
          <>
            <div
              className="flex items-center cursor-pointer text-gray-500 hover:text-gray-300"
              onClick={() => setEditing(true)}
            >
              <MdEdit size={20}/>
            </div>
            <div
              className="flex px-1.5 items-center cursor-pointer text-gray-500 hover:text-gray-300"
              onClick={() => onRemove(id)}
            >
              <IoMdTrash size={20}/>
            </div>
          </>
        )}
      </div>
      {/*<div*/}
      {/*  className="flex items-center cursor-pointer text-gray-500 hover:text-gray-300">*/}
      {/*  <MdEdit size={20}/>*/}
      {/*</div>*/}
      {/*<div*/}
      {/*  className="flex px-1.5 items-center cursor-pointer text-gray-500 hover:text-gray-300"*/}
      {/*  onClick={() => onRemove(id)}>*/}
      {/*  <IoMdTrash size={20}/>*/}
      {/*</div>*/}
    </div>
  )
}

export default React.memo(TodoListItem);