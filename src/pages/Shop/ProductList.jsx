import React, { useState, useEffect } from "react";
import ProductService from "../../services/product.service";
import Card from "../../components/Card";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchParams, setSearchParams] = useSearchParams();
  const [itemPerPage, setItemPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const categoryQuery = searchParams.get("category") || "all";
  const itemsPerPageQuery = searchParams.get("itemsPerPage") || 8;

  useEffect(() => {
    setSelectedCategory(categoryQuery);
    setItemPerPage(parseInt(itemsPerPageQuery, 10));
  }, [categoryQuery, itemsPerPageQuery]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProductService.getAllProducts();
        const productsData = response.data;

        setProducts(productsData);
        setCategories([
          "all",
          ...new Set(productsData.map((item) => item.category)),
        ]);
        setFilteredItems(productsData);
      } catch (error) {
        console.error("Failed to fetch products:", error.message);
      }
    };

    fetchData();
  }, []);

  const filterItem = (category) => {
    setSelectedCategory(category);
    const filtered =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);

    handleSortChange(sortOption, filtered);
    setSearchParams({ category });
    setCurrentPage(1);
  };

  const handleSortChange = (option, items) => {
    let sortedItems = [...items];
    switch (option) {
      case "a-z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "z-a":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredItems(sortedItems);
  };

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredItems.length / itemPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="section-container flex flex-col md:flex-row flex-wrap items-center space-y-3 mb-8">
      {/* Filter */}
      <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap w-full md:w-4/5">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => filterItem(category)}
          >
            <p className="capitalize">{category}</p>
          </button>
        ))}
      </div>

      {/* Sort Options */}
      <div className="flex justify-end w-full md:w-1/5 mb-4">
        <div className="bg-black p-2">
          <select
            name="sortOption"
            id="sortOption"
            className="bg-black text-white px-2 rounded-sm"
            value={sortOption}
            onChange={(e) => {
              const newSortOption = e.target.value;
              setSortOption(newSortOption);
              handleSortChange(newSortOption, filteredItems);
            }}
          >
            <option value="default">Default</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="low-to-high">Low-to-High</option>
            <option value="high-to-low">High-to-Low</option>
          </select>
        </div>
      </div>

      {/* Product List */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 w-full">
        {currentItems.length > 0 ? (
          currentItems.map((item) => <Card key={item.id} item={item} />)
        ) : (
          <p className="text-center w-full">No products available</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 rounded-full ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
