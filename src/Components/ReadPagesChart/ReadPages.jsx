import { useEffect, useState } from "react";
import { getReadBookDataFromLocalStorage } from "../../Utility/localStorage";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ReadPages = () => {
  const [readListBooksData, setReadListBookData] = useState([]);

  useEffect(() => {
    const readListBooksData = getReadBookDataFromLocalStorage() || [];
    setReadListBookData(readListBooksData);
  }, []);

  console.log(readListBooksData);
  return (
    <div
      style={{
        width: "85%",
        height: "500px",
        marginTop: "40px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div className="text-center mb-12 p-4 bg-[#1313130D] rounded-lg shadow-lg">
        <h2 className="lg:text-2xl font-work font-bold ">
          Bar Chart Represention About Selected Read Books Quantity and Selected
          Read Books Toatal Pages{" "}
        </h2>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={readListBooksData && readListBooksData}
          margin={{ top: 10, right: 30, left: 20, bottom: 100 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" angle={-30} textAnchor="end" interval={0} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="totalPages" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReadPages;
