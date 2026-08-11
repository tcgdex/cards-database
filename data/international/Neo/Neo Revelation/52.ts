import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Skiploom",
		'fr-fr': "Floravol",
		'de-de': "Hubelupf"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		188,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Hoppip",
		'fr-fr': "Granivol"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hop",
				'fr-fr': "Hop",
				'de-de': "Hüpfer"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Mysterious Powder",
				'fr-fr': "Poudre mystérieuse",
				'de-de': "Seltsames Puder"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt verwirrt."
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

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		'en-us': "It spreads its petals to absorb sunlight. It also floats in the air to get closer to the sun.",
		'fr-fr': "Il écarte ses pétales pour absorber la lumière du soleil. Il flotte aussi dans les airs pour se rapprocher de l'astre du jour."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274638,
				tcgplayer: 89253
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274638,
				tcgplayer: 89253
			}
		}
	]
}

export default card

