import {Type} from "./Type.ts";
import {Action} from "./Action.ts";
import {SelectedColor} from "./SelectedColor.ts";

export interface Product {
	id: number
	type: Type
	amount: number
	action: Action
	active: boolean
	linked: boolean
	selectedColor: SelectedColor
}
