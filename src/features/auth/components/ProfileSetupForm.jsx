import React, { useState } from "react";

const ProfileSetupForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Setup:", { name, phone });
    alert("Profile setup submitted! (mock)");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px", margin: "0 auto" }}>
      <input 
        type="text" 
        placeholder="Full Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required
      />
      <input 
        type="tel" 
        placeholder="Phone Number" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        required
      />
      <button type="submit" style={{ padding: "10px", cursor: "pointer" }}>Save Profile</button>
    </form>
  );
};

export default ProfileSetupForm;
