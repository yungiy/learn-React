import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline
} from 'react-icons/md';
import {twMerge} from 'tailwind-merge';

export default function TodoListItem({todo, onRemove, onToggle}) {
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
        {checked ? <MdCheckBox className="fill-[#22b8cf]"/> :
          <MdCheckBoxOutlineBlank/>}
        <span
          className={twMerge(
            "ml-1",
            checked ? "text-[#adb5bd] line-through" : ""
          )}
        >
          {text}
        </span>
      </div>
      <div
        className="flex items-center text-base text-[#ff6b6b]
          cursor-pointer hover:text-[#ff8787]" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline/>
      </div>
    </div>
  )
}