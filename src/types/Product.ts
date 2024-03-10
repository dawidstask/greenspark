import {ActionType} from "./ActionType.ts";
import {SelectedColorType} from "./SelectedColorType.ts";

export interface Product {
	id: number
	type: 'carbon' | 'plastic bottles' | 'trees'
	amount: number
	action: ActionType
	active: boolean
	linked: boolean
	selectedColor: SelectedColorType
}
