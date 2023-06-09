import React, { useState } from "react";

const AuthComponent = () => {
  const [token, setToken] = useState(null);

  const handleAuthentication = async () => {
    try {
      const response = await fetch("http://104.211.219.98:3000/train/auth/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName: "Train Central",
          clientID: "85724c19-729e-4243-8cd2-f2ff436c749c",
          clientSecret: "qrgAieJuFVZUsgPm",
          ownerName: "Sonali",
          ownerEmail: "sonalisadana1@gmail.com",
          rollNo: "055",
        }),
      });

      console.log(response); // Log the response to inspect its content

      const tokenData = await response.json();
      const authorizationToken = tokenData.token; // Assuming the token is returned in the response

      setToken(authorizationToken);
    } catch (error) {
      console.error("Error authenticating:", error);
    }
  };

  return (
    <div>
      {token ? (
        <p>Authenticated. Token: {token}</p>
      ) : (
        <button onClick={handleAuthentication}>Authenticate</button>
      )}
    </div>
  );
};

export default AuthComponent;
