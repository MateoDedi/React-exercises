function App() {

  const myName = "Mateo";
  const multiply = (a,b) => a*b;
  const specialClass = "simple-class";

  return (
    <>
    <h1>{myName}</h1>
    <p>2*2 = {2+2}</p>
    <p>friends list: {["Alex", "John", "Jordan"]}</p>
    <p>4*4 = {multiply(4,4)}</p>
    <p className={specialClass}>This is a specialClass</p>
    </>
  );
    

}
export default App;
