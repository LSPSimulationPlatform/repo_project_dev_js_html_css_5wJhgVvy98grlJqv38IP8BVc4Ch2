import React, { useState } from "react";

function BookCreate({ addBook, onBack }) {
  const [book, setBook] = useState({ title: "", author: "", year: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate a slight delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    addBook({ ...book, year: Number(book.year) });
    setBook({ title: "", author: "", year: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="book-create-container">
      <div className="book-create-card">
        <div className="header-section">
          <h1 className="page-title">Add New Book</h1>
          <p className="page-subtitle">Fill in the details to add a new book to your collection</p>
        </div>

        <form onSubmit={handleSubmit} className="book-form">
          <div className="input-group">
            <input
              type="text"
              name="title"
              value={book.title}
              onChange={handleChange}
              placeholder=" "
              required
              className="form-input"
            />
            <label className="form-label">Book Title</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              name="author"
              value={book.author}
              onChange={handleChange}
              placeholder=" "
              required
              className="form-input"
            />
            <label className="form-label">Author Name</label>
          </div>

          <div className="input-group">
            <input
              type="number"
              name="year"
              value={book.year}
              onChange={handleChange}
              placeholder=" "
              required
              min="1000"
              max="2023"
              className="form-input"
            />
            <label className="form-label">Publication Year</label>
          </div>

          <button
            type="submit"
            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Adding...
              </>
            ) : (
              "Add Book"
            )}
          </button>
        </form>

        <button
          onClick={onBack}
          className="back-button"
        >
          <span className="back-arrow">←</span> Back to Main Page
        </button>
      </div>

      <style jsx>{`
        .book-create-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 20px;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .book-create-card {
          width: 100%;
          max-width: 480px;
          padding: 40px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .book-create-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 40px rgba(50, 50, 93, 0.15), 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        
        .header-section {
          text-align: center;
          margin-bottom: 30px;
        }
        
        .page-title {
          color: #2d3748;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        
        .page-subtitle {
          color: #718096;
          font-size: 16px;
          font-weight: 400;
        }
        
        .book-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 30px;
        }
        
        .input-group {
          position: relative;
        }
        
        .form-input {
          width: 100%;
          padding: 18px 16px 10px;
          font-size: 16px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          background: #f8fafc;
          transition: all 0.3s ease;
          outline: none;
        }
        
        .form-input:focus {
          border-color: #4D7AFF;
          background: white;
          box-shadow: 0 0 0 3px rgba(77, 122, 255, 0.15);
        }
        
        .form-input:focus + .form-label,
        .form-input:not(:placeholder-shown) + .form-label {
          top: 0;
          transform: translateY(-50%) scale(0.85);
          background: white;
          padding: 0 8px;
          color: #4D7AFF;
          font-weight: 500;
        }
        
        .form-label {
          position: absolute;
          top: 50%;
          left: 16px;
          transform: translateY(-50%);
          color: #718096;
          pointer-events: none;
          transition: all 0.3s ease;
          background: #f8fafc;
          padding: 0 4px;
        }
        
        .submit-button {
          padding: 16px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 12px;
          border: none;
          background: #4D7AFF;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 10px;
        }
        
        .submit-button:hover:not(:disabled) {
          background: #3b5dc9;
          transform: translateY(-2px);
          box-shadow: 0 7px 14px rgba(77, 122, 255, 0.4);
        }
        
        .submit-button:active {
          transform: translateY(0);
        }
        
        .submit-button:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }
        
        .submit-button.submitting {
          background: #3b5dc9;
        }
        
        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .back-button {
          width: 100%;
          padding: 14px;
          font-size: 15px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          background: white;
          color: #718096;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }
        
        .back-button:hover {
          background: #f7fafc;
          border-color: #cbd5e0;
          color: #4a5568;
        }
        
        .back-arrow {
          font-size: 18px;
          transition: transform 0.3s ease;
        }
        
        .back-button:hover .back-arrow {
          transform: translateX(-3px);
        }
      `}</style>
    </div>
  );
}

export default BookCreate;