import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Helioptile",
		'fr-fr': "Galvaran",
		'es-es': "Helioptile",
		'it-it': "Helioptile",
		'pt-br': "Helioptile",
		'de-de': "Eguana"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		694,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pound",
				'fr-fr': "Écras’Face",
				'es-es': "Destructor",
				'it-it': "Botta",
				'pt-br': "Pancada",
				'de-de': "Pfund"
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Static Shock",
				'fr-fr': "Choc Statique",
				'es-es': "Impacto Estático",
				'it-it': "Shock Statico",
				'pt-br': "Choque de Estática",
				'de-de': "Statischer Schock"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The frills on either side of its head have cells that generate electricity when exposed to sunlight.",
	},

	thirdParty: {
		cardmarket: 368980,
		tcgplayer: 183824
	}
}

export default card
