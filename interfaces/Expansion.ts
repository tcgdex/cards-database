import LangList from "./LangList";

export default interface Expansion {
	name: LangList<string> | string
	code: string
	sets?: Array<string>
}
