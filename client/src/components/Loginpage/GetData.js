import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function GetData() {
  const [data, setData] = useState([]);

  

  useEffect(() => {
    axios.get('http://localhost:5000/users/get')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);



  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/delete/${id}`);
      const newData = data.filter(item => item.id !== id);
      setData(newData);
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div className='container'>
        <h2>Mobile Numbers List</h2>
    <table style={{width:'20%', border:'1px solid black' }}>
      <thead >
        <tr >
          <th>Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody style={{border:'1px solid black'}}>
        {data.map(item => (
            <tr  key={item.id}>
            <td style={{border:'1px solid black'}}> {item.name}</td>
            <div style={{border:'1px solid black'}}>

            <button onClick={() => handleDelete(item.id)}>

            <DeleteIcon  />
            </button>
            <EditIcon />
            </div>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
  );
}

export default GetData;