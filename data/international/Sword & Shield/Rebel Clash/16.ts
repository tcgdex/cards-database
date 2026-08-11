import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [736],

	name: {
		'en-us': "Grubbin",
		'fr-fr': "Larvibule",
		'es-es': "Grubbin",
		'it-it': "Grubbin",
		'pt-br': "Grubbin",
		'de-de': "Mabula"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gnaw",
				'fr-fr': "Ronge",
				'es-es': "Roer",
				'it-it': "Rosicchiamento",
				'pt-br': "Roída",
				'de-de': "Nagen"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 60,
	types: ["Grass"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Its natural enemies, like Rookidee, may flee rather than risk getting caught in its large mandibles that can snap thick tree branches."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457473,
				tcgplayer: 213086
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457473,
				tcgplayer: 213086
			}
		},
	],
}

export default card
