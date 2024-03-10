import ProductWidgetsService from "../services/ProductWidgetsService.ts";
import {Product} from "../types/Product.ts";
import {computed, Ref, ref} from "vue";
import {defineStore} from "pinia";

export const useProductWidgetsStore = defineStore('productWidgets', () => {
	const state: Ref<{ productWidgets: Product[] }> = ref({
		productWidgets: []
	});

	const getProductWidgets = () => {
		return ProductWidgetsService.getWidgets()
			.then((response: Product[]) => {
				state.value.productWidgets = response
				return Promise.resolve(response)
		})
	}

	return {
		getProductWidgets,
		productWidgets: computed(
			() => state.value.productWidgets
		)
	}
})
