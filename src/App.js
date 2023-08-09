import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import CounterComponent from './components/CounterComponent';
import DragAndDropComponent from './components/DragAndDropComponent';

function App() {
  const [data, setData] = useState([]); // Array to hold fetched data
  const [page, setPage] = useState(1); // Current page number

  const fetchData = async () => {
    // Fetch data from an API or your data source
    const response = await fetch(`your-api-endpoint?page=${page}`);
    const newData = await response.json();
    setData(prevData => [...prevData, ...newData]);
    setPage(prevPage => prevPage + 1);
  };

  const handleScroll = () => {
    // Calculate the scroll position
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= scrollHeight - 100) {
      // Load more data when the user is close to the bottom
      fetchData();
    }
  };

  useEffect(() => {
    fetchData(); // Fetch initial data when the component mounts

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only on mount

  return (
    <div>
      {/* Render your content using the 'data' state */}
      {data.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}

      <CounterComponent />
      <DragAndDropComponent />
    </div>
  );
}

export default App;
