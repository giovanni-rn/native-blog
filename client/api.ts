import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5500', // Replace with your backend URL
});

export default api;

// import api from '../api';

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await api.get('/');
  //     setData(response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };