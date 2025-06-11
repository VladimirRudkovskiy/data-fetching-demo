import { getProducts } from "@/prisma-db";
import { ProductDetails } from "./product-detail";


export type Product = {
	id: number;
	title: string;
	price: number;
	description: string | null;
};

export default async function ProductsDBPage({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }> }) {
	const { query } = await searchParams;
	const products: Product[] = await getProducts(query);

	return (
		<ProductDetails products={products}/>
	)
}
