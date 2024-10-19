// // src/components/ProtectedComponent.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ProtectedComponent = () => {
//     const [data, setData] = useState('');

//     useEffect(() => {
//         const fetchData = async () => {
//             const token = localStorage.getItem('token');

//             if (!token) {
//                 console.log('No token found');
//                 return;
//             }

//             try {
//                 const response = await axios.get('http://localhost:5000/api/protected', {
//                     headers: {
//                         'Authorization': token
//                     }
//                 });
//                 setData(response.data);
//             } catch (error) {
//                 console.error("Error accessing protected route", error);
//             }
//         };

//         fetchData();
//     }, []);

//     return <div>{data ? <p>{data}</p> : <p>Loading...</p>}</div>;
// };

// export default ProtectedComponent;
