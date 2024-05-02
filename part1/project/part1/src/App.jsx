import React, { useState } from "react";

///////////////////////ROOT Component
function App() {
  const now = new Date();
  const a = 10;
  const age = 10;
  const b = 5;
  console.log(now, a + b);

  return (
    <>
      <p>Greetings from App component {now.toString()}</p>
      <p>{a + b}</p>
      <Hello name="Michael" age={1222} />
      <Hello name="Guuu" age={22} />
      <Hello age={87} />
      <Hello age={age} />
      <Greet spanish="Hola" />
      <Friends />
      <Counter />
    </>
  );
}
//////////////////////
function Counter() {
  const [Count, plus1Count] = useState(0);
  function add() {
    plus1Count(Count + 1);
  }
  return (
    <div>
      <p>Count: {Count}</p>
      <button onClick={add}>Add 1</button>
    </div>
  );
}
//////////////////////////
function Hello(props) {
  console.log(props);
  return (
    <div>
      <p>Hello there {props.name}</p>
      <p>Hello there {props.age}</p>
    </div>
  );
}
/////////////////////////
function Greet(saying) {
  return (
    <div>
      <p>{saying.spanish} sir</p>
    </div>
  );
}

function Friends() {
  const closest = [
    { name: "Jess", age: 23 },
    { name: "Tom", age: 40 },
    ["Mike", "Roh", "Davis-Junior"],
  ];
  console.log(closest[0], closest[1]);
  return (
    <>
      <p>{closest[0].name}</p>
      <p>{closest[1].age}</p>
      <p>{closest[2]}</p>
    </>
  );
}

export default App;
