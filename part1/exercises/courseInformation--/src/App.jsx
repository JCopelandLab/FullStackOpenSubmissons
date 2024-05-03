const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </>
  );
};

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <p>
      <Part1 part1={props.part1} exercises1={props.exercises1} />
      <Part2 part2={props.part2} exercises2={props.exercises2} />
      <Part3 part3={props.part3} exercises3={props.exercises3} />
    </p>
  );
};

const Part1 = (props) => {
  return (
    <>
      {props.part1} <br /> <strong>Number of Exercises:</strong>
      {props.exercises1}
      <br />
    </>
  );
};

const Part2 = (props) => {
  return (
    <>
      {props.part2} <br />
      <strong>Number of Exercises:</strong>
      {props.exercises2}
      <br />
    </>
  );
};

const Part3 = (props) => {
  return (
    <>
      {props.part3}
      <br />
      <strong>Number of Exercises:</strong>
      {props.exercises3}
      <br />
    </>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises:
      {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  );
};

export default App;
