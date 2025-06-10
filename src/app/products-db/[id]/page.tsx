import { getProduct } from "@/prisma-db";
import EditProductForm from "./product-edit-form";
import { Product } from "../page";
import { notFound } from "next/navigation";


export default async function EditProductPage({ 
	params,
 } : {
	params: Promise<{id: string}>
}) {

	const { id } = await params;
	const product: Product = await getProduct(parseInt(id));

	if(!product) {
		notFound();
	}

	 return (
		<EditProductForm product={product}/>
	);
}
//router to fetch product details from database
