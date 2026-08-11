import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Piloswine",
		'fr-fr': "Cochignon",
		'es-es': "Piloswine",
		'it-it': "Piloswine",
		'pt-br': "Piloswine",
		'de-de': "Keifel"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		221,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Swinub",
		'fr-fr': "Marcacrin",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Ice Beam",
				'fr-fr': "Laser Glace",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quintuple Headbutt",
				'fr-fr': "Quintuple Coup d'Boule",
			},
			effect: {
				'en-us': "Flip 5 coins. This attack does 40 damage times the number of heads.",
				'fr-fr': "Lancez 5 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "With its excellent sense of smell, it's even able to find mushrooms that are buried under frozen ground.",
	},

	thirdParty: {
		cardmarket: 280767,
		tcgplayer: 88121
	}
}

export default card
