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

  function handleSubmit(e: any) {
    e.preventDefault();

    alert("Product Saved!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Product Form</h2>

      <InputField label="Code" value={code} onChange={(e) => setCode(e.target.value)}
        required maxLength={10}
      />

      <TextAreaField label="Description" value={description} onChange={(e) => setDescription(e.target.value)
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
  );
}

export default ProductForm;