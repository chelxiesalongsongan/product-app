import { useState } from "react";

import {
  InputField,
  TextAreaField,
} from "./ProductComponents";

function ProductForm() {
  const [code, setCode] = useState("");
  const [description, setDescription] =
    useState("");
  const [unitPrice, setUnitPrice] =
    useState("");
  const [isActive, setIsActive] =
    useState(false);


  const [productInfo, setProductInfo] =
    useState<any>(null);

  function handleSubmit(e: any) {
    e.preventDefault();

  
    setProductInfo({
      code,
      description,
      unitPrice,
      isActive,
    });

    alert("Product Saved!");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Product Form</h2>

        <InputField
          label="Code"
          value={code}
          onChange={(e) =>
            setCode(e.target.value)
          }
          required
          maxLength={10}
        />

        <TextAreaField
          label="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          required
          maxLength={200}
        />

        <InputField
          label="Unit Price"
          type="number"
          value={unitPrice}
          onChange={(e) =>
            setUnitPrice(e.target.value)
          }
        />

        <div>
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e) =>
              setIsActive(e.target.checked)
            }
          />

          <label> Is Active</label>
        </div>

        <br />

        <button type="submit">
          Submit
        </button>
      </form>

      {/* DISPLAY PRODUCT INFO */}
      {productInfo && (
        <div style={{ marginTop: "20px" }}>
          <h2>
            Product Info is Saved
          </h2>

          <h3>Product Details:</h3>

          <p>
            <strong>Code:</strong>{" "}
            {productInfo.code}
          </p>

          <p>
            <strong>Description:</strong>{" "}
            {productInfo.description}
          </p>

          <p>
            <strong>Unit:</strong>{" "}
            {productInfo.unitPrice}
          </p>

          <p>
            <strong>IsActive:</strong>{" "}
            {productInfo.isActive
              ? "Yes"
              : "No"}
          </p>
        </div>
      )}
    </div>
  );
}

export default ProductForm;