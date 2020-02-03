type LangList<T> = {
	fr?: T
	en?: T
	es?: T
	it?: T
}

namespace LangList {
	export function insert(from: LangList<any>, el: any, lang: string) {
		if (typeof from !== "object") from = {}
		from[lang] = el
		return from
	}
}

export default LangList
