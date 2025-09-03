import React, { useState } from "react";
import MainPage from "./components/MainPage";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import UserList from "./components/UserList";
import UserLoan from "./components/UserLoan";

function App() {
  const [currentPage, setCurrentPage] = useState("main");

  // Bütün kitablar burada saxlanır
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 2, title: "1984", author: "George Orwell", year: 1949 },
  ]);

  const handleSelectPage = (pageKey) => setCurrentPage(pageKey);
  const handleBack = () => setCurrentPage("main");

  // Yeni kitab əlavə etmək üçün funksiya
  const addBook = (newBook) => {
    setBooks([...books, { id: books.length + 1, ...newBook }]);
    setCurrentPage("update"); // əlavə etdikdən sonra BookList-ə keç
  };

  return (
    <div>
      {currentPage === "main" && <MainPage onSelectPage={handleSelectPage} />}
      {currentPage === "update" && <BookList books={books} onBack={handleBack} />}
      {currentPage === "create" && <BookCreate addBook={addBook} onBack={handleBack} />}
      {currentPage === "list" && <UserList onBack={handleBack} />}
      {currentPage === "loan" && <UserLoan onBack={handleBack} />}
    </div>
  );
}

export default App;