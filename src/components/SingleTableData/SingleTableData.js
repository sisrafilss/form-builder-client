import React from "react";

const SingleTableData = ({ formData }) => {
  const { labels, values } = formData;

  return (
    <tbody>
      <tr>
        {values.map((value, index) => (
          <td key={index}>{value}</td>
        ))}
      </tr>
    </tbody>
  );
};

export default SingleTableData;
