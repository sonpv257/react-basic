import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './ListUser.css';

const ListUser = () => {
  const [listUsers, setListUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      let res = await axios.get('https://reqres.in/api/users?page=1');
      setListUsers(res && res.data && res.data.data ? res.data.data : []);
    };

    fetchUsers();
  }, []);

  const handleViewDetailUser = (user) => {
    navigate(`/user/${user.id}`);
  };

  return (
    <section className="user-section">
      <div className="list-container">
        <div className="list-header">
          <h2 className="list-title">Fetch all list users</h2>
        </div>
        <div className="table-container">
          <table className="user-table">
            <thead className="table-header">
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {listUsers && listUsers.length > 0 &&
                listUsers.map((user, index) => (
                  <tr key={user.id} onClick={() => handleViewDetailUser(user)}>
                    <td>{index + 1}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ListUser;
