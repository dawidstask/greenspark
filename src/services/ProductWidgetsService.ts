import {Product} from "../types/Product.ts";
import api from "../utils/api.ts";
import {AxiosResponse} from "axios";

class ProductWidgetsService {
	getWidgets(): Promise<Product[]> {
		return api.get<Product[]>('/product-widgets')
			.then((response: AxiosResponse<Product[]>) => response.data)
	}
}

export default new ProductWidgetsService()
