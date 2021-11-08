import Card from '../Components/Card'
import { Options } from '../../interfaces'
import Serie from '../Components/Serie'
import Set from '../Components/Set'
import { SupportedLanguages } from '@tcgdex/sdk'
import { checkLanguage } from '../../util'

const middleware = <Q extends Record<string, any> = Record<string, any>>(fn: (lang: SupportedLanguages, query: Q) => any) => (
	data: Q,
	_: any,
	e: any
) => {
	let lang = e?.fieldNodes?.[0]?.directives?.[0]?.arguments?.[0]?.value?.value
	if (!lang) {
		lang = 'en'
	}
	if (!checkLanguage(lang)) {
		return undefined
	}
	return fn(lang, data)
}

export default {
	// Cards Endpoints
	cards: middleware<Options<keyof Card['card']>>((lang, query) => {
		return Card.find(lang, query.filters ?? {}, query.pagination)
	}),
	card: middleware<{set?: string, id: string}>((lang, query) => {
		const toSearch = query.set ? 'localId' : 'id'
		return Card.findOne(lang, {[toSearch]: query.id})
	}),

	// Set Endpoints
	set: middleware<{id: string}>((lang, query) => {
		return Set.findOne(lang, {id: query.id}) ?? Set.findOne(lang, {name: query.id})
	}),
	sets: middleware<Options<keyof Set['set']>>((lang, query) => {
		return Set.find(lang, query.filters ?? {}, query.pagination)
	}),

	// Serie Endpoints
	serie: middleware<{id: string}>((lang, query) => {
		return Serie.findOne(lang, {id: query.id}) ?? Serie.findOne(lang, {name: query.id})
	}),
	series: middleware<Options<keyof Serie['serie']>>((lang, query) => {
		return Serie.find(lang, query.filters ?? {}, query.pagination)
	}),

};
