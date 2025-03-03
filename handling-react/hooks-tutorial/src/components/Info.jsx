import { useEffect, useState } from "react";

export default function Info() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  useEffect(() => {
    console.log("effect", name);
    return () => {
      console.log('언마운트');
    };
  }, []);

  return (
    <>
      <div>
        <input value={name} onChange={onChangeName} placeholder="이름 입력" />
        <input value={nickname} onChange={onChangeNickname} placeholder="닉네임 입력" />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </>
  );
}
