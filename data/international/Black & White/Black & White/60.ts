import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Gurdurr",
		'fr-fr': "Ouvrifier",
		'es-es': "Gurdurr",
		'it-it': "Gurdurr",
		'pt-br': "Gurdurr",
		'de-de': "Strepoli"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		533,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Timburr",
		'fr-fr': "Charpenti",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bulk Up",
				'fr-fr': "Gonflette",
			},
			effect: {
				'en-us': "During your next turn, each of this Pokémon's attacks does 20 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Lors de votre prochain tour, chaque attaque de ce Pokémon inflige 20 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Pound",
				'fr-fr': "Écras'Face",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "They strengthen their bodies by carrying steel beams. They show off their big muscles to their friends.",
	},

	thirdParty: {
		cardmarket: 279798,
		tcgplayer: 85980
	}
}

export default card
