const Boxes = () => {
  return (
    <>
      <div
        style={{ height: 100, width: 200, border: "2px solid ", margin: 10 }}
      >
        White box
      </div>
      <div
        style={{ height: 100, width: 200, border: "2px solid ", margin: 10 }}
      >
        White box
      </div>
      <div
        style={{
          height: 100,
          width: 200,
          border: "2px solid blue",
          margin: 10,
          color: "blue",
        }}
      >
        Blue box
      </div>
    </>
  );
};
export default Boxes;
