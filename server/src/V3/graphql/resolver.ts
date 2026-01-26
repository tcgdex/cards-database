import type { SupportedLanguages } from '@tcgdex/sdk'
import { type Query, Sort } from '../../libs/QueryEngine/filter'
import { recordToQuery } from '../../libs/QueryEngine/parsers'
import { checkLanguage } from '../../util'
import { findCards } from "../components/Card";
import { mapCardMarketPricing, mapTcgplayerPricing } from "./mappers/pricing";
import { findSeries } from "../components/Serie";
import { findSets } from "../components/Set";

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

const middleware = (fn: (lang: SupportedLanguages, query: Query) => any) => (
	_parent: any,
	args: any,
	_context: any,
	info: any
) => {
	// get the locale directive
	const lang = getLang(info)

	const query = recordToQuery(args.filters ?? args)

	// Deprecated code handling
	if (args.pagination) {
		query.$page = args.pagination.page ?? 1
		query.$limit = args.pagination.itemsPerPage ?? 100
	}

	if (args.sort) {
		query.$sort = {
			[args.sort.field]: args.sort.order === 'DESC' ? Sort.DESC : Sort.ASC
		}
	}

	if (!checkLanguage(lang)) {
		return undefined
	}

	return fn(lang, query)
}


export default {
	// Query Endpoints
	Query: {
		cards: middleware((lang, query) => {
			return findCards(lang, query);
		}),

		sets: middleware((lang, query) => {
			return findSets(lang, query);
		}),

		series: middleware((lang, query) => {
			return findSeries(lang, query);
		})
	},

	// Mapping Resolvers
	Card: {
		set: (parent: any) => {
			if (!parent.set) return null;
			return { ...parent.set, _fromCard: true };
		},
		pricing: (parent: any) => {
			return parent.pricing;
		},
	},

	Set: {
		cards: (parent: any) => {
			// Omit cards if this is loaded from a card to prevent circular loading
			if (parent._fromCard) {
				return null;
			}
			return parent.cards
		},

		serie: (parent: any) => {
			if (!parent.serie) return null;
			return { ...parent.serie, _fromSet: true };
		}
	},

	Serie : {
		sets: (parent: any) => {
			// Omit sets if this is loaded from a set to prevent circular loading
			if (parent._fromSet) {
				return null;
			}
			return parent.sets
		},
	},

	Pricing:{
		tcgplayer: (parent: any) => mapTcgplayerPricing(parent.tcgplayer),
		cardmarket: (parent: any) => mapCardMarketPricing(parent.cardmarket),
	}
	// card: middleware((lang, query) => {
	// 	return findOneCard(lang, query)
	// }),
	//
	// // Set Endpoints
	// set: middleware((lang, query) => {
	// 	return findOneSet(lang, query)
	// }),
	// sets: middleware((lang, query) => {
	// 	return findSets(lang, query)
	// }),
	//
	// // Serie Endpoints
	// serie: middleware((lang, query) => {
	// 	return findOneSerie(lang, query)
	// }),
	// series: middleware((lang, query) => {
	// 	return findSeries(lang, query)
	// }),
};
