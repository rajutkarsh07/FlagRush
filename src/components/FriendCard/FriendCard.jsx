import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FriendCard.css";

const FriendCard = ({ item }) => {
  // console.log(item);
  const navigate = useNavigate();
  const handleChat = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("userInfo")).token
          }`,
        },
      };
      const { data } = await axios.post(
        `http://localhost:5000/api/v1/chat`,
        { userId: item._id },
        config
      );

      console.log(data);
      navigate("/chat");
    } catch (error) {
      console.error(error);
    }
  };
  //   const [color, setColor] = useState(item.isResolved ? item.isResolved : false);

  return (
    <div className="question">
      <div className="question-txt">
        {/* <p>Requested By:</p> */}
        <div className="profile-pic-2">
          <img src={item.photo ? item.photo : ""} alt="user-image" />
        </div>
        <h3>{item.name ? item.name : ""}</h3>
        <div>
          {item.codeforcesRating ? (
            <p>{`${item.codeforcesRating} rating`}</p>
          ) : (
            "Handle not Provided"
          )}{" "}
        </div>
        <button className="btn-cta-blue" onClick={handleChat}>
          Chat
        </button>
      </div>
    </div>
  );
};

export default FriendCard;