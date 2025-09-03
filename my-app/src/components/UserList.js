import React from "react";

function UserList({ onBack }) {
  const users = [
    { id: 1, name: "Alice Smith", email: "alice@example.com" },
    { id: 2, name: "Bob Johnson", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
  ];

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "30px auto",
        padding: 20,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f8ff",
        borderRadius: 12,
        textAlign: "center",
        boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
      }}
    >
      <h1 style={{ color: "#4D7AFF", marginBottom: 20 }}>User List Page</h1>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc", padding: 8 }}>ID</th>
            <th style={{ borderBottom: "1px solid #ccc", padding: 8 }}>Name</th>
            <th style={{ borderBottom: "1px solid #ccc", padding: 8 }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ borderBottom: "1px solid #eee", padding: 8 }}>{user.id}</td>
              <td style={{ borderBottom: "1px solid #eee", padding: 8 }}>{user.name}</td>
              <td style={{ borderBottom: "1px solid #eee", padding: 8 }}>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={onBack}
        style={{
          marginTop: 20,
          padding: "10px 20px",
          fontSize: 16,
          borderRadius: 8,
          border: "none",
          backgroundColor: "#aaa",
          color: "white",
          cursor: "pointer",
        }}
      >
        Back to Main Page
      </button>
    </div>
  );
}

export default UserList;