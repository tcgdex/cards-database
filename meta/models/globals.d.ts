/**
 * List of currently supported languages by TCGdex
 */
export type SupportedLanguages =
	// inter languages
	'en-us' | 'fr-fr' | 'es-es' | 'es-mx' | 'it-it' | 'pt-pt' | 'pt-br' | 'de-de' | 'nl-nl' | 'pl-pl' | 'ru-ru' |
	// Asian languages
	'ja-jp' | 'ko-kr' | 'zh-tw' | 'id-id' | 'th-th' | 'zh-cn'

/**
 * simple helper type to define language specifics types
 */
export type LanguageSpecific<T, Langs extends SupportedLanguages = SupportedLanguages> = Partial<Record<Langs, T>>

export type ISODate = `${number}-${number}-${number}`

/**
 * List of every existing Pokemon TCG types
 */
export type TCGType =
	| 'Colorless'
	| 'Darkness'
	| 'Dragon'
	| 'Fairy'
	| 'Fighting'
	| 'Fire'
	| 'Grass'
	| 'Lightning'
	| 'Metal'
	| 'Psychic'
	| 'Water'
