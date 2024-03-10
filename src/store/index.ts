import ProductWidgetsService from "../services/ProductWidgetsService.ts";
import {Product} from "../types/Product.ts";
import {computed, Ref, ref} from "vue";
import {defineStore} from "pinia";
import {SelectedColor} from "../types/SelectedColor.ts";

export const useProductWidgetsStore = defineStore('productWidgets', () => {
	const state: Ref<{ productWidgets: Product[] }> = ref({
		productWidgets: []
	});

	const getProductWidgets = (): Promise<Product[]> => {
		return ProductWidgetsService.getWidgets()
			.then((response: Product[]) => {
				state.value.productWidgets = response
				return Promise.resolve(response)
		})
	}

	const setActive = (id: number): void => {
		state.value.productWidgets
			.forEach((item: Product) => item.id === id && !item.active ? item.active = true : item.active = false)
	}

	const setLink = (id: number): void => {
		const product: Product | undefined = getProductById(id)

		if (product) {
			product.linked = !product.linked
		}
	}

	const setColor = (id: number, color: SelectedColor): void => {
		const product: Product | undefined = getProductById(id)

		if (product) {
			product.selectedColor = color
		}
	}

	const getProductById = (id: number): Product | undefined =>
		state.value.productWidgets.find((item: Product) => item.id === id)

	return {
		getProductWidgets,
		setActive,
		setLink,
		setColor,
		productWidgets: computed(
			() => state.value.productWidgets
		)
	}
})
