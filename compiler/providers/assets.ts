import { objectGet } from "@dzeio/object-util"
import { LanguageSpecific, SupportedLanguages } from "models/globals"

const REMOTE = 'https://assets.tcgdex.net/datas.json'

let dlCache: any = undefined

export async function getHashs(): Promise<any> {
	if (!dlCache) {
		console.log('fetching assets')
		dlCache = await fetch(REMOTE).then((res) => res.json())
	}
	return dlCache
}

export async function getAsset(langs: Array<SupportedLanguages>, ...path: Array<string>): Promise<LanguageSpecific<string> | undefined>
export async function getAsset(lang: SupportedLanguages, ...path: Array<string>): Promise<string | undefined>
export async function getAsset(langs: SupportedLanguages | Array<SupportedLanguages>, ...path: Array<string>): Promise<string | LanguageSpecific<string> | undefined> {
	if (typeof langs === 'string') {
		const hashs = await getHashs()
		const exists = Boolean(objectGet(hashs, [langs, ...path]))
		if (!exists) {
			return undefined
		}
		return `https://assets.tcgdex.net/${langs}/${path.join('/')}`
	}

	const out: LanguageSpecific<string> = {}
	for (const lang of langs) {
		out[lang] = await getAsset(lang, ...path)
	}
	return out
}
