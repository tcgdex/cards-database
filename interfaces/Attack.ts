import LangList from "./LangList";
import Type from "./Type";

interface Attack {
	cost?: Array<Type>
	name: LangList<string>
	text?: LangList<string>
	damage?: string|number
}

export interface LocalizedAttack {
	cost?: Array<Type|string>
	name: string|LangList<string>
	text?: string|LangList<string>
	damage?: string|number
}

export default Attack
