import { addProductToDatabase } from "@/actions/serverActions";
import AddProductButton from "@/components/AddProductButton";
import { revalidateTag } from "next/cache";

export interface Product {
  id?: number;
  product: string;
  price: string;
}


export default async function Home() {
  const res = await fetch('https://63b7b2474f17e3a931da1e08.mockapi.io/products', {
    cache: 'no-cache',
    next: {
      tags: ["products"]
    }
  })

  const products: Product[] = await res.json();

  return (
    <main className="">
      <h1 className="text-3xl font-bold text-center py-8">
        Product Warehouse
      </h1>
      
      <AddProductButton />

      <form action={addProductToDatabase} className='flex flex-col gap-5 max-w-xl mx-auto p-5'>
        <label htmlFor='product' className='font-medium'>Name of the product</label>
        <input name="product" className='border border-gray-300 p-2 rounded-md' placeholder="Enter product name"/>
        <label htmlFor='price' className='font-medium'>Price</label>
        <input name="price" className='border border-gray-300 p-2 rounded-md' placeholder="Enter price"/>
        <button className='border bg-blue-500 text-white p-2 rounded-md'>Add Product</button>
      </form>

      <div className="px-24">
        <h2 className="font-bold p-5 text-lg">List of Products</h2>
        <div className="flex flex-wrap gap-5">
          {products.map((product) => (
            <div className="p-5  shadow" key={product.id}>
              <p className=" font-medium">{product.product}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}