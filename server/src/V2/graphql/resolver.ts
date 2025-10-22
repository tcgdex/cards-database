import type { SupportedLanguages } from '@tcgdex/sdk'
import { type Query, Sort } from '../../libs/QueryEngine/filter'
import { recordToQuery } from '../../libs/QueryEngine/parsers'
import { checkLanguage } from '../../util'
import { findCards, findOneCard } from '../Components/Card'
import { findSets, findOneSet } from '../Components/Set'
import { findSeries, findOneSerie } from '../Components/Serie'

// TODO: make a better way to find the language
function getLang(e: any): SupportedLanguages {
	// get the locale directive
	const langArgument = e?.fieldNodes?.[0]?.directives?.[0]?.arguments?.[0]?.value

	if (!langArgument) {
		return 'en'
	}

	if (langArgument.kind === 'Variable') {
		return e.variableValues[langArgument.name.value]
	}
	return langArgument.value
}

const middleware = (fn: (lang: SupportedLanguages, query: Query<object>) => any) => (
	data: Record<string, any>,
	_: any,
	e: any
) => {
	// get the locale directive
	const lang = getLang(e)

	const query = recordToQuery(data.filters ?? data)

	// Deprecated code handling
	if (data.pagination) {
		query.$page = data.pagination.page ?? 1
		query.$limit = data.pagination.itemsPerPage ?? 100
	}


	if (data.sort) {
		query.$sort = {
			[data.sort.field]: data.sort.order === 'DESC' ? Sort.DESC : Sort.ASC
		}
	}

	if (!checkLanguage(lang)) {
		return undefined
	}

	return fn(lang, query)
}

export default {
	// Cards Endpoints
	cards: middleware((lang, query) => {
		return findCards(lang, query)
	}),
	card: middleware((lang, query) => {
		findOneCard(lang, query).then(console.log)
		return findOneCard(lang, query)
	}),

	// Set Endpoints
	set: middleware((lang, query) => {
		return findOneSet(lang, query)
	}),
	sets: middleware((lang, query) => {
		return findSets(lang, query)
	}),

	// Serie Endpoints
	serie: middleware((lang, query) => {
		return findOneSerie(lang, query)
	}),
	series: middleware((lang, query) => {
		return findSeries(lang, query)
	}),

};
