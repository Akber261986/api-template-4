import { client } from "@/sanity/lib/client";
import Image from "next/image";

const fetchData = async () => {
  const quary = `*[_type == "product" ]{
    _id,
    name,
    "image": image.asset->url,
    
  }`
  const res = await client.fetch(quary);
  return res
}

export default async function Home() {
  const produts = await fetchData()
  return (
    <div>
      {produts.map((product:any)=>(
        <div key={product._id}>
          <h1>{product.name}</h1>
          
          <img src={product.image} alt="image" />
        </div>
      ))}
    </div>
  );
}
