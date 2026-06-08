import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Finneon",
		fr: "Écayon",
		es: "Finneon",
		it: "Finneon",
		pt: "Finneon",
		de: "Finneon"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		456,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gust",
				fr: "Tornade",
				es: "Tornado",
				it: "Raffica",
				pt: "Lufada de Vento",
				de: "Windstoß"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "When night falls, their pink patterns begin to shine. They're popular with divers, so there are resorts that feed them to keep them close.",
	},

	thirdParty: {
		cardmarket: 388022,
		tcgplayer: 194960
	}
}

export default card
