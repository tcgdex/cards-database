import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Boldore",
		'fr-fr': "Géolithe",
		'es-es': "Boldore",
		'it-it': "Boldore",
		'pt-br': "Boldore",
		'de-de': "Sedimantur"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		525,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Roggenrola",
		'fr-fr': "Nodulithe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'Boule",
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hard Crash",
				'fr-fr': "Grosse Gamelle",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage. If tails, this Pokémon does 20 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires. Si c'est pile, ce Pokémon s'inflige 20 dégâts.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Because its energy was too great to be contained, the energy leaked and formed orange crystals.",
	},

	thirdParty: {
		cardmarket: 280016,
		tcgplayer: 83934
	}
}

export default card
