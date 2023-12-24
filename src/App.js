import React, { useState } from 'react';
import './App.css';

function App() {
  const [tableData, setTableData] = useState([
    { date: '2022-09-01', views: 100, article: 'Article 1' },
    { date: '2023-09-01', views: 100, article: 'Article 1' },
    { date: '2023-09-02', views: 150, article: 'Article 2' },
    { date: '2023-09-02', views: 120, article: 'Article 3' },
    { date: '2020-09-03', views: 200, article: 'Article 4' },
  ]);

  const handleDate = () => {
    const sortedByDate = [...tableData].sort((a, b) => {
      // Sort by date in ascending order
      return new Date(b.date) - new Date(a.date);
    });
    setTableData(sortedByDate);
  };

  const handleViews = () => {
    const sortedByViews = [...tableData].sort((a, b) => {
      // Sort by views in descending order
      return b.views - a.views;
    });
    setTableData(sortedByViews);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Date and Views Table</h1>
      <div className="sorts">
        <button onClick={handleDate}>Sort by Date</button>
        <button onClick={handleViews}>Sort by Views</button>
      </div>
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Views</th>
              <th>Article</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((ele, index) => (
              <tr key={index}>
                <td>{ele.date}</td>
                <td>{ele.views}</td>
                <td>{ele.article}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
