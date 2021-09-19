import { useState, useEffect } from "react";

export default function Card() {

  const [data, setData] = useState([]);

  // dipanggil hanya sekali
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("[ini data]", data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      style={{
        display: "grid",
        // flexWrap: "wrap",
        gridTemplateColumns: "25% 25% 25%  25% ",
        justifyContent: "space-around",
        marginTop: "1.5em",
        Width: "100%",
      }}
    >
      {data.slice(0.1).map((value) => (
        <div style={{}}>
          <div
            style={{
              margin: "10px",
              fontFamily: "poppins",
            }}
          >
            <div
              style={{
                padding: "10px",
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                backgroundColor: "#f5f5f5f2",
                borderRadius: "15px",
                height: "50%",
              }}
              className="group relative shadow"
              onClick={() => alert("Kartu milik : " + value.name)}
            >
              <div
                style={{
                  
                  marginTop: "1.5em",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
                className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75"
              >
                Card Name <p>{value.name}</p>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-900">
                  Name : {value.name}
                </p>
                <p className="text-sm font-medium text-gray-900">
                  Username : {value.username}
                </p>
                <p className="text-sm font-medium text-gray-900">
                  Email : {value.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
