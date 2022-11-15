import React from "react";
import CategoryItem from "../category-tems/CategoryItemsComponet";
import './DirectoryStyles.scss'

const Directory = (props) => {
    const {categories} = props
  return (
    <div className="directory-container">
      {categories.map((category) => {
        const { id } = category;
        return <CategoryItem category={category} key={id} />;
      })}
    </div>
  );
};

export default Directory
