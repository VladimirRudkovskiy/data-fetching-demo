'use server'

import { addProduct, updateProduct } from "@/prisma-db";
import { redirect } from "next/navigation";

export type Errors = {
	title?: string;
	price?: string;
	description?: string;
};

export type FormState={
	errors: Errors;
}

export async function createProduct(
	prevState: FormState,
	formData: FormData
) {
		const title = formData.get('title') as string;
		const price = formData.get('price') as string;
		const description = formData.get('description') as string;

		const errors: Errors = {};

		if(!title) {
			errors.title = "Title is required";
		};

		if(!price) {
			errors.price = "Price is required";
		};

		if(!description) {
			errors.description = "Description is required";
		};

		if (Object.keys(errors).length > 0) {
			return {errors}
		} //validating the FormData and setting appropriate error messages

		await addProduct(title, parseInt(price), description);

		redirect('/products-db');
	}

	export async function editProduct(
		id: number,
		prevState: FormState,
		formData: FormData,
	) {
		const title = formData.get('title') as string;
		const price = formData.get('price') as string;
		const description = formData.get('description') as string;

		const errors: Errors = {};

		if(!title) {
			errors.title = "Title is required";
		};

		if(!price) {
			errors.price = "Price is required";
		};

		if(!description) {
			errors.description = "Description is required";
		};

		if (Object.keys(errors).length > 0) {
			return {errors}
		} //validating the FormData and setting appropriate error messages

		await updateProduct(id, title, parseInt(price), description);

		redirect('/products-db');
	}
