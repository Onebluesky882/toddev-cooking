import { useState, useEffect } from "react";
import { Product } from "../types";

const MOCK_PRODUCTS: Product[] = [
	{
		id: "1",
		name: "Premium Damascus Chef's Knife",
		description: "An incredibly sharp, perfectly balanced Damascus steel chef's knife with a walnut handle.",
		price: 129.99,
		image: "/images/knife.png",
	},
	{
		id: "2",
		name: "Heritage Cast Iron Skillet",
		description: "A 10-inch preseasoned cast iron skillet for perfect searing and lifetime durability.",
		price: 65.00,
		image: "/images/skillet.png",
	},
	{
		id: "3",
		name: "Artisan Olive Wood Utensils",
		description: "A beautiful set of hand-carved olive wood utensils in a ceramic holder.",
		price: 45.50,
		image: "/images/utensils.png",
	},
];

export function useProducts() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simulate network request
		const timer = setTimeout(() => {
			setProducts(MOCK_PRODUCTS);
			setLoading(false);
		}, 800);

		return () => clearTimeout(timer);
	}, []);

	return {
		products,
		loading,
	};
}
