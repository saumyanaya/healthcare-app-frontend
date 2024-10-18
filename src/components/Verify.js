import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Verify = () => {
  const { token } = useParams();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await axios.get(`/api/auth/verify/${token}`);
        alert(res.data.msg);
      } catch (error) {
        console.error("Email verification failed");
      }
    };

    verifyEmail();
  }, [token]);

  return <h2>Verifying email...</h2>;
};

export default Verify;
