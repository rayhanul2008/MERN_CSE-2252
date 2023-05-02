export default () => {
  const sanjay = ['Sumon', 'Hotash', 'Rafat', 'Alamgir', 'Sakib','janina'];
  return (
    <div className="App">
      {sanjay.map((name) => (<h1>{name}</h1>))}
    </div> 
  );
}
