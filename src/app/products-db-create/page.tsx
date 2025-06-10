'use client';

import { createProduct, FormState } from "@/actions/products";
import { Submit } from "@/components/submit";
import { useActionState } from "react";


export default function AddProductPage() {

	const initialState: FormState = {
		errors: {},
	};

	const [state, formAction, isPending] = useActionState(createProduct, initialState)

	 return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
			<div>
      <label className="text-white">
        Title
        <input
          type="text"
          className="block w-full p-2 text-white border rounded"
          name="title"
        />
      </label>
			{
				state.errors.title && (
				<p className="text-red-500">{state.errors.title}</p>
			)}
			</div>
			<div>
      <label className="text-white">
        Price
        <input
          type="number"
          className="block w-full p-2 text-white border rounded"
          name="price"

        />
      </label>
			{
				state.errors.price && (
				<p className="text-red-500">{state.errors.price}</p>
			)}
			</div>
			<div>
      <label className="text-white">
        Description
        <textarea
          className="block w-full p-2 text-white border rounded"
          name="description"
        />
      </label>
			{
				state.errors.description && (
				<p className="text-red-500">{state.errors.description}</p>
			)}
      </div>
			<Submit/> {/* add the isActive boolean if not handling pending already by (disabled={isPending}) */}
    </form>
  );
}
