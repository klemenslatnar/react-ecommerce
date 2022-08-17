import React, { useCallback, useState } from "react";

const ProductContext = React.createContext({
  products: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  getItems: () => {},
});

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);

  const addItem = async (item) => {
    const response = await fetch(
      "https://react-ecommerce-e95ee-default-rtdb.europe-west1.firebasedatabase.app/products.json",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
  };

  const removeItem = (id) => {};

  const getItems = useCallback(async () => {
    const response = await fetch(
      "https://react-ecommerce-e95ee-default-rtdb.europe-west1.firebasedatabase.app/products.json"
    );
    const data = await response.json();
    console.log(data);

    const loadedItems = [];
    for (const key in data) {
      loadedItems.push({
        id: key,
        imageUrl: data[key].imageUrl,
        name: data[key].name,
        price: data[key].price,
      });
    }

    setProducts(loadedItems);
  });

  const productContext = {
    products,
    addItem,
    removeItem,
    getItems,
  };

  console.log(products);

  return (
    <ProductContext.Provider value={productContext}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
