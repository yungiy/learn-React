import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state, [action.name]: action.value
  }
}

function Info() {

  const [state, dispatch] = useReducer(reducer, {name: '', nickname: ''});
  const {name, nickname} = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <>
      <div>
        <input value={name} name="name" onChange={onChange}/>
        <input value={nickname} name="nickname" onChange={onChange}/>
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

export default Info;
