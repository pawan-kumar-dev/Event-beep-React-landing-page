import React from "react";

const TextContent = ({ title, desc, children }) => {
  return (
    <div className="about_app_left wow fadeInUp">
      {children}
      <h2 className="feature_section_heading">{title}</h2>
      <h4 className="mt-3 feature_section_sub_heading">{desc}</h4>
    </div>
  );
};

export default TextContent;
