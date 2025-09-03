import React, { useState } from "react";

function BookList({ books, onBack }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  // Filter books based on search term
  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.year.toString().includes(searchTerm)
  );

  // Sort books based on column
  const sortedBooks = React.useMemo(() => {
    if (!sortConfig.key) return filteredBooks;
    
    return [...filteredBooks].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }, [filteredBooks, sortConfig]);

  // Handle sorting when column header is clicked
  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "30px auto",
        padding: 25,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#ffffff",
        borderRadius: 16,
        textAlign: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ 
        color: "#4D7AFF", 
        marginBottom: 20, 
        fontSize: 28,
        fontWeight: 600
      }}>
        Book Collection
      </h1>
      
      {/* Search Box */}
      <div style={{ marginBottom: 25, position: 'relative' }}>
        <input
          type="text"
          placeholder="Search by title, author, or year..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 20px 12px 45px",
            fontSize: 16,
            borderRadius: 50,
            border: "1px solid #e0e0e0",
            outline: "none",
            boxSizing: "border-box",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            transition: "all 0.3s ease"
          }}
          onFocus={(e) => {
            e.target.style.boxShadow = "0 2px 12px rgba(77, 122, 255, 0.2)";
            e.target.style.borderColor = "#4D7AFF";
          }}
          onBlur={(e) => {
            e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
            e.target.style.borderColor = "#e0e0e0";
          }}
        />
        <span style={{
          position: 'absolute',
          left: 15,
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#aaa'
        }}>
          🔍
        </span>
      </div>
      
      {/* Results count */}
      <div style={{ 
        textAlign: 'left', 
        marginBottom: 15, 
        color: '#666',
        fontSize: 14
      }}>
        {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'} found
      </div>

      {/* Books Table */}
      <div style={{
        borderRadius: 12,
        overflow: 'hidden',
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
      }}>
        <table style={{ 
          width: "100%", 
          borderCollapse: "collapse",
          backgroundColor: 'white'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              {['id', 'title', 'author', 'year'].map((key) => (
                <th 
                  key={key}
                  onClick={() => handleSort(key)}
                  style={{ 
                    padding: "12px 15px", 
                    textAlign: 'left',
                    fontWeight: 600,
                    color: '#4a5568',
                    cursor: 'pointer',
                    userSelect: 'none',
                    position: 'relative',
                    borderBottom: "2px solid #e2e8f0",
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f1f5f9';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '';
                  }}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  {sortConfig.key === key && (
                    <span style={{ marginLeft: 5 }}>
                      {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedBooks.length > 0 ? (
              sortedBooks.map((b) => (
                <tr key={b.id} style={{
                  borderBottom: "1px solid #f1f1f1",
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.target.parentNode.style.backgroundColor = '#f8fbff';
                }}
                onMouseLeave={(e) => {
                  e.target.parentNode.style.backgroundColor = '';
                }}>
                  <td style={{ padding: "12px 15px", color: '#718096' }}>{b.id}</td>
                  <td style={{ padding: "12px 15px", fontWeight: 500 }}>{b.title}</td>
                  <td style={{ padding: "12px 15px" }}>{b.author}</td>
                  <td style={{ padding: "12px 15px" }}>{b.year}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ 
                  padding: "20px", 
                  textAlign: "center", 
                  color: "#a0aec0",
                  fontStyle: 'italic'
                }}>
                  No books found matching your search
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <button
        onClick={onBack}
        style={{
          marginTop: 25,
          padding: "12px 24px",
          fontSize: 16,
          borderRadius: 8,
          border: "none",
          backgroundColor: "#4D7AFF",
          color: "white",
          cursor: "pointer",
          fontWeight: 500,
          transition: "all 0.2s ease",
          boxShadow: "0 4px 6px rgba(77, 122, 255, 0.2)"
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#3b5bdb";
          e.target.style.transform = "translateY(-2px)";
          e.target.style.boxShadow = "0 6px 12px rgba(77, 122, 255, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#4D7AFF";
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 4px 6px rgba(77, 122, 255, 0.2)";
        }}
      >
        ← Back to Main Page
      </button>
    </div>
  );
}

export default BookList;