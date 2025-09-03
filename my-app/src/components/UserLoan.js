import React from "react";

function UserLoan({ onBack }) {
  // Sadə nümunə loan məlumatları
  const loans = [
    { id: 1, user: "Alice Smith", book: "1984", dueDate: "2025-09-10" },
    { id: 2, user: "Bob Johnson", book: "The Great Gatsby", dueDate: "2025-09-15" },
  ];

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "30px auto",
        padding: 20,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0fff0",
        borderRadius: 12,
        textAlign: "center",
        boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
      }}
    >
      <h1 style={{ color: "#4D7AFF", marginBottom: 20 }}>User Loan Page</h1>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc", padding: 8 }}>ID</th>
            <th style={{ borderBottom: "1px solid #ccc", padding: 8 }}>User</th>
            <th style={{ borderBottom: "1px solid #ccc", padding: 8 }}>Book</th>
            <th style={{ borderBottom: "1px solid #ccc", padding: 8 }}>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td style={{ borderBottom: "1px solid #eee", padding: 8 }}>{loan.id}</td>
              <td style={{ borderBottom: "1px solid #eee", padding: 8 }}>{loan.user}</td>
              <td style={{ borderBottom: "1px solid #eee", padding: 8 }}>{loan.book}</td>
              <td style={{ borderBottom: "1px solid #eee", padding: 8 }}>{loan.dueDate}</td>
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

export default UserLoan;