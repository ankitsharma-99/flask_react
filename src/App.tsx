import React from "react";

const App = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data.members);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {typeof data === "undefined" ? (
        <p>Loading...</p>
      ) : (
        data.map((member, i) => {
          return <p key={i}>{member}</p>;
        })
      )}
    </div>
  );
};

export default App;
