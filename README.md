# Product Warehouse Application
This project demonstrates a simple application built using React (Next.js) that interacts with a mock API to perform server-side actions such as adding products to a database.

### Server Actions:

The `serverActions.tsx` file contains server-side functions that communicate with the mock API. Specifically, it includes an `addProductToDatabase` function responsible for adding products to the database by sending a POST request to a specified endpoint.

### Workflow:

1. **Data Fetching**: The application fetches product data from a mock API endpoint upon rendering the page.
  
2. **Rendering Product List**: Fetched product data is displayed on the page, showcasing the existing products.

3. **Adding Products**:
   - **Form Submission**: Users can add new products via a form. Upon form submission, the `addProductToDatabase` function from `serverActions.tsx` is triggered.
   - **Predefined Product Addition**: There's a dedicated button ("Add Macbook Pro") triggering the addition of a predefined product using the `addProductToDatabase` function.

4. **Server-side Interaction**:
   - The `addProductToDatabase` function processes the product data received from the form or predefined parameters.
   - It constructs a POST request with the product details and sends it to the mock API endpoint.

5. **Cache Management**:
   - Upon successfully adding a product, the function triggers cache revalidation for the "products" tag using Next.js's cache API.

### Technologies Used:

- React (Next.js)
- TypeScript
- Mock API
- Next.js Cache API

### Running the Project:

To run the project:
1. Clone the repository.
2. Install dependencies (`npm install`).
3. Run the development server (`npm run dev`).
4. Access the application via `http://localhost:3000`.
 