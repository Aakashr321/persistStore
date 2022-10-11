import React, { useState } from "react";
import { Button, Dialog, DialogContent } from "@mui/material";
import "./Homepage.css";
import styles from "./AddUser.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/features/userSlice";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  console.log("users", users);

  const handleSubmit = (e) => {
    e.preventDefault();
    let temp = [
      ...users.users,
      {
        firstName,
        lastName,
        email,
      },
    ];
    dispatch(createUser(temp));
    setFirstName("");
    setLastName("");
    setEmail("");
    navigate("/users");
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="homepageContainer">
      <h3>
        Hello and Welcome to the User Content app where you can manage multiple
        Users and their details
      </h3>
      <Button
        style={{ color: "black", background: "green" }}
        variant="filled"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Create User
      </Button>
      <Dialog open={isOpen}>
        <DialogContent>
          <div className={styles.addUserContainer}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">Enter FirstName</label>
              <input
                id="firstname"
                type="text"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <label htmlFor="lastName">Enter LastName</label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <label htmlFor="email">Enter User Email</label>
              <input
                id="email"
                type="email"
                style={{ width: "100%" }}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div style={{ margin: "5px 0" }}>
                <Button
                  className="btn"
                  type="submit"
                  color="success"
                  variant="contained"
                  style={{ marginRight: "10px" }}
                >
                  Add User
                </Button>
                <Button
                  className="btn"
                  color="warning"
                  variant="contained"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Homepage;
