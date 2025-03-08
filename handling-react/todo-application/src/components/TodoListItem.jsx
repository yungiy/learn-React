import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline
} from 'react-icons/md';
import {twMerge} from 'tailwind-merge';

export default function TodoListItem({todo}) {
  const {text, checked} = todo;

  return (
    <div
      className="p-2.5 flex items-center [&:nth-child(even)]:bg-[#f8f9fa] [&+&]: border-t-1 border-[#dee2e6]">
      <div
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
      <div className="flex items-center text-base text-[#ff6b6b]
          cursor-pointer hover:text-[#ff8787]">
        <MdRemoveCircleOutline/>
      </div>
    </div>
  )
}