import { Card as DBCard, Set as DBSet, Serie as DBSerie, Languages, SupportedLanguages } from '../../interfaces'

export type Override<Base, New> = Omit<Base, keyof New> & New

export type CompiledCard = Override<DBCard, {
	id: string
	localId: string
	image?: Languages
	rarity: Languages
	category: Languages
	types?: Array<Languages>
	stage?: Languages
	suffix?: Languages
	set: string
	abilities?: Array<Override<NonNullable<DBCard['abilities']>[number], {
		type: Languages
	}>>
	attacks?: Array<Override<NonNullable<DBCard['attacks']>[number], {
		cost?: Array<Languages>
	}>>
	weaknesses?: Array<Override<NonNullable<DBCard['weaknesses']>[number], {
		type: Languages
	}>>
	resistances?: Array<Override<NonNullable<DBCard['resistances']>[number], {
		type: Languages
	}>>
	trainerType?: Languages
	energyType?: Languages
	legal: {
		standard: boolean
		expanded: boolean
	}

	updated: string
}>

export type CompiledSet = Override<DBSet, {
	updated: string
	serie: string
	logo?: Languages
	symbol?: string
	cards: Array<string>
	releaseDate: Languages
}>

export type CompiledSerie = Override<DBSerie, {
	updated: string
	firstSet: string
	lastSet: string
	releaseDate: DBSet['releaseDate']
	energies?: Array<Languages>
	sets: Array<string>
}>
