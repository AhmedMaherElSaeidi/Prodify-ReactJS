import "./AddProduct.sass";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { saveProduct } from "../../services/products";
import ProductFactory from "../../models/ProductFactory";
import { AiFillProduct } from "react-icons/ai";
import Navbar from "../../components/Navbar/Navbar";
import Spinner from "../../components/Spinner/Spinner";
import FormInput from "../../components/Form/FormInput/FormInput";
import FormSelect from "../../components/Form/FormSelect/FormSelect";
import FormSwitcher from "../../components/Form/FormSwitcher/FormSwitcher";

const AddProduct = () => {
  const navigate = useNavigate();
  const [pageData, setPageData] = useState({
    err: null,
    productType: null,
    loading: false,
  });
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setPageData({ ...pageData, loading: true });
      const product = ProductFactory.create(
        data.productType,
        data.sku,
        data.name,
        data.price,
        {
          size: data.size,
          weight: data.weight,
          height: data.height,
          width: data.width,
          length: data.length,
        }
      );

      console.log(await saveProduct(ProductFactory.requestData(product)));
      setPageData({ ...pageData, loading: false, productType: null });
      reset();
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
      setPageData({ ...pageData, err, loading: false });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="product_form"
      className="addproduct-page"
    >
      <Navbar
        header={"ADD PRODUCT"}
        firstButtonProps={{ name: "SAVE", type: "submit" }}
        firstButtonAction={() => handleSubmit(onSubmit)}
        secondButtonProps={{ name: "CANCEL", type: "button" }}
        secondButtonAction={() => navigate("/product-list")}
      />
      {!pageData.loading && (
        <div className="page-body">
          <h3 className="mb-3 text-center">
            <AiFillProduct /> Product Form
          </h3>
          <FormInput
            id="sku"
            type="text"
            label="SKU"
            register={register}
            errors={errors}
          />
          <FormInput
            id="name"
            type="text"
            label="Name"
            register={register}
            errors={errors}
          />
          <FormInput
            id="price"
            label="Price ($)"
            type="number"
            step="0.001"
            register={register}
            errors={errors}
          />
          <FormSelect
            id="productType"
            label="Type Switcher"
            options={["DVD", "Book", "Furniture"]}
            eventHandler={(event) =>
              setPageData({ ...pageData, productType: event.target.value })
            }
            register={register}
            errors={errors}
          />
          {pageData.productType && (
            <FormSwitcher
              typeSwitcher={pageData.productType}
              register={register}
              errors={errors}
            />
          )}
        </div>
      )}
      {pageData.loading && <Spinner />}
    </form>
  );
};

export default AddProduct;
