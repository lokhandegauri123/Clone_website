import { useEffect, useState } from "react";

const Datetime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).toLowerCase().replaceAll(",", "")
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{time}</div>;
};

export default Datetime;
