import "./ProductList.sass";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { deleteProduct, fetchAllProducts } from "../../services/products";
import Navbar from "../../components/Navbar/Navbar";
import Spinner from "../../components/Spinner/Spinner";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductList = () => {
  const navigate = useNavigate();
  const [productID, setProductID] = useState([]);
  const [pageData, setPageData] = useState({
    err: null,
    data: null,
    loading: false,
  });

  const fetchProductData = async () => {
    setPageData({ ...pageData, loading: true });
    try {
      const response = await fetchAllProducts();
      setPageData({ ...pageData, data: response.data, loading: false });
    } catch (err) {
      console.log(err);
      setPageData({ ...pageData, err, loading: false });
    }
  };
  const appendProductID = (id) => {
    setProductID([...productID, id]);
  };
  const removeProductID = (id) => {
    setProductID(productID.filter((value) => value !== id));
  };
  const removeProduct = async () => {
    if (!productID.length) {
      return;
    }

    try {
      setPageData({ ...pageData, loading: true });

      // Collect all deleteProduct promises
      const deletePromises = productID.map(async (id) => {
        try {
          await deleteProduct(id);
        } catch (err) {
          console.log(err);
          setPageData({ ...pageData, err, loading: false });
          throw err;
        }
      });

      // Wait for all promises to resolve
      await Promise.all(deletePromises);

      // Only proceed if all deletions are successful
      setPageData({ ...pageData, loading: false });
      fetchProductData();
      setProductID([]);
    } catch (err) {
      console.error("One or more deletions failed:", err);
      setPageData({ ...pageData, err, loading: false });
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="productlist-page">
      <Navbar
        header={"PRODUCT LIST"}
        firstButtonProps={{ name: "ADD", type: "button" }}
        firstButtonAction={() => navigate("/add-product")}
        secondButtonProps={{
          id: "delete-checkbox",
          name: "MASS DELETE",
          type: "button",
          class: productID.length ? "" : "banned",
        }}
        secondButtonAction={removeProduct}
      />
      <div className="page-body">
        {pageData.loading && <Spinner />}
        {!pageData.loading &&
          pageData.data &&
          pageData.data.map((value) => {
            return (
              <ProductCard
                key={value.sku}
                productData={value}
                setID={appendProductID}
                unsetID={removeProductID}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
