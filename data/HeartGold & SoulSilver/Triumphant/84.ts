import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Yanma",
		fr: "Yanma",
		de: "Yanma"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		193,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Free Flight",
				fr: "Vol gratuit",
				de: "Freiflug"
			},
			effect: {
				en: "If Yanma has no Energy attached to it, Yanma’s Retreat Cost is 0.",
				fr: "Si aucune carte Énergie n’est attachée à Yanma, son Coût de retraite est de 0.",
				de: "Wenn keine Energie an Yanma angelegt ist, hat Yanma Rückzugskosten von 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Dive",
				fr: "Plongée",
				de: "Taucher"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Its large eyes can scan 360 degrees. It looks in all directions to seek out insects as its prey."
	},

	variants: [
		{ type: 'normal', size: 'standard' },
		{ type: 'reverse', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 279614,
		tcgplayer: 90688
	}
}

export default card
