// fetchCSVData.js
import Papa from "papaparse";

const csvFilePath = "/dataset/data.csv"; // Ensure the CSV file is in the public folder

const fetchCSVData = async () => {
  try {
    const response = await fetch(csvFilePath);
    const text = await response.text();

    return new Promise((resolve) => {
      Papa.parse(text, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          let labels = [];
          let salesData = [];
          let tasksData = [];

          result.data.forEach((row) => {
            labels.push(row.Month);
            salesData.push(parseFloat(row.Sales));
            tasksData.push(parseFloat(row.Tasks));
          });

          resolve({
            sales: {
              labels,
              datasets: { label: "Sales", data: salesData },
            },
            tasks: {
              labels,
              datasets: { label: "Tasks", data: tasksData },
            },
          });
        },
      });
    });
  } catch (error) {
    console.error("Error fetching CSV data:", error);
    return {
      sales: {
        labels: [],
        datasets: { label: "Sales", data: [] },
      },
      tasks: {
        labels: [],
        datasets: { label: "Tasks", data: [] },
      },
    };
  }
};

export default fetchCSVData;
