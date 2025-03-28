import React, { useState } from "react";
import { mockData } from "../utils/mockData";


export default function DataTable() {
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredData = mockData.filter((row) =>
    row.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    let valueA = a[sortField];
    let valueB = b[sortField];

    if (typeof valueA === "string") valueA = valueA.toLowerCase();
    if (typeof valueB === "string") valueB = valueB.toLowerCase();

    return sortOrder === "asc" ? (valueA > valueB ? 1 : -1) : (valueA < valueB ? 1 : -1);
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  return (
    <div className="p-4 w-full max-w-5xl mx-auto">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        className="p-3 border rounded mb-4 w-full max-w-md mx-auto block"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Sorting Controls */}
      <div className="mb-4 flex flex-col sm:flex-row gap-4 items-center">
        <select
          className="p-2 border rounded bg-white w-full cursor-pointer sm:w-auto"
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
        >
          <option value="id">Sort by ID</option>
          <option value="name">Sort by Name</option>
          <option value="email">Sort by Email</option>
        </select>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded w-full sm:w-auto cursor-pointer"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          {sortOrder === "asc" ? "Ascending" : "Descending"}
        </button>
      </div>

      {/* Table (Make Scrollable on Small Screens) */}
      <div className="overflow-x-auto">
        <table className="w-full border bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-300">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((row) => (
                <tr key={row.id} className="text-center border-t">
                  <td className="p-3">{row.id}</td>
                  <td className="p-3">{row.name}</td>
                  <td className="p-3">{row.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center p-4">No data found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-600 text-white rounded disabled:opacity-50 cursor-pointer w-full sm:w-auto"
        >
          Previous
        </button>
        <span className="px-4 py-2 text-center">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-600 text-white rounded disabled:opacity-50 cursor-pointer w-full sm:w-auto"
        >
          Next
        </button>
      </div>
    </div>
  );
}
