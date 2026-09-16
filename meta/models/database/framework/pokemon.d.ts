import type { LanguageSpecific, Name } from "models/globals";
import type { PokemonStage } from "models/database/card";

export interface Pokemon {
	name: { get(...langs: SupportedLanguages[]): Name }
	dexId: number
	evolveFrom?: LanguageSpecific<string> | number
	stage: PokemonStage
}

function createName(nameObj: Name) {
	return Object.assign(nameObj, {
		get: (...langs: SupportedLanguages[]) : Name => {
			// Composite
			if ('main' in nameObj) {
				return {
					prefix: nameObj.prefix && Object.fromEntries(
						langs.map(lang => [lang, nameObj.prefix![lang]])
					),
					main: Object.fromEntries(
						langs.map(lang => [lang, nameObj.main[lang]])
					),
					suffix: nameObj.suffix && Object.fromEntries(
						langs.map(lang => [lang, nameObj.suffix![lang]])
					)
				}
			}
			// Simple
			return Object.fromEntries(langs.map(lang => [lang, nameObj[lang]]))
		}
	})
}
