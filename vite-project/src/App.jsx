import { useEffect, useState } from "react";
import './App.css';
function App() {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [ampm, setAmPm] = useState("AM");

  useEffect(() => {
    // Initialize the interval and store the interval ID in a variable
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();
      const currentAmPm = currentHour >= 12 ? "PM" : "AM";
      const displayHour = currentHour % 12 || 12;
      setHour(displayHour);
      setAmPm(currentAmPm);
      setMin(currentDate.getMinutes());
      setSec(currentDate.getSeconds());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="main">
      <div className="timebox flex">
        <p>{hour < 10 ? `0${hour}`: hour}:</p>
        <p>{min < 10 ? `0${min}` : min}:</p>
        <p>{sec < 10 ? `0${sec}` : sec}</p>
        <p>{ampm}</p>
      </div>
    </div>
  );
}

export default App;
