// 컴포넌트 생성 및 중첩
//React 컴포넌트의 이름은 항상 대문자로 시작해야 하고 HTML 태그는 소문자로 시작해야 합니다.
function MyButton() {
  return (
    <button onClick={() => {
    }}>나는 버튼</button>
  )
}

function Component() {
  return (
    <div style={{border: '1px solid #ccc', padding: '1rem'}}>
      <h1>안녕</h1>
      <MyButton/>
    </div>
  )
}

// 데이터 표시하기
const user = {
  name: 'Kendrick Lamar',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90
};

function Profile() {
  return (
    <div style={{border: '1px solid #ccc', padding: '1rem'}}>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </div>
  )
}

// 리스트렌더링
const products = [
  {title: 'medicine', isharmful: false, id: 1},
  {title: 'drug', isharmful: true, id: 2},
  {title: 'hemp', isharmful: true, id: 3}
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isharmful ? 'black' : 'red'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <div style={{border: '1px solid #ccc', padding: '1rem'}}>
      <ul>{listItems}</ul>
    </div>
  );
}

// 화면 렌더링
import {useState} from 'react';

function MyApp() {
  return (
    <div style={{border: '1px solid #ccc', padding: '1rem'}}>
      <h1>각각 올라가는 버튼</h1>
      <MyButton2/>
      <MyButton2/>
    </div>
  );
}

function MyButton2() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

// 훅을 이용한 설계 모두 같이 올라가는 버튼
function MyApp2() {
  const [countBtn, setCountBtn] = useState(0);

  function handleClick() {
    setCountBtn(countBtn + 1);
  }

  return (
    <div style={{border: '1px solid #ccc', padding: '1rem'}}>
      <h1>모두 같이 올라가는 버튼</h1>
      <MyButton3 count={countBtn} onClick={handleClick}/>
      <MyButton3 count={countBtn} onClick={handleClick}/>
    </div>
  );
}

//eslint-disable-next-line react/prop-types
function MyButton3({onClick, count}) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

function App() {
  return (
    <>
      <Component/>
      <Profile/>
      <ShoppingList/>
      <MyApp/>
      <MyApp2/>
    </>
  )
}

export default App