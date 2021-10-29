import { SupportedLanguages } from '../../../interfaces'
import es from '../../translations/es.json'
import it from '../../translations/it.json'
import pt from '../../translations/pt.json'
import de from '../../translations/de.json'
import fr from '../../translations/fr.json'

type translatable = 'types' | 'rarity' | 'stage' | 'category' | 'suffix' | 'abilityType' | 'trainerType' | 'energyType'

const translations: Record<string, Record<translatable, Record<string, string>>> = {
	es,
	fr,
	it,
	pt,
	de
}

export default function translate(item: translatable, key: string | undefined, lang: SupportedLanguages): string | undefined {
	if (!key) {
		return key
	}
	// Temporary trenslations are in english while they are being worked on
	if (lang === 'en' || !Object.keys(translations).includes(lang)) {
		return key
	}
	const res = translations[lang]?.[item]?.[key]
	if (!res) {
		throw new Error(`Could not find translation for ${lang}.${item}.${key}`)
	}
	return res
}
