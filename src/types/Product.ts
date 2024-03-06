import {Type} from "./Type.ts";

export interface Product {
	id: number
	type: Type
	amount: number
	action: string
	active: true
	linked: true
	selectedColor: string
}
