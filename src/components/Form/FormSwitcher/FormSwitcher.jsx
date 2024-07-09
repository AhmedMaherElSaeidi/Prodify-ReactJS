import React from "react";
import DVDFrom from "../DVDFrom/DVDFrom";
import BookForm from "../BookForm/BookForm";
import FurnitureForm from "../FurnitureForm/FurnitureForm";

const FormSwitcher = ({ typeSwitcher, register, errors }) => {
  const formMapper = {
    Furniture: (register, errors) => (
      <FurnitureForm register={register} errors={errors} />
    ),
    Book: (register, errors) => (
      <BookForm register={register} errors={errors} />
    ),
    DVD: (register, errors) => <DVDFrom register={register} errors={errors} />,
  };

  return formMapper[typeSwitcher](register, errors);
};

export default FormSwitcher;
