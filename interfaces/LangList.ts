type LangList<T> = {
	fr?: T
	en?: T
	es?: T
	it?: T
}

export type Langs = "en" | "fr" | "es" | "it"

namespace LangList {
	export function insert(from: LangList<any>, el: any, lang: Langs) {
		if (typeof from !== "object") from = {}
		from[lang] = el
		return from
	}
}

export default LangList
