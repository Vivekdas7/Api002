import React, { useEffect, useState } from "react";

function App() {
  const [ytctc, setYtctc] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/youtube");
        if (!response.ok) {
          throw new Error(`Http Server Error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setYtctc(data); // Assuming you want to set the data in state
      } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
      }
    };

    fetchdata();
  }, []);

  return <div>App</div>;
}

export default App;
