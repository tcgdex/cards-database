import { Languages, SupportedLanguages } from '../../../interfaces'
import es from '../../../meta/translations/es.json'
import it from '../../../meta/translations/it.json'
import pt from '../../../meta/translations/pt.json'
import de from '../../../meta/translations/de.json'
import fr from '../../../meta/translations/fr.json'

type translatable = 'types' | 'rarity' | 'stage' | 'category' | 'suffix' | 'abilityType' | 'trainerType' | 'energyType'

const translations: Record<string, Record<translatable, Record<string, string>>> = {
	es,
	fr,
	it,
	pt,
	de
}

export function translate(item: translatable, key: string, langs: Array<SupportedLanguages>): Languages {

	const res: Languages = {}

	for (const lang of langs) {
		// Temporary trenslations are in english while they are being worked on
		res[lang] = translations[lang]?.[item]?.[key] ?? key
		if (!res[lang]) {
			throw new Error(`Could not find translation for ${lang}.${item}.${key}`)
		}
	}


	return res
}

export function validateLanguages<T extends Languages | undefined>(key: T, langs: Array<SupportedLanguages>): T {
	if (!key) {
		return key
	}

	// tmp skip validation
	// for (const lang of langs) {
	// 	if (!key[lang]) {
	// 		throw new Error('invalid')
	// 	}
	// }

	return key
}

export function normalizeLanguages(pot: Languages | string, langs: Array<SupportedLanguages>): Languages {
	if (typeof pot === 'object') {
		return pot
	}
	const out: Languages = {}
	for (const lang of langs) {
		out[lang] = pot
	}
	return out
}
