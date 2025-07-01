import { SupportedLanguages } from '../../../interfaces'
import es from '../../../meta/translations/es.json'
import it from '../../../meta/translations/it.json'
import pt from '../../../meta/translations/pt.json'
import de from '../../../meta/translations/de.json'
import fr from '../../../meta/translations/fr.json'

type translatable = 'types' | 'rarity' | 'stage' | 'category' | 'suffix' | 'abilityType' | 'trainerType' | 'energyType' | 'variantType' | 'variantSize' | 'variantFoil' | 'variantStamp'

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
