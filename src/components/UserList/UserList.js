import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import "./UserList.css";
import Spinner from "../../shared/Spinner";
import { Link } from "react-router-dom";
import { debounceHandler } from "../../shared/Debounce";

const UserList = () => {
  const { users, loading } = useSelector((state) => state.users);
  const [userList, setUserList] = useState(users);
  const [listLoading, setListLoading] = useState(false);

  const handleChange = (e) => {
    setListLoading(true);
    console.log(e.target.value);
    let temp = [];
    temp = users.filter((user) => {
      console.log(user);
      return user ? user.email.includes(e.target.value) : null;
    });
    setUserList(temp);
    setListLoading(false);
  };

  const enhancedHandler = debounceHandler(handleChange, 400);

  if (loading || listLoading) {
    return <Spinner />;
  } else {
    return (
      <>
        <input
          type="text"
          placeholder="Search User by Email"
          onChange={enhancedHandler}
        />
        {userList && (
          <table className="tableBlog">
            <thead className="tbl-header">
              <tr>
                <th>No of Users</th>
                <th>firstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>MoreDetails</th>
              </tr>
            </thead>
            <tbody className="tbl-content">
              {userList.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={`/user/${index}`}>MoreDetails</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </>
    );
  }
};

export default UserList;
