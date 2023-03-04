import { RouterProvider } from "react-router-dom";
import ProductProvider from "./contex/ProductProvider/ProductProvider";
import routes from "./Routes/Routes/Routes";



function App() {
  return (
    <ProductProvider>
      <RouterProvider router={routes} />
    </ProductProvider>
  );
}

export default App;
