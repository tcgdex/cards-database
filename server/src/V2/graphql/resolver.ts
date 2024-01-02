import { SupportedLanguages } from '@tcgdex/sdk'
import { Query } from '../../interfaces'
import { checkLanguage } from '../../util'
import Card from '../Components/Card'
import Serie from '../Components/Serie'
import Set from '../Components/Set'

const middleware = (fn: (lang: SupportedLanguages, query: Query) => any) => (
	data: Query,
	_: any,
	e: any
) => {

	console.log(data)

	// get the locale directive
	const langArgument = e?.fieldNodes?.[0]?.directives?.[0]?.arguments?.[0]?.value

	// if there is no locale directive
	if (!langArgument) {
		return fn('en', data)
	}

	// set default locale directive value
	let lang = 'en'

	// handle variable for directive value
	if (langArgument.kind === 'Variable') {
		lang = e.variableValues[langArgument.name.value]
	} else {
		lang = langArgument.value
	}

	if (!checkLanguage(lang)) {
		return undefined
	}
	return fn(lang, data)
}

export default {
	// Cards Endpoints
	cards: middleware((lang, query) => {
		return Card.find(lang, query)
	}),
	card: middleware((lang, query) => {
		return Card.findOne(lang, query)
	}),

	// Set Endpoints
	set: middleware((lang, query) => {
		return Set.findOne(lang, query)
	}),
	sets: middleware((lang, query) => {
		return Set.find(lang, query)
	}),

	// Serie Endpoints
	serie: middleware((lang, query) => {
		return Serie.findOne(lang, query)
	}),
	series: middleware((lang, query) => {
		return Serie.find(lang, query)
	}),

};
