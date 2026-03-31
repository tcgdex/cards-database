import type { SupportedLanguages } from '@tcgdex/sdk'
import { type Query, Sort } from '../../libs/QueryEngine/filter'
import { recordToQuery } from '../../libs/QueryEngine/parsers'
import { checkLanguage } from '../../util'
import { findCards } from "../components/Card";
import { mapCardMarketPricing, mapTcgplayerPricing } from "./mappers/pricing";
import { findSeries } from "../components/Serie";
import { findSets } from "../components/Set";

// TODO: once api is the source of truth for supported languages, remove this and use the one from the api instead
const SUPPORTED_LANGUAGES = ['en', 'fr', 'es', 'it', 'pt', 'de', 'nl', 'pl', 'ru', 'zh-tw', 'zh-cn', 'ja', 'ko']


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

// function getLang(info: GraphQLResolveInfo): SupportedLanguages {
// 	const directives = info.fieldNodes[0]?.directives ?? []
// 	const localeDirective = directives.find(d => d.name.value === 'locale')
// 	const langArg = localeDirective?.arguments?.find(a => a.name.value === 'lang')
//
// 	if (!langArg) return 'en'
//
// 	if (langArg.value.kind === 'Variable') {
// 		return info.variableValues[langArg.value.name.value] as SupportedLanguages
// 	}
//
// 	return (langArg.value as StringValueNode).value as SupportedLanguages
// }

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
		locales: async (parent: any, args: { langs?: SupportedLanguages[] }) => {
			const langs = args.langs ?? SUPPORTED_LANGUAGES
			const query = recordToQuery(parent)

			return Promise.all(
				langs 
					.filter(checkLanguage)
					.map(async (lang: SupportedLanguages) => {
						const [card] = await findCards(lang, query)
						return {
							lang,
							...card
						}
					})
			)
		}
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
