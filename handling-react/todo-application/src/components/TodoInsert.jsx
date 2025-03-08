import {MdAdd} from 'react-icons/md';
import {useCallback, useState} from 'react';

export default function TodoInsert({onInsert}) {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, [])

  const onSubmit = useCallback(e => {
      onInsert(value);
      setValue(''); // value 값 초기화
      // submit 이벤트는 브라우저에서 새로고침 발생
      // preventDefault()로 새로고침 방지
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="flex bg-[#495057]" onSubmit={onSubmit}>
      <input placeholder="할 일을 입력하세요" value={value} onChange={onChange}
             className="px-2 py-1 text-base font-mono text-white outline-none
              placeholder:text-[#dee2e6] flex-1"/>
      <button type="submit"
              className="bg-[#868e96] text-white px-2 text-lg flex
               items-center cursor-pointer hover:bg-[#adb5bd]">
        <MdAdd/>
      </button>
    </form>
  )
}